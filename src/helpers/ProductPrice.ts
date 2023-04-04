import { ProductType } from "../types/ProductType";

export default function ProductPrice(product: ProductType): string {
    let finalPrice = ""
    if (product.discount_price)
        finalPrice = product.discount_price
    else
        finalPrice = product.price

    return finalPrice
} 