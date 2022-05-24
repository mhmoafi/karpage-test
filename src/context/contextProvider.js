import React, { createContext, useState } from "react";

const GlobalContextData = createContext();

export const ContextProvider = ({ children }) => {

    const [isGlobalLoading, setIsGlobalLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [isMobile, setIsMobile] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "Mohamad Hossein",
        family: "Moafi",
    });
    const [productsData, setProductsData] = useState()
    const [searchValue, setSearchValue] = useState()

    return (
        <GlobalContextData.Provider value={
            {
                isGlobalLoading, setIsGlobalLoading,
                isLoading, setIsLoading,
                isMobile, setIsMobile,
                isLogin, setIsLogin,
                userInfo, setUserInfo,
                productsData, setProductsData,
                searchValue, setSearchValue,
            }
        }>
            {children}
        </GlobalContextData.Provider>
    )
}

export default GlobalContextData;