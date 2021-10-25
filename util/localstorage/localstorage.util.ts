const getLocalStorage = <T>(key: string): T => {
    if (typeof window === 'undefined') {
        return {} as T
    }
    return JSON.parse(
        localStorage.getItem(key) as string
    ) as T
}
const setLocalStorage = <T>(val: T, key: string) => {
    localStorage.setItem(
        key,
        JSON.stringify(val),
    )
}

export { getLocalStorage, setLocalStorage }