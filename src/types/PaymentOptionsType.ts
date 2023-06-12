
export interface PaymentOption {
    [key: string]: PSPaymentOption[]
}

export interface PSPaymentOption {
    module_name: string;
    binary: null | string;
    action: string;
    form: null | string;
    inputs: null | string;
    logo: null | string;
    additionalInformation: string;
    call_to_action_text: string;
    id: string;
}
