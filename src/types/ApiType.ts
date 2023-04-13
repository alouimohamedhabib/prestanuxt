import { Languages } from "./PageType";

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


// EssentialsType

export interface EssentialsType {
    menuItems: MenuItem[];
    currencies: Currencies;
    languages: Languages;
    logo_url: string;
}

export interface Currencies {
    currencies: Currencurrency[];
    current_currency: Currencurrency;
}

export interface Currencurrency {
    iso_code: string;
    numeric_iso_code: string;
    precision: string;
    conversion_rate: string;
    unofficial: string;
    modified: string;
    name: string;
    symbol: string;
    pattern: { [key: string]: string };
    id: number;
    sign: string;
    url: string;
    current: boolean;
}

export interface Shops {
    "1": boolean;
}

export interface MenuItem {
    id: string;
    slug: string;
    type: string;
    label: string;
    url: string;
    children: MenuItem[];
    image_urls: any[];
    page_identifier: string;
    current: boolean;
    depth: number;
}
