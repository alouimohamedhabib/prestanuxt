export default defineEventHandler(async (event) => {
    // read the body object
    const body = await readBody(event)
    console.log(body);

})

