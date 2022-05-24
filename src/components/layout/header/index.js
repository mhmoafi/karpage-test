import React, { useContext } from "react";
import strings from "../../../res/strings";
import logo from "../../../res/assets/images/logo192.png"
import style from "./header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../../lib/initialProps";
import GlobalContextData from "../../../context/contextProvider";

const Header = ({ children }) => {

    const contextData = useContext(GlobalContextData)
    const onLogoutBtnClick = () => {
        logout(contextData)
    }

    return (
        <>
            <header className={style.headerContainer}>
                <div className={style.leftContainer}>
                    <img src={logo} className={style.logoImage} />
                    <h1 className={style.headerTitle}>
                        {strings.appInfo.title}
                    </h1>
                </div>
                <div className={style.rightContainer}>
                    <div onClick={onLogoutBtnClick}>
                        <FontAwesomeIcon icon={faSignOut} className={style.logoutIcon} />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
