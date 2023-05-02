import { accountInfoPath, accounteditPath, loginPath, logoutPath, registerPath } from "~~/src/config/APIRoutes";
import ForwardCookies from "~~/src/helpers/forwardCookies";
import prepareCookie from "~~/src/helpers/prepareCookie";
import { HTTPVerbsType } from "~~/src/types/HTTPVerbsType";

export default defineEventHandler(async (event) => {
    const eventBody = await readBody(event);
    const parsedCookies = parseCookies(event)
    let url = process.env.API_ENDPOINT || ""
    let methodString: HTTPVerbsType = "GET"

    if (eventBody.fetch) {
        url += accountInfoPath
    }
    else if (eventBody.register) {
        methodString = "POST"
        url += registerPath
    }
    else if (eventBody.logout) {
        url += logoutPath
    }
    else if (eventBody.edit) {
        url += accounteditPath
        methodString = "POST"
    }
    else {
        methodString = "POST"
        url += loginPath
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
    return data
})