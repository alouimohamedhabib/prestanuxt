
export type AddressTypeObject = {
    [P in string]?: AddressType
}
export interface AddressType {
    "alias": string,
    "id": string,
    "lastname": string,
    "firstname": string,
    "address1": string,
    "company": string,
    "postcode": string,
    "address2": string,
    "id_state": string,
    "city": string,
    "state_iso": string,
    "state": string,
    "country": string,
    "id_country": string,
    "other": string,
    "country_iso": string,
    "phone_mobile": string,
    "phone": string,
    "dni": string,
    "vat_number": string,
}


