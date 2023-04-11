export interface AddProductCartObjectType {
    id_product: number;
    qty: number
    id_product_attribute?: number;
    update?: number;
    op?: "up" | "down";
    action?: "update";
    image_size?: "medium_default"
}