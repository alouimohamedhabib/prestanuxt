import { accountInfoPath, loginPath } from "~~/src/config/APIRoutes";
import ForwardCookies from "~~/src/helpers/forwardCookies";
import prepareCookie from "~~/src/helpers/prepareCookie";
import { HTTPVerbsType } from "~~/src/types/HTTPVerbsType";

export default defineEventHandler(async (event) => {
    const eventBody = await readBody(event);
    const parsedCookies = parseCookies(event)
    let url = process.env.API_ENDPOINT || ""

    let methodString: HTTPVerbsType = "POST"

    if (eventBody.fetch) {
        url += accountInfoPath
        methodString = "GET"
    } else {
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