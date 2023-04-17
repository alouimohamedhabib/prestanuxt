import { loginPath } from "~~/src/config/APIRoutes";
import ForwardCookies from "~~/src/helpers/forwardCookies";
import prepareCookie from "~~/src/helpers/prepareCookie";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const parsedCookies = parseCookies(event)
    const data = await $fetch.raw(`${process.env.API_ENDPOINT}${loginPath}`, {
        method: "POST",
        body: {
            ...body
        },
        headers: {
            "cookie": prepareCookie(parsedCookies)
        }
    })
    ForwardCookies(data, event)
    return data
})