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
    // {
    //     path: "/cart",
    //     file: "@/pages/checkout/Cart.vue",
    //     name: "cart"
    // },
    // {
    //     path: "/checkout",
    //     file: "@/pages/checkout/Checkout.vue",
    //     name: "checkout"
    // },
    {
        path: "/account",
        file: "@/pages/Account.vue",
        name: "account",
        children: [
            {
                path: "/account/info",
                file: "@/pages/account/Info.vue",
                name: "accountDetails"
            },
            {
                path: "/account/orders",
                file: "@/pages/account/Orders.vue",
                name: "accountOrders"
            },
            {
                path: "/account/orders/:id_order",
                file: "@/pages/account/OrderDetails.vue",
                name: "orderDetails"
            },
            {
                path: "/account/edit",
                file: "@/pages/account/EditAccount.vue",
                name: "accountEdit"
            },
        ]
    },

    {
        path: "/search/:s",
        file: "@/pages/SearchResult.vue",
        name: "SearchResult"
    },
]

export default defaultRoutes 