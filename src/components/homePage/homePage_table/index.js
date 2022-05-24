import React, { useContext, useEffect, useState } from "react";
import GlobalContextData from "../../../context/contextProvider";
import style from "./homePage_table.module.scss"
import strings from "../../../res/strings";
import LoadingPage from "../../common/loading";
import HomePageTableHeader from "./homePage_table_header";
import HomePageTableRow from "./homePage_table_row";

const HomePageTableComponent = (props) => {

    const contextData = useContext(GlobalContextData)

    let searchValue;
    // const [isClicked, setIsClicked] = useState(false)
    // const navigate = useNavigate();
    // const contextData = useContext(GlobalContextData)


    useEffect(() => {

    }, [])

    const tableRowGenerator = () => {
        return contextData.productsData.map((item, index) => {
            return (
                <HomePageTableRow
                    data={item}
                    key={index}
                />
            )
        })
    }
    return (
        <>
            <HomePageTableHeader />
            {tableRowGenerator()}
        </>
    )
}

export default HomePageTableComponent;