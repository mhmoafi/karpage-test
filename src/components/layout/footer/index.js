import React from "react";
import strings from "../../../res/strings";
import logo from "../../../res/assets/images/logo192.png"
import style from "./footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ children }) => {
    const onLogoutBtnClick = () => {
        //logout process goas here...
    }

    return (
        <>
            <div className={style.mainContainer}>
                <p className={style.footerText}>
                    {strings.appInfo.title}
                </p>
            </div>
        </>
    );
};

export default Footer;
