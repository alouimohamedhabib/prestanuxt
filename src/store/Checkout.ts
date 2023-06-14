import { defineStore } from "pinia";
import { AddressTypeObject } from "../types/AddressType";
import { APIResponseType } from "../types/ApiType";
import { PSPaymentOption, PaymentOption } from "../types/PaymentOptionsType";
import { PaymentResponseType } from "../types/PaymentResponseType";
export const useCheckoutStore = defineStore('checkout', {
    state: () => {
        return {
            selectedShippingAddress: NaN,
            shippingAddress: null as unknown as AddressTypeObject,
            carrierId: 4,
            paymentOptions: null as unknown as PaymentOption,
            paymentSubmitted: true,
            paymentSubmissionResponse: { "order": { "totals": { "total": { "type": "total", "label": "Total", "amount": "26.120000", "value": "$26.12" }, "total_paid": { "type": "total_paid", "label": "Total paid", "amount": "0.000000", "value": "$0.00" }, "total_including_tax": { "type": "total_including_tax", "label": "Total (tax incl.)", "amount": "26.120000", "value": "$26.12" }, "total_excluding_tax": { "type": "total_excluding_tax", "label": "Total (tax excl.)", "amount": "26.120000", "value": "$26.12" } }, "id_address_invoice": "41", "id_address_delivery": "41", "subtotals": { "products": { "type": "products", "label": "Subtotal", "amount": "19.120000", "value": "$19.12" }, "discounts": { "type": "discount", "label": null, "amount": null, "value": "" }, "shipping": { "type": "shipping", "label": "Shipping and handling", "amount": "7.000000", "value": "$7.00" }, "tax": { "type": "tax", "label": "Tax", "amount": 0, "value": "$0.00" }, "gift_wrapping": { "type": "gift_wrapping", "label": null, "amount": null, "value": "" } }, "products_count": 1, "shipping": [{ "id_order_invoice": "0", "weight": "0.300000", "shipping_cost_tax_excl": "7.000000", "shipping_cost_tax_incl": "7.000000", "url": "", "id_carrier": "2", "carrier_name": "My carrier", "date_add": "2023-06-14 05:38:12", "type": "Delivery", "can_edit": "true", "tracking_number": "", "id_order_carrier": "25", "order_state_name": "Awaiting bank wire payment", "state_name": "My carrier", "shipping_date": "06/14/2023", "shipping_weight": "0.300 kg", "shipping_cost": "$7.00", "tracking": "-" }], "products": { "32": { "id_product": "1", "id_supplier": "1", "id_manufacturer": "1", "id_category_default": "4", "id_shop_default": "1", "id_tax_rules_group": "9", "on_sale": "0", "online_only": "0", "ean13": "", "isbn": "", "upc": "", "mpn": "", "ecotax": "0.000000", "quantity": "1", "minimal_quantity": "1", "low_stock_threshold": null, "low_stock_alert": "0", "price": "$19.12", "wholesale_price": "0.000000", "unity": "", "unit_price_ratio": "0.000000", "additional_shipping_cost": "0.000000", "reference": "demo_1", "supplier_reference": "", "location": "", "width": "0.000000", "height": "0.000000", "depth": "0.000000", "weight": "0.300000", "out_of_stock": "2", "additional_delivery_times": "1", "quantity_discount": "0", "customizable": "0", "uploadable_files": "0", "text_fields": "0", "active": "1", "redirect_type": "301-category", "id_type_redirected": "0", "available_for_order": "1", "available_date": "0000-00-00", "show_condition": "0", "condition": "new", "show_price": "1", "indexed": "1", "visibility": "both", "cache_is_pack": "0", "cache_has_attachments": "0", "is_virtual": "0", "cache_default_attribute": "1", "date_add": "2022-12-17 15:31:24", "date_upd": "2022-12-17 15:31:24", "advanced_stock_management": "0", "pack_stock_type": "3", "state": "1", "product_type": "combinations", "id_shop": "1", "id_order_detail": "32", "id_order": "26", "id_order_invoice": "0", "id_warehouse": "0", "product_id": "1", "product_attribute_id": "1", "id_customization": "0", "product_name": "Hummingbird printed t-shirt (Size: S - Color: White)", "product_quantity": "1", "product_quantity_in_stock": "1", "product_quantity_refunded": "0", "product_quantity_return": "0", "product_quantity_reinjected": "0", "product_price": 19.12, "reduction_percent": "20.00", "reduction_amount": "0.000000", "reduction_amount_tax_incl": "0.000000", "reduction_amount_tax_excl": "0.000000", "group_reduction": "0.00", "product_quantity_discount": "20.120000", "product_ean13": "", "product_isbn": "", "product_upc": "", "product_mpn": "", "product_reference": "demo_1", "product_supplier_reference": "demo_1_46", "product_weight": "0.300000", "tax_computation_method": "0", "tax_name": "", "tax_rate": 0, "ecotax_tax_rate": "0.000", "discount_quantity_applied": "0", "download_hash": "", "download_nb": "0", "download_deadline": "0000-00-00 00:00:00", "total_price_tax_incl": "19.120000", "total_price_tax_excl": "19.120000", "unit_price_tax_incl": "19.120000", "unit_price_tax_excl": "19.120000", "total_shipping_price_tax_incl": "0.000000", "total_shipping_price_tax_excl": "0.000000", "purchase_supplier_price": "5.490000", "original_product_price": "23.900000", "original_wholesale_price": "0.000000", "total_refunded_tax_excl": "0.000000", "total_refunded_tax_incl": "0.000000", "image": { "id": 2, "id_image": "2", "id_product": "1", "position": "2", "cover": null, "legend": { "1": "Hummingbird printed t-shirt", "2": "Hummingbird printed t-shirt" }, "image_format": "jpg", "source_index": "/home/binshops/domains/binshops.com/public_html/rest/img/p/index.php", "id_shop_list": [], "force_id": false }, "image_size": null, "current_stock": 288, "tax_calculator": { "taxes": [], "computation_method": 1 }, "product_price_wt": 19.12, "product_price_wt_but_ecotax": 19.12, "total_wt": "19.120000", "total_price": "19.120000", "customizedDatas": null, "customizationQuantityTotal": 0, "id_address_delivery": "41", "name": "Hummingbird printed t-shirt (Size: S - Color: White)", "id_product_attribute": "1", "total": "$19.12", "attributes": { "Size": "S ", "Color": "White" }, "cover": { "bySize": { "small_default": { "url": "https://rest.binshops.com/1-small_default/hummingbird-printed-t-shirt.jpg", "width": 98, "height": 98 }, "cart_default": { "url": "https://rest.binshops.com/1-cart_default/hummingbird-printed-t-shirt.jpg", "width": 125, "height": 125 }, "home_default": { "url": "https://rest.binshops.com/1-home_default/hummingbird-printed-t-shirt.jpg", "width": 250, "height": 250 }, "medium_default": { "url": "https://rest.binshops.com/1-medium_default/hummingbird-printed-t-shirt.jpg", "width": 452, "height": 452 }, "large_default": { "url": "https://rest.binshops.com/1-large_default/hummingbird-printed-t-shirt.jpg", "width": 800, "height": 800 } }, "small": { "url": "https://rest.binshops.com/1-small_default/hummingbird-printed-t-shirt.jpg", "width": 98, "height": 98 }, "medium": { "url": "https://rest.binshops.com/1-home_default/hummingbird-printed-t-shirt.jpg", "width": 250, "height": 250 }, "large": { "url": "https://rest.binshops.com/1-large_default/hummingbird-printed-t-shirt.jpg", "width": 800, "height": 800 }, "legend": "Hummingbird printed t-shirt", "id_image": "1", "cover": "1", "position": "1", "associatedVariants": ["2", "4", "6", "8"] }, "default_image": { "bySize": { "small_default": { "url": "https://rest.binshops.com/2-small_default/hummingbird-printed-t-shirt.jpg", "width": 98, "height": 98 }, "cart_default": { "url": "https://rest.binshops.com/2-cart_default/hummingbird-printed-t-shirt.jpg", "width": 125, "height": 125 }, "home_default": { "url": "https://rest.binshops.com/2-home_default/hummingbird-printed-t-shirt.jpg", "width": 250, "height": 250 }, "medium_default": { "url": "https://rest.binshops.com/2-medium_default/hummingbird-printed-t-shirt.jpg", "width": 452, "height": 452 }, "large_default": { "url": "https://rest.binshops.com/2-large_default/hummingbird-printed-t-shirt.jpg", "width": 800, "height": 800 } }, "small": { "url": "https://rest.binshops.com/2-small_default/hummingbird-printed-t-shirt.jpg", "width": 98, "height": 98 }, "medium": { "url": "https://rest.binshops.com/2-home_default/hummingbird-printed-t-shirt.jpg", "width": 250, "height": 250 }, "large": { "url": "https://rest.binshops.com/2-large_default/hummingbird-printed-t-shirt.jpg", "width": 800, "height": 800 }, "legend": "Hummingbird printed t-shirt", "id_image": "2", "cover": null, "position": "2", "associatedVariants": ["1", "3", "5", "7"] }, "unit_price_full": "", "qty_returned": "0", "customizations": [] } }, "amounts": { "subtotals": { "products": { "type": "products", "label": "Subtotal", "amount": "19.120000", "value": "$19.12" }, "discounts": { "type": "discount", "label": null, "amount": null, "value": "" }, "shipping": { "type": "shipping", "label": "Shipping and handling", "amount": "7.000000", "value": "$7.00" }, "tax": { "type": "tax", "label": "Tax", "amount": 0, "value": "$0.00" }, "gift_wrapping": { "type": "gift_wrapping", "label": null, "amount": null, "value": "" } }, "totals": { "total": { "type": "total", "label": "Total", "amount": "26.120000", "value": "$26.12" }, "total_paid": { "type": "total_paid", "label": "Total paid", "amount": "0.000000", "value": "$0.00" }, "total_including_tax": { "type": "total_including_tax", "label": "Total (tax incl.)", "amount": "26.120000", "value": "$26.12" }, "total_excluding_tax": { "type": "total_excluding_tax", "label": "Total (tax excl.)", "amount": "26.120000", "value": "$26.12" } } }, "details": { "id": 26, "reference": "YWAPCLRAW", "order_date": "06/14/2023", "details_url": "https://rest.binshops.com/en/index.php?controller=order-detail&id_order=26", "reorder_url": "https://rest.binshops.com/en/order?submitReorder=&id_order=26", "invoice_url": "", "gift_message": "", "is_returnable": 0, "payment": "PrestaShop REST API", "module": "ps_wirepayment", "recyclable": false, "is_valid": "0", "is_virtual": false, "shipping": [{ "id_order_invoice": "0", "weight": "0.300000", "shipping_cost_tax_excl": "7.000000", "shipping_cost_tax_incl": "7.000000", "url": "", "id_carrier": "2", "carrier_name": "My carrier", "date_add": "2023-06-14 05:38:12", "type": "Delivery", "can_edit": "true", "tracking_number": "", "id_order_carrier": "25", "order_state_name": "Awaiting bank wire payment", "state_name": "My carrier", "shipping_date": "06/14/2023", "shipping_weight": "0.300 kg", "shipping_cost": "$7.00", "tracking": "-" }] }, "history": { "current": { "id_order_state": "10", "invoice": "0", "send_email": "1", "module_name": "ps_wirepayment", "color": "#34209E", "unremovable": "1", "hidden": "0", "logable": "0", "delivery": "0", "shipped": "0", "paid": "0", "pdf_invoice": "0", "pdf_delivery": "0", "deleted": "0", "id_order_history": "28", "id_employee": "0", "id_order": "26", "date_add": "2023-06-14 05:38:12", "employee_firstname": null, "employee_lastname": null, "ostate_name": "Awaiting bank wire payment", "history_date": "06/14/2023", "contrast": "bright" } }, "messages": [], "carrier": { "id_reference": "2", "name": "My carrier", "is_free": "0", "url": "", "shipping_handling": "1", "shipping_external": "0", "range_behavior": "0", "shipping_method": 1, "max_width": "0", "max_height": "0", "max_depth": "0", "max_weight": "0.000000", "grade": "0", "external_module_name": "", "is_module": "0", "need_range": "0", "position": "1", "delay": "Delivery next day!", "id": 2 }, "addresses": { "delivery": { "id_customer": "50", "id_manufacturer": "0", "id_supplier": "0", "id_warehouse": "0", "id_country": "21", "id_state": "4", "alias": "Mon adresse", "company": "", "lastname": "habib", "firstname": "mohamed", "vat_number": "", "address1": "R street test", "address2": "", "postcode": "12345", "city": "USA", "other": "", "phone": "", "phone_mobile": "", "dni": "", "date_add": "2023-04-20 11:54:40", "date_upd": "2023-04-20 11:54:40", "id": 41, "formatted": "mohamed habib<br />R street test<br />USA, Alabama 12345<br />United States" }, "invoice": { "id_customer": "50", "id_manufacturer": "0", "id_supplier": "0", "id_warehouse": "0", "id_country": "21", "id_state": "4", "alias": "Mon adresse", "company": "", "lastname": "habib", "firstname": "mohamed", "vat_number": "", "address1": "R street test", "address2": "", "postcode": "12345", "city": "USA", "other": "", "phone": "", "phone_mobile": "", "dni": "", "date_add": "2023-04-20 11:54:40", "date_upd": "2023-04-20 11:54:40", "id": 41, "formatted": "mohamed habib<br />R street test<br />USA, Alabama 12345<br />United States" } }, "follow_up": "", "labels": { "tax_short": "(tax excl.)", "tax_long": "(tax excluded)" } } },
            paymentSubmissionResponseError: {}
        }
    },
    actions: {
        // fetch shipping addresses
        async fetchAddresses() {
            const { data } = await useFetch('/api/address', {
                method: "POST",
                body: {
                    fetchAll: true
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<AddressTypeObject>

            if (reponseObject.code === 200) {
                this.shippingAddress = reponseObject.psdata

            }
        },
        async setSelectedShippingAddress(id: number) {
            this.selectedShippingAddress = id;
            // push info to the API
            const { data } = await useFetch('/api/address', {
                method: "POST",
                body: {
                    setCheckoutAddress: true,
                    id_address: id
                }
            })

        },
        async fetchPaymentOptions() {
            const { data } = await useFetch("/api/payment", {
                method: "POST",
                body: {
                    fetchAll: true
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<PaymentOption>
            if (reponseObject.code === 200) {
                this.paymentOptions = reponseObject.psdata
                this.paymentOptions
            }
            // TODO handle ERROS
        },
        async dispatchPaymentMethod(selectedPaymentOpt: string) {

            const { data } = await useFetch("/api/payment", {
                method: "POST",
                body: {
                    pay: true,
                    paymentMethodName: selectedPaymentOpt
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<PaymentResponseType>
            if (reponseObject.code === 200) {
                this.paymentSubmissionResponse = reponseObject.psdata.order
            }
            this.paymentSubmissionResponseError = reponseObject.psdata
        }
    },
    getters: {
        getAddresses(state): AddressTypeObject {
            return state.shippingAddress
        },
        getSelectedShippingAddress(state): number {
            return state.selectedShippingAddress
        },
        getPaymentOptions(state): PSPaymentOption[][] {
            const normalizedPaymentOption = Object.values(state?.paymentOptions || {})
            return normalizedPaymentOption
        },
        getPaymentSubmissionResponse(state) {
            return state.paymentSubmissionResponse
        },
        getPaymentSubmissionResponseError(state) {
            return state.paymentSubmissionResponseError
        },
        getPaymentSubmitted(state) {
            return state.paymentSubmitted
        }
    }
})