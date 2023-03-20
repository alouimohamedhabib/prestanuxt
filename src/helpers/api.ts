import { ParamsType } from "../types/ApiType";
import { HTTPVerbsType } from "../types/HTTPVerbsType";
import PagesNamesEnum from "../types/pagesType";

export default class API {
    baseUrl: string | undefined = process.env.API_ENDPOINT
    method: HTTPVerbsType = "GET"
    endpoint: string = ""
    params: ParamsType | undefined
    constructor(endpoint: string, params?: ParamsType, method?: HTTPVerbsType) {
        this.endpoint = endpoint
        this.params = params
        if (method)
            this.method = method
    }
    private async callEndppint(endpointUrl: string) {
        const data = await $fetch(endpointUrl);
        return data;
    }

    async getPageDetails() {
        const url = this.baseUrl + this.endpoint
        const data = await this.callEndppint(url);
        return data
    }



}