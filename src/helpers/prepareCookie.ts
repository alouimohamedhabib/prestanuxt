export default function prepareCookie(cookies: Record<string, string>): string {
    let psCookie = ""

    Object.keys(cookies).forEach(cookie => {
        if (cookie?.includes('PrestaShop-')) {
            psCookie = `${cookie}=${cookies[cookie]}`
        }
    })
    return psCookie
}