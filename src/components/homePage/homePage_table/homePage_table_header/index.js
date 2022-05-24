import React, { useContext, useEffect, useState } from "react";
import GlobalContextData from "../../../../context/contextProvider";
import strings from "../../../../res/strings";
import style from "./homePage_table_header.module.scss"

const HomePageTableHeader = (props) => {

    const contextData = useContext(GlobalContextData)

    let searchValue;
    // const [isClicked, setIsClicked] = useState(false)
    // const navigate = useNavigate();
    // const contextData = useContext(GlobalContextData)


    useEffect(() => {

    }, [])


    const deviceDetector = () => {
        if (contextData.isMobile) {
            return (
                <MobileViewHtml />
            )
        } else {
            return (
                <DescktopViewHtml />
            )
        }
    }

    const MobileViewHtml = () => {
        return (
            <div className={style.mainContainer}>
                <div className={style.headerNameContainer}>
                    <p className={style.headerText}>
                        {strings.home.table.headerNameText}
                    </p>
                </div>
                <div className={style.headerBrandContainer}>
                    <p className={style.headerText}>
                        {strings.home.table.headerBrandText}
                    </p>
                </div>
                <div className={style.headerImageContainer} />
                <div className={style.headerNumContainer}>
                    <p className={style.headerText}>
                        {strings.home.table.headerNumText}
                    </p>
                </div>
            </div>
        )
    }
    const DescktopViewHtml = () => {
        return (
            <div className={style.d_mainContainer}>
                <div className={style.d_headerColorContainer}>
                    <p className={style.d_headerText}>
                        {strings.home.table.headerColorText}
                    </p>
                </div>
                <div className={style.d_headerStorageContainer}>
                    <p className={style.d_headerText}>
                        {strings.home.table.headerStorageText}
                    </p>
                </div>
                <div className={style.d_headerRamContainer}>
                    <p className={style.d_headerText}>
                        {strings.home.table.headerRamText}
                    </p>
                </div>
                <div className={style.d_headerNameContainer}>
                    <p className={style.d_headerText}>
                        {strings.home.table.headerNameText}
                    </p>
                </div>
                <div className={style.d_headerBrandContainer}>
                    <p className={style.d_headerText}>
                        {strings.home.table.headerBrandText}
                    </p>
                </div>
                <div className={style.d_headerImageContainer} />
                <div className={style.d_headerNumContainer}>
                    <p className={style.d_headerText}>
                        {strings.home.table.headerNumText}
                    </p>
                </div>
            </div>
        )
    }
    return (
        <>
            {deviceDetector()}
        </>
    )
}

export default HomePageTableHeader;