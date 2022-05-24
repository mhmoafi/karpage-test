import React, { useContext, useEffect, useState } from "react";
import GlobalContextData from "../../../../context/contextProvider";
import strings from "../../../../res/strings";
import style from "./homePage_table_row.module.scss"
import HomePageTableRowExpand from "./homePage_table_row_expand";

const HomePageTableRow = (props) => {

    const contextData = useContext(GlobalContextData)
    const [isExapnd, setIsExpand] = useState(false)

    let searchValue;
    // const [isClicked, setIsClicked] = useState(false)
    // const navigate = useNavigate();
    // const contextData = useContext(GlobalContextData)


    useEffect(() => {

    }, []);

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

    const onRowClick = () => {
        setIsExpand(!isExapnd)
    }

    const MobileViewHtml = () => {
        return (
            <>
                <div className={style.mainContainer} onClick={onRowClick}>
                    <div className={style.nameContainer}>
                        <p className={style.nameText}>
                            {props.data.persianName}
                        </p>
                    </div>
                    <div className={style.brandContainer}>
                        <p className={style.brandText}>
                            {props.data.brand}
                        </p>
                    </div>
                    <div className={style.imageContainer}>
                        <img className={style.image} src={props.data.mainImage} />
                    </div>
                    <div className={style.numContainer}>
                        <p className={style.numText}>
                            {props.data.rowNum}
                        </p>
                    </div>
                </div>
                {
                    (isExapnd) ?
                        <HomePageTableRowExpand data={[
                            [strings.home.table.headerNameText, props.data.persianName],
                            [strings.home.table.headerBrandText, props.data.brand],
                            [strings.home.table.headerRamText, props.data.ram],
                            [strings.home.table.headerStorageText, props.data.storage],
                            [strings.home.table.headerColorText, props.data.Color],
                        ]} image={props.data.mainImage} />
                        : ""
                }
            </>
        )
    }
    const DescktopViewHtml = () => {
        return (

            <div className={style.d_mainContainer}>
                <div className={style.d_colorContainer}>
                    <p className={style.d_colorText}>
                        {props.data.Color}
                    </p>
                </div>
                <div className={style.d_storageContainer}>
                    <p className={style.d_storageText}>
                        {props.data.storage}
                    </p>
                </div>
                <div className={style.d_ramContainer}>
                    <p className={style.d_ramText}>
                        {props.data.ram}
                    </p>
                </div>
                <div className={style.d_nameContainer}>
                    <p className={style.d_nameText}>
                        {props.data.persianName}
                    </p>
                </div>
                <div className={style.d_brandContainer}>
                    <p className={style.d_brandText}>
                        {props.data.brand}
                    </p>
                </div>
                <div className={style.d_imageContainer}>
                    <img className={style.d_image} src={props.data.mainImage} />
                </div>
                <div className={style.d_numContainer}>
                    <p className={style.d_numText}>
                        {props.data.rowNum}
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

export default HomePageTableRow;