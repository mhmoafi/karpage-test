import React, { useContext, useEffect, useState } from "react";
import style from "./homePage.module.scss"
import logo from "../../res/assets/images/karpageLogo.png"
import strings from "../../res/strings";
import { requestLogin } from "../../lib/karpageClient";
import { useNavigate } from "react-router-dom";
import HomePageSearchComponent from "./homePage_search";
import HomePageTableComponent from "./homePage_table";
import GlobalContextData from "../../context/contextProvider";
import LoadingPage from "../common/loading";
import HomePageNoResault from "./homePagen_noResault";

const HomePage = (props) => {


    // const navigate = useNavigate();
    const contextData = useContext(GlobalContextData)

    useEffect(() => {

    }, [])


    const deviceDetector = () => {
        if (contextData.isMobile) {
            return (
                <div className={style.mainContainer}>
                    <HomePageSearchComponent />
                    {tableViewPreparer()}
                </div>
            )
        } else {
            return (
                <div className={style.d_mainContainer}>
                    <div className={style.d_leftContainer}>
                        {tableViewPreparer()}
                    </div>
                    <div className={style.d_rightContainer}>
                        <HomePageSearchComponent />
                    </div>
                </div>
            )
        }
    }

    const tableViewPreparer = () => {

        if (contextData.isLoading) {
            return <LoadingPage type={"local"} />
        } else {
            if (contextData.productsData !== undefined && contextData.productsData.length > 0) {
                return (
                    <>
                        <HomePageTableComponent />
                    </>
                )
            } else if (contextData.productsData !== undefined && contextData.productsData.length === 0 && contextData.searchValue !== "") {
                return (
                    <HomePageNoResault type={"noMatch"} />
                )
            } else if (contextData.productsData === undefined || contextData.searchValue === "") {
                return (
                    <HomePageNoResault type={"empty"} />
                )
            }
        }
    }

    return (
        <>
            {deviceDetector()}
        </>
    )
}

export default HomePage