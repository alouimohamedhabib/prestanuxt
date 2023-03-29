export type ParamsType = { [key: string]: any }
export type BannerType = {
    banner_desc: string
    banner_link: string
    image_url: string,
}

export interface APIResponseType<T> {
    code: number;
    success: boolean;
    psdata: T;
}