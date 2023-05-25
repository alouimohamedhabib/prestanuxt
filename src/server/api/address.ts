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
        url += alladdressesPath
    }
    else if (eventBody.update) {
        // TO DO
        methodString = "POST"
    }
    else if (eventBody.getCountries) {
        // url += TO DO
        methodString = "GET"
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
    console.log(methodString);

    return data
})