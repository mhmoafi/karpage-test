import React, { useContext, useEffect, useState } from "react";
import GlobalContextData from "../../../context/contextProvider";
import strings from "../../../res/strings";
import style from "./homePage_search.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import loadingImage from "../../../res/assets/images/loading.gif"

const HomePageSearchComponent = (props) => {

    const contextData = useContext(GlobalContextData)

    let searchValue;
    // const [isClicked, setIsClicked] = useState(false)
    // const navigate = useNavigate();
    // const contextData = useContext(GlobalContextData)

    return (
        <>


            <div className={style.m_mainContainer}>
                <p className={style.m_descText}>
                    {strings.home.search.desc}
                </p>
                <div className={style.m_inputContainer}>
                    {/* <div className={style.m_searchIconContainer} onClick={onSearchBtnClick}>
                                {
                                    props.isLoading ?
                                        <img src={loadingImage} className={style.m_loadingImg} /> :
                                        <FontAwesomeIcon icon={faSearch} className={style.m_searchIcon} />}
                            </div> */}
                    <input className={style.m_input} placeholder={strings.home.search.palceHolder} value={contextData.searchValue} onChange={(e) => contextData.setSearchValue(e.target.value)} />
                </div>
            </div>

        </>
    )
}

export default HomePageSearchComponent