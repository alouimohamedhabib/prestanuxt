export type OrderHistorypsData = {
    carrier_tax_rate: string
    conversion_rate: string
    current_state: string
    date_add: string
    date_upd: string
    delivery_date: string
    delivery_number: string
    gift: string
    gift_message: string
    id_address_delivery: string
    id_address_invoice: string
    id_carrier: string
    id_cart: string
    id_currency: string
    id_customer: string
    id_lang: string
    id_order: string
    id_order_state: string
    id_shop: string
    id_shop_group: string
    invoice: string
    invoice_date: string
    invoice_number: string
    mobile_theme: string
    module: string
    nb_products: string
    note: string
    order_state: string
    order_state_color: string
    payment: string
    recyclable: string
    reference: string
    round_mode: string
    round_type: string
    secure_key: string
    shipping_number: string
    total_discounts: string
    total_discounts_tax_excl: string
    total_discounts_tax_incl: string
    total_paid: string
    total_paid_real: string
    total_paid_tax_excl: string
    total_paid_tax_incl: string
    total_products: string
    total_products_wt: string
    total_shipping: string
    total_shipping_tax_excl: string
    total_shipping_tax_incl: string
    total_wrapping: string
    total_wrapping_tax_excl: string
    total_wrapping_tax_incl: string
    valid: string
}[];

export interface OrderDetailsType {
    totals: Totals;
    id_address_invoice: string;
    id_address_delivery: string;
    subtotals: Subtotals;
    products_count: number;
    shipping: { [key: string]: string }[];
    products: Products;
    amounts: Amounts;
    details: Details;
    history: History;
    messages: any[];
    carrier: Carrier;
    addresses: Addresses;
    follow_up: string;
    labels: Labels;
}

export interface Addresses {
    delivery: Delivery;
    invoice: Delivery;
}

export interface Delivery {
    id_customer: string;
    id_manufacturer: string;
    id_supplier: string;
    id_warehouse: string;
    id_country: string;
    id_state: string;
    alias: string;
    company: string;
    lastname: string;
    firstname: string;
    vat_number: string;
    address1: string;
    address2: string;
    postcode: string;
    city: string;
    other: string;
    phone: string;
    phone_mobile: string;
    dni: string;
    date_add: string;
    date_upd: string;
    id: number;
    formatted: string;
}

export interface Amounts {
    subtotals: Subtotals;
    totals: Totals;
}

export interface Subtotals {
    products: Discounts;
    discounts: Discounts;
    shipping: Discounts;
    tax: Discounts;
    gift_wrapping: Discounts;
}

export interface Discounts {
    type: string;
    label: null | string;
    amount: number | null | string;
    value: string;
}

export interface Totals {
    total: Discounts;
    total_paid: Discounts;
    total_including_tax: Discounts;
    total_excluding_tax: Discounts;
}

export interface Carrier {
    id_reference: string;
    name: string;
    is_free: string;
    url: string;
    shipping_handling: string;
    shipping_external: string;
    range_behavior: string;
    shipping_method: number;
    max_width: string;
    max_height: string;
    max_depth: string;
    max_weight: string;
    grade: string;
    external_module_name: string;
    is_module: string;
    need_range: string;
    position: string;
    delay: string;
    id: number;
}

export interface Details {
    id: number;
    reference: string;
    order_date: string;
    details_url: string;
    reorder_url: string;
    invoice_url: string;
    gift_message: string;
    is_returnable: number;
    payment: string;
    module: string;
    recyclable: boolean;
    is_valid: string;
    is_virtual: boolean;
    shipping: { [key: string]: string }[];
}

export interface History {
    current: { [key: string]: null | string };
}

export interface Labels {
    tax_short: string;
    tax_long: string;
}

export interface Products {
    "23": The23;
}

export interface The23 {
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
    id_order_detail: string;
    id_order: string;
    id_order_invoice: string;
    id_warehouse: string;
    product_id: string;
    product_attribute_id: string;
    id_customization: string;
    product_name: string;
    product_quantity: string;
    product_quantity_in_stock: string;
    product_quantity_refunded: string;
    product_quantity_return: string;
    product_quantity_reinjected: string;
    product_price: number;
    reduction_percent: string;
    reduction_amount: string;
    reduction_amount_tax_incl: string;
    reduction_amount_tax_excl: string;
    group_reduction: string;
    product_quantity_discount: string;
    product_ean13: string;
    product_isbn: string;
    product_upc: string;
    product_mpn: string;
    product_reference: string;
    product_supplier_reference: string;
    product_weight: string;
    tax_computation_method: string;
    tax_name: string;
    tax_rate: number;
    ecotax_tax_rate: string;
    discount_quantity_applied: string;
    download_hash: string;
    download_nb: string;
    download_deadline: string;
    total_price_tax_incl: string;
    total_price_tax_excl: string;
    unit_price_tax_incl: string;
    unit_price_tax_excl: string;
    total_shipping_price_tax_incl: string;
    total_shipping_price_tax_excl: string;
    purchase_supplier_price: string;
    original_product_price: string;
    original_wholesale_price: string;
    total_refunded_tax_excl: string;
    total_refunded_tax_incl: string;
    image: Image;
    image_size: null;
    current_stock: number;
    tax_calculator: TaxCalculator;
    product_price_wt: number;
    product_price_wt_but_ecotax: number;
    total_wt: string;
    total_price: string;
    customizedDatas: null;
    customizationQuantityTotal: number;
    id_address_delivery: string;
    name: string;
    id_product_attribute: string;
    total: string;
    attributes: Attributes;
    cover: Cover;
    default_image: Cover;
    unit_price_full: string;
    qty_returned: string;
    customizations: any[];
}

export interface Attributes {
    Taille: string;
}

export interface Cover {
    bySize: BySize;
    small: Large;
    medium: Large;
    large: Large;
    legend: string;
    id_image: string;
    cover: string;
    position: string;
    associatedVariants: any[];
}

export interface BySize {
    small_default: Large;
    cart_default: Large;
    home_default: Large;
    medium_default: Large;
    large_default: Large;
}

export interface Large {
    url: string;
    width: number;
    height: number;
}

export interface Image {
    id: number;
    id_image: string;
    id_product: string;
    position: string;
    cover: string;
    legend: { [key: string]: string };
    image_format: string;
    source_index: string;
    id_shop_list: any[];
    force_id: boolean;
}

export interface TaxCalculator {
    taxes: any[];
    computation_method: number;
}
