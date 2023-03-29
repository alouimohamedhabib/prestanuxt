import { useUserInterfaceStore } from "../store";
import { APIResponseType, ParamsType } from "../types/ApiType";
//
export default async function ApiFront<T>(params: ParamsType) {
    const UIStore = useUserInterfaceStore()
    const currentLanguage = UIStore.getDefaultLanguage
    const { method, body, path } = params;
    const { data, pending, refresh } = await useFetch("/api/page", {
        method: "POST",
        //  
        body: {
            path,
            method,
            params: { ...body, id_lang: currentLanguage }
        }
    })
    return data as unknown as Ref<APIResponseType<T>>
}