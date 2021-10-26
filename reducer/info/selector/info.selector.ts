import { RootState } from "../..";
import { InfoState } from "../info.slicer";

const infoSelector = {
    getState: (state: RootState) => state.info,
    getCigarretsPerDay: (state: RootState) => state.info.cigarretsPerDay,
    getCigarretsPerPack: (state: RootState) => state.info.cigarretsPerPack,
    getCoin: (state: RootState) => state.info.coin,
    getPrice: (state: RootState) => state.info.price,
    getYears: (state: RootState) => state.info.yearsSmook,
    getDeclare: (state: RootState) => state.info.declare
}

export {
    infoSelector
}