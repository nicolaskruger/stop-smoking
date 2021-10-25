import nookies, { parseCookies, setCookie } from "nookies";

const getCookies = <T>(key: string): T => {
    return JSON.parse(
        parseCookies()[key]
    ) as T
}
const setLocalStorage = <T>(val: T, key: string) => {
    setCookie(null, key, JSON.stringify(val), {
        maxAge: (10 * 365 * 24 * 60 * 60),
        path: '/'
    })
}

export { getCookies, setLocalStorage }