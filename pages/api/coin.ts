import { NextApiRequest, NextApiResponse } from "next";
import { Coin } from "../../ts";


const value = [
    "Dólar Americano",
    "Dólar Canadense",
    "Libra Esterlina",
    "Peso Argentino",
    "Bitcoin",
    "Litecoin",
    "Euro",
    "Iene Japonês",
    "Franco Suíço",
    "Dólar Australiano",
    "Yuan Chinês",
    "Novo Shekel Israelense",
    "Ethereum",
    "Ripple",
    "Dogecoin"
]

const handle = (
    req: NextApiRequest,
    res: NextApiResponse<Coin[]>
) => {
    return res
        .status(200)
        .json(
            value.map(val => ({ name: val }))
        )
}

export default handle;