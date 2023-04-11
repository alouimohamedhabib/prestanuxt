import { cartPath, lightbootstrap } from "~~/src/config/APIRoutes";
import prepareCookie from "~~/src/helpers/prepareCookie";

export default defineEventHandler(async (event) => {
    const parsedCookies = parseCookies(event)
    const data = await $fetch.raw(
        `${process.env.API_ENDPOINT}${lightbootstrap}`, {
        headers: {
            "cookie": prepareCookie(parsedCookies)
        }
    });

    const cookies = (data.headers.get('set-cookie') || "")?.split(',')
    if (event && cookies) {
        for (const cookie of cookies) {
            appendHeader(event, 'set-cookie', cookie)
        }
    }
    return data
})
