export interface AccountType {
    success: boolean;
    code: number;
    psdata: AccountPsdata;
}

export interface EditAccountResponseType {
    success: boolean;
    code: number;
    psdata: PsdataEditAccount;
    message: string;
}

export interface PsdataEditAccount {
    registered: boolean;
    message: string;
    customer_id: number;
    session_data: number;
}

export interface AccountPsdata {
    status: string;
    message: string;
    customer_id: string;
    session_data: number;
    cart_count: number;
    user: User;
}

export interface User {
    id: string;
    id_shop: string;
    id_shop_group: string;
    note: null;
    id_gender: string;
    id_default_group: string;
    id_lang: string;
    lastname: string;
    firstname: string;
    birthday: string;
    email: string;
    newsletter: string;
    ip_registration_newsletter: null;
    newsletter_date_add: string;
    optin: string;
    website: null;
    company: null;
    siret: null;
    ape: null;
    outstanding_allow_amount: string;
    show_public_prices: string;
    id_risk: string;
    max_payment_days: string;
    active: string;
    is_guest: string;
    deleted: string;
    date_add: string;
    date_upd: string;
    years: null;
    days: null;
    months: null;
    geoloc_id_country: null;
    geoloc_id_state: null;
    geoloc_postcode: null;
    logged: number;
    id_guest: null;
    groupBox: null;
    id_shop_list: any[];
    force_id: boolean;
}
