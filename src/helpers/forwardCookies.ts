import { H3Event } from "h3"
/**
 * Forward cookies to the client side
 * @param data FetchResponse<unknown>
 * @param event H3Event
 */
export default function ForwardCookies(data: any, event: H3Event) {
    const cookies = (data.headers.get('set-cookie') || "")?.split(',')
    console.log(cookies[0]);

    if (event && cookies) {
        for (const cookie of cookies) {
            //   appendHeader(event, 'set-cookie', cookie)
        }
    }
}