import { accountInfoPath, loginPath, logoutPath, orderhistoryPath, registerPath } from "~~/src/config/APIRoutes";
import ForwardCookies from "~~/src/helpers/forwardCookies";
import prepareCookie from "~~/src/helpers/prepareCookie";
import { HTTPVerbsType } from "~~/src/types/HTTPVerbsType";

export default defineEventHandler(async (event) => {
    const eventBody = await readBody(event);
    const parsedCookies = parseCookies(event)
    let url = process.env.API_ENDPOINT || ""
    let methodString: HTTPVerbsType = "GET"

    if (eventBody.fetch || eventBody.id_order) {
        url += orderhistoryPath
    }
    if (eventBody.id_order) {
        url += '?id_order=' + eventBody.id_order
    }
    // else if (eventBody.register) {
    //     methodString = "POST"
    //     url += registerPath
    // }
    // else if (eventBody.logout) {
    //     url += logoutPath
    // }
    // else {
    //     methodString = "POST"
    //     url += loginPath
    // }
    // let bodyObject = methodString === "POST" ? {
    //     body: {
    //         ...eventBody
    //     }
    // } : undefined
    console.log(eventBody);

    const data = await $fetch.raw(url, {
        method: methodString,
        //  ...bodyObject,
        headers: {
            "cookie": prepareCookie(parsedCookies)
        }
    })
    return data
})