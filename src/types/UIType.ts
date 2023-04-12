export interface psModalStateType {
    show: boolean;
    type: "ok" | "ko"
    title: string,
    content: string,
    cb: {
        [key: string]: {
            label: string,
            cb: Function | undefined
        }
    }
}