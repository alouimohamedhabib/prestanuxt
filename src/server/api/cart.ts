import { cartPath } from "~~/src/config/APIRoutes";
import prepareCookie from "~~/src/helpers/prepareCookie";

export default defineEventHandler(async (event) => {
    const parsedCookies = parseCookies(event)

    const { id_product, qty, id_product_attribute, fetch } = await readBody(event)
    let url = ""
    if (!fetch) {
        url = `?update=1&id_product=${id_product}&id_product_attribute=${id_product_attribute}&op=up&action=update&image_size=medium_default&qty=${qty}`
    }
    const data = await $fetch.raw(
        `${process.env.API_ENDPOINT}${cartPath}${url}`, {
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
