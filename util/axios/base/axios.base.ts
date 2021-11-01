import axios from "axios";

const myAxios = (baseURL: string) => {
    return axios.create({
        baseURL
    });
}

export {
    myAxios
}