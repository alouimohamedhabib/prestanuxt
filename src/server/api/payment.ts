import { paymentoptionsPath, setaddresscheckoutPath } from "~~/src/config/APIRoutes";
import { alladdressesPath } from "~~/src/config/APIRoutes";
import ForwardCookies from "~~/src/helpers/forwardCookies";
import prepareCookie from "~~/src/helpers/prepareCookie";
import { HTTPVerbsType } from "~~/src/types/HTTPVerbsType";

export default defineEventHandler(async (event) => {
    const eventBody = await readBody(event);
    const parsedCookies = parseCookies(event)
    let url = process.env.API_ENDPOINT || ""
    let methodString: HTTPVerbsType = "GET"
    if (eventBody.fetchAll) {
        url += paymentoptionsPath
    }
    else if (eventBody.update) {
        methodString = "POST"
    }
    else if (eventBody.pay && eventBody.paymentMethodName) {
        methodString = "GET"
        url += eventBody.paymentMethodName
    }

    let bodyObject = methodString === "POST" ? {
        body: {
            ...eventBody
        }
    } : undefined
    const data = await $fetch.raw(url, {
        method: methodString,
        ...bodyObject,
        headers: {
            "cookie": prepareCookie(parsedCookies)
        }
    })
    ForwardCookies(data, event)
    return {
        _data: data._data
    }
})