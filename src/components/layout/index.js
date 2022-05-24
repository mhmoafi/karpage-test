import React from "react";
import style from "./layout.module.scss";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    const onLogoutBtnClick = () => {
        //logout process goas here...
    }

    return (
        <div className={style.mainContainer}>
            <Header />
            <div className={style.headerCleaner} />
            {/* <div className={style.middleContainer}> */}
            {children}
            {/* </div> */}
            <div className={style.footerCleaner} />
            <Footer />
        </div>
    );
};

export default Layout;
