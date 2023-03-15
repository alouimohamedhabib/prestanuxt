import { ParamsType } from "../types/ApiType";
import PagesNamesEnum from "../types/pagesType";

export default class API {
    baseUrl: string | undefined = process.env.API_ENDPOINT
    method: "GET" | "POST" = "GET"
    endpoint: string = ""
    params: ParamsType | undefined
    constructor(endpoint: string, params?: ParamsType) {
        this.endpoint = endpoint
        this.params = params
    }
    private async callEndppint(endpointUrl: string) {
        const data = await $fetch(endpointUrl);
        return data;
    }

    async getPageDetails(pageType: PagesNamesEnum) {
        // https://rest.binshops.com/rest/cart?djdj
        const url = this.baseUrl + "bootstrap"

        const data = await this.callEndppint(url);
        return data
    }



}