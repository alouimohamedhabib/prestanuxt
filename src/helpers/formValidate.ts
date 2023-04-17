function validateEmail(email: string): boolean {
    return /^[\p{L}!#-'*+\-/\d=?^-~]+(.[\p{L}!#-'*+\-/\d=?^-~])*@[^@\s]{2,}$/u.test(email)
}

function notEmptyString(str: string): boolean {
    return str.trim().length > 0
}

export {
    notEmptyString,
    validateEmail
}