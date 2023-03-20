import API from "~~/src/helpers/api"

export default defineEventHandler(async (event) => {
    // read the body object
    const body = await readBody(event)

    const APIInstance = new API(body.path)
    const response = await APIInstance.getPageDetails()
    return response


})

