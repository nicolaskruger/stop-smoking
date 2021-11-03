import nookies, { parseCookies, setCookie } from "nookies";

const getMyCookies = <T>(key: string): T => {
    const config = (val: string) => {
        return val === "undefined" ? "" : val;
    }
    return JSON.parse(
        config(parseCookies()[key]) || "false"
    ) as T
}
const setMyCookies = <T>(val: T, key: string) => {
    setCookie(null, key, JSON.stringify(val), {
        maxAge: (10 * 365 * 24 * 60 * 60),
        path: '/'
    })
}

export { getMyCookies, setMyCookies }