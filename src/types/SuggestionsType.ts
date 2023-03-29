// Generated by https://quicktype.io

import { ProductType } from "./ProductType";

export interface SuggestionsType {
    label: string;
    products: ProductType[];
    sort_orders: SortOrder[];
    sort_selected: boolean;
    pagination: Pagination;
    facets: any[];
    active_filter: any[];
}

export interface Pagination {
    total_items: string;
    items_shown_from: number;
    items_shown_to: string;
    current_page: number;
    pages_count: number;
    pages: Pages;
    should_be_displayed: boolean;
}

export interface Pages {
    "1": The1;
}

export interface The1 {
    type: string;
    page: number;
    clickable: boolean;
    current: boolean;
    url: string;
}



export interface Cover {
    url: string;
    width: number;
    height: number;
}

export interface Feature {
    name: string;
    value: string;
    id_feature: string;
    position: string;
}

export interface PackItem {
    id_product: string;
    id_supplier: string;
    id_manufacturer: string;
    id_category_default: string;
    id_shop_default: string;
    id_tax_rules_group: string;
    on_sale: string;
    online_only: string;
    ean13: string;
    isbn: string;
    upc: string;
    mpn: string;
    ecotax: string;
    quantity: string;
    minimal_quantity: string;
    low_stock_threshold: null;
    low_stock_alert: string;
    price: string;
    wholesale_price: string;
    unity: string;
    unit_price_ratio: string;
    additional_shipping_cost: string;
    reference: string;
    supplier_reference: string;
    location: string;
    width: string;
    height: string;
    depth: string;
    weight: string;
    out_of_stock: string;
    additional_delivery_times: string;
    quantity_discount: string;
    customizable: string;
    uploadable_files: string;
    text_fields: string;
    active: string;
    redirect_type: string;
    id_type_redirected: string;
    available_for_order: string;
    available_date: string;
    show_condition: string;
    condition: string;
    show_price: string;
    indexed: string;
    visibility: string;
    cache_is_pack: string;
    cache_has_attachments: string;
    is_virtual: string;
    cache_default_attribute: string;
    date_add: string;
    date_upd: string;
    advanced_stock_management: string;
    pack_stock_type: string;
    state: string;
    product_type: string;
    id_shop: string;
    id_lang: string;
    description: string;
    description_short: string;
    link_rewrite: string;
    meta_description: string;
    meta_keywords: string;
    meta_title: string;
    name: string;
    available_now: string;
    available_later: string;
    delivery_in_stock: string;
    delivery_out_stock: string;
    id_image: string;
    legend: string;
    category_default: string;
    pack_quantity: string;
    id_product_pack: string;
    id_product_attribute_item: string;
    id_product_attribute?: string;
    rate: number;
    tax_name: string;
}

export interface SortOrder {
    entity: string;
    field: string;
    direction: string;
    label: string;
    urlParameter: string;
    current: boolean;
    url: string;
}