export default defineEventHandler(async (event) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("ALLAH AKBAR")
        }, 5000);
    })
})