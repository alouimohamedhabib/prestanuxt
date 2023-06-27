import { cartPath, lightbootstrap } from "~~/src/config/APIRoutes";
import ForwardCookies from "~~/src/helpers/forwardCookies";
import prepareCookie from "~~/src/helpers/prepareCookie";

export default defineEventHandler(async (event) => {
    const parsedCookies = parseCookies(event)
    const data = await $fetch.raw(
        `${process.env.API_ENDPOINT}${lightbootstrap}`, {
        headers: {
            "cookie": prepareCookie(parsedCookies)
        }
    });
    // ForwardCookies(data, event)
    return {
        _data: data._data,
        all: parsedCookies
    }
})
