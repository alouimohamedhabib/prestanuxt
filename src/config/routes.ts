const defaultRoutes = [
    {
        path: "/",
        file: "@/pages/Index.vue",
        name: "index"
    },
    {
        path: "/plp",
        file: "@/pages/Plp.vue",
        name: "productList"
    },
    {
        path: "/:category/:id-:name",
        file: "@/pages/Pdp.vue",
        name: "productDetails"
    },
    {
        path: "/cart",
        file: "@/pages/Cart.vue",
        name: "cart"
    },
    {
        path: "/checkout",
        file: "@/pages/Checkout.vue",
        name: "checkout"
    },
    {
        path: "/account",
        file: "@/pages/Account.vue",
        name: "account"
    },
    {
        path: "/account/edit",
        file: "@/components/account/edit.vue",
        name: "accountEdit"
    },
    {
        path: "/account/info",
        file: "@/components/account/Info.vue",
        name: "accountDetails"
    },
    {
        path: "/account/orders",
        file: "@/components/account/Orders.vue",
        name: "accountOrders"
    },
    {
        path: "/account/orders/:order_id",
        file: "@/components/account/OrderDetails.vue",
        name: "orderDetails"
    },
    {
        path: "/search/:s",
        file: "@/pages/SearchResult.vue",
        name: "SearchResult"
    },
]

export default defaultRoutes 