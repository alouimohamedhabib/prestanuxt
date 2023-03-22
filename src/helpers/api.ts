import { ParamsType } from "../types/ApiType";
import { HTTPVerbsType } from "../types/HTTPVerbsType";


export default class API {
    baseUrl: string | undefined = process.env.API_ENDPOINT
    method: HTTPVerbsType = "GET"
    endpoint: string = ""
    params: string | undefined
    constructor(endpoint: string, params?: ParamsType, method?: HTTPVerbsType) {
        this.endpoint = endpoint
        this.params = this.normalizeParams(params)
        if (method)
            this.method = method
    }
    private normalizeParams(params: ParamsType | undefined): string {
        // get the default language
        const defaultLanguage = 2
        let urlString = "?";
        if (params) {
            const parmasAsArray = Object.keys(params)
            parmasAsArray.forEach((key, index) => {
                urlString += `${key}=${params[key]}` +
                    (parmasAsArray.length - 1 === index ? '' : '&')
            }
            )
        } else {
            urlString = "?id_lang=" + defaultLanguage
        }

        return urlString
    }
    private async callEndppint(endpointUrl: string) {
        const data = await $fetch(endpointUrl);
        return data;
    }

    async getPageDetails() {
        const url = this.baseUrl + this.endpoint + this.params
        console.log("====>", url);

        const data = await this.callEndppint(url);
        return data
    }



}