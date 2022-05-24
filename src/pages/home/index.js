import React, { useContext, useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import HomePage from '../../components/homePage';
import GlobalContextData from '../../context/contextProvider';
import { fetchedProductDataCleaner } from '../../lib/dataCleaner';
import { requestProductsSearch } from '../../lib/karpageClient';

function Login() {

    const contextData = useContext(GlobalContextData)

    useEffect(() => {
        if (contextData.searchValue !== undefined && contextData.searchValue !== "") {
            const delayDebounceFn = setTimeout(() => {
                onSearchTrigered(contextData.searchValue)
            }, 400);

            return () => clearTimeout(delayDebounceFn);
        }
        // console.log(contextData.searchValue);
    }, [contextData.searchValue]);

    const onSearchTrigered = async (value) => {
        contextData.setIsLoading(true);
        const result = await requestProductsSearch(value);
        if (result && result[0] === 200) {
            let cleanedData = []
            result[1].product_response.map((item, index) => {
                cleanedData = [...cleanedData, fetchedProductDataCleaner(item, index)]
            })
            contextData.setProductsData(cleanedData)
            // console.log(result[1]);
            // console.log(cleanedData);
            contextData.setIsLoading(false)
        }
        contextData.setIsLoading(false)
    }

    return (
        <>
            <HomePage />
        </>
    )
}

export default Login
