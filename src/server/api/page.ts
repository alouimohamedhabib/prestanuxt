import API from "~~/src/helpers/api"

export default defineEventHandler(async (event) => {
    // read the body object
    const body = await readBody(event)
    const APIInstance = new API("bootstrap")
    const response = await APIInstance.getPageDetails("hp")
    return response


})

