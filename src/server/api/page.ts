import API from "~~/src/helpers/api"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { path, params, method } = body;
    const APIInstance = new API(path, params, method)
    const response = await APIInstance.getPageDetails()
    return response


})

