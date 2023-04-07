export default defineEventHandler(async (event) => {
    const parsedCookies = parseCookies(event)

    const data = await $fetch.raw('https://rest.binshops.com/rest/cart?update=1&id_product=2&id_product_attribute=11&op=up&action=update&image_size=medium_default&qty=3', {
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


function prepareCookie(cookies: Record<string, string>): string {
    let psCookie = ""

    Object.keys(cookies).forEach(cookie => {
        if (cookie?.includes('PrestaShop-')) {
            psCookie = `${cookie}=${cookies[cookie]}`
        }
    })
    return psCookie
}