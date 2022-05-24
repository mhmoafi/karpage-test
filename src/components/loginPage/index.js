import style from "./loginPage.module.scss"
import logo from "../../res/assets/images/karpageLogo.png"
import strings from "../../res/strings";

const LoginPage = (props) => {

    return (
        <div className={style.m_mainContainer}>
            <div className={style.m_topContainer}>
                <img className={style.m_logoImage} src={logo} />
            </div>
            <div className={style.m_buttomContainer}>
                <div className={style.m_inputContainer}>
                    <label className={style.m_userInfoInputText}>
                        {strings.login.usernameInputText}
                    </label>
                    <input className={style.m_userInfoInput} value={props.username} name="username" type={"text"} onChange={e => props.inputHandleChange("username", e)} />
                </div>
                <div className={style.m_inputContainer}>
                    <label className={style.m_userInfoInputText}>
                        {strings.login.passwordInputText}
                    </label>
                    <input className={style.m_userInfoInput} type={"password"} value={props.password} name="password" onChange={e => props.inputHandleChange("password", e)} />
                </div>
                <button className={style.m_loginBtn} onClick={props.onLoginSubmitClick}>
                    {strings.login.loginBtnText}
                </button>
                <div className={style.descriptionContainer}>
                    <p className={style.hintLabel}>
                        {strings.login.usernameInputText}
                    </p>
                    <p className={style.hintValue}>
                        {strings.login.username}
                    </p>
                    <p className={style.hintLabel}>
                        {strings.login.passwordInputText}
                    </p>
                    <p className={style.hintValue}>
                        {strings.login.password}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage