import { cartPath } from "~~/src/config/APIRoutes";
import prepareCookie from "~~/src/helpers/prepareCookie";

export default defineEventHandler(async (event) => {
    const parsedCookies = parseCookies(event)
    // op, deleteItem , updateItem
    const { id_product, qty, id_product_attribute, fetch, op, update } = await readBody(event)
    let url = ""
    if (!fetch) {
        // update value op, deleteItem , updateItem
        const updateType = update ? 'update=1' : 'delete=1'
        url = `${'?' + updateType}&id_product=${id_product}&id_product_attribute=${id_product_attribute}&${op ? 'op=' + op : ''}&action=update&image_size=medium_default&qty=${qty} `
    }
    const data = await $fetch.raw(
        `${process.env.API_ENDPOINT}${cartPath}${url} `, {
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
