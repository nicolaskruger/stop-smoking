import { myAxios } from ".."
import { ENV, ROUTES_BACKEND } from "../../../constants"
import { Coin } from "../../../ts"

const coinApi = () => {
    const instace = myAxios(ENV.LOCAL_URL)
    const getCoinsName = async (): Promise<Coin[]> => {
        return (await instace.get<Coin[]>(ROUTES_BACKEND.COIN)).data;
    }

    return {
        getCoinsName
    }

}

export {
    coinApi
}