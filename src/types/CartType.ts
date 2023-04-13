export interface AddProductCartObjectType {
    id_product: number;
    qty: number
    id_product_attribute?: number;
    update?: number;
    op?: "up" | "down";
    action?: "update";
    image_size?: "medium_default"
}

export interface PsdataCart {
    products: ProductCart[];
    totals: Totals;
    subtotals: Subtotals;
    products_count: number;
    summary_string: string;
    labels: Labels;
    id_address_delivery: string;
    id_address_invoice: string;
    is_virtual: boolean;
    vouchers: Vouchers;
    discounts: any[];
    minimalPurchase: number;
    minimalPurchaseRequired: string;
    errors: any[];
}

export interface Labels {
    tax_short: string;
    tax_long: string;
}

export interface ProductCart {
    id_product_attribute: string;
    id_product: string;
    cart_quantity: string;
    id_shop: string;
    id_customization: null;
    name: string;
    is_virtual: string;
    description_short: string;
    available_now: string;
    available_later: string;
    id_category_default: string;
    id_supplier: string;
    id_manufacturer: string;
    manufacturer_name: string;
    on_sale: string;
    ecotax: string;
    additional_shipping_cost: string;
    available_for_order: string;
    show_price: string;
    price: number;
    active: string;
    unity: string;
    unit_price_ratio: string;
    quantity_available: string;
    width: string;
    height: string;
    depth: string;
    out_of_stock: string;
    weight: number;
    available_date: string;
    date_add: string;
    date_upd: string;
    quantity: number;
    link_rewrite: string;
    category: string;
    unique_id: string;
    id_address_delivery: string;
    advanced_stock_management: string;
    supplier_reference: string;
    customization_quantity: null;
    price_attribute: null | string;
    ecotax_attr: null | string;
    reference: string;
    weight_attribute: number | null;
    ean13: string;
    isbn: string;
    upc: string;
    mpn: string;
    minimal_quantity: string;
    wholesale_price: string;
    id_image: string;
    legend: string;
    reduction_type: number | string;
    is_gift: boolean;
    reduction: number;
    reduction_without_tax: number;
    price_without_reduction: number;
    specific_prices: any[] | { [key: string]: string };
    stock_quantity: number;
    price_without_reduction_without_tax: number;
    price_with_reduction: number;
    price_with_reduction_without_tax: number;
    total: number;
    total_wt: number;
    price_wt: number;
    reduction_applies: boolean;
    quantity_discount_applies: boolean;
    allow_oosp: number;
    features: Feature[];
    attributes: string;
    attributes_small: string;
    rate: number;
    tax_name: string;
    image_url: string;
    attributes_array: any[] | AttributesArrayClass;
    formatted_price: string;
    formatted_total: string;
    formatted_price_amount: string;
    formatted_price_tax_exc: string;
    formatted_regular_price: string;
    formatted_discount_to_display: null | string;
    formatted_discount_amount_to_display: null | string;
    formatted_discount_type: null | string;
    formatted_discount_percentage: null | string;
}

export interface AttributesArrayClass {
    Size?: string;
    Color?: string;
    Dimension?: string;
}

export interface Feature {
    id_feature: string;
    id_product: string;
    id_feature_value: string;
}

export interface Subtotals {
    products: Products;
    discounts: null;
    shipping: Products;
    tax: Products;
}

export interface Products {
    type: string;
    label: string;
    amount: number;
    value: string;
}

export interface Totals {
    total: Products;
    total_including_tax: Products;
    total_excluding_tax: Products;
}

export interface Vouchers {
    allowed: number;
    added: any[];
}
