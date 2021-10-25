import { InfoState } from "../info.slicer";

const infoSelector = {
    getState: (state: InfoState) => state,
    getCigarretsPerDay: (state: InfoState) => state.cigarretsPerDay,
    getCigarretsPerPack: (state: InfoState) => state.cigarretsPerPack,
    getCoin: (state: InfoState) => state.coin,
    getPrice: (state: InfoState) => state.price,
    getYears: (state: InfoState) => state.yearsSmook,
}

export {
    infoSelector
}