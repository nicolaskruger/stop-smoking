import nookies, { parseCookies, setCookie } from "nookies";

const getMyCookies = <T>(key: string): T => {
    return JSON.parse(
        parseCookies()[key] || "false"
    ) as T
}
const setMyCookies = <T>(val: T, key: string) => {
    setCookie(null, key, JSON.stringify(val), {
        maxAge: (10 * 365 * 24 * 60 * 60),
        path: '/'
    })
}

export { getMyCookies, setMyCookies }