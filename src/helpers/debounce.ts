export default function Debounce(func: Function, timeout = 500) {
    let timer: any;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(func, ...args)
        }, timeout);
    }
}