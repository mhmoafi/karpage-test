import { netCall } from "./lib/netCall";

export const requestLogin = (username, password) => {
    return netCall("POST", { cmd: "login", data: { username: username, password: password } })
}

export const requestProductsSearch = (value) => {
    return netCall('GET', { cmd: "productsSearch", params: { search: value, limit: 20, offset: 0 } })
}