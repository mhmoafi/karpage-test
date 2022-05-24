import Cookies from "js-cookie";

export const loginDetector = (contextData) => {
    const token = Cookies.get();
    if (token.token) {
        // console.log("token", token.token);
        contextData.setIsGlobalLoading(false)
        contextData.setIsLogin(true)
    }
}
export const logout = (contextData) => {
    Cookies.remove("token")
    contextData.setIsLogin(false)
}