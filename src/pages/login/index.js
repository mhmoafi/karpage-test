import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LoginPage from '../../components/loginPage';
import Cookies from "js-cookie";
import GlobalContextData from "../../context/contextProvider"
import { requestLogin } from "../../lib/karpageClient/index"

function Login() {

    const contextData = useContext(GlobalContextData)

    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const inputHandleChange = (target, e) => {

        if (target === "username") {
            setUsername(e.target.value)
        } else if (target === "password") {
            setPassword(e.target.value)
        }
    }

    const onLoginSubmitClick = async () => {
        contextData.setIsGlobalLoading(true)

        const result = await requestLogin(username, password)
        if (result && result[0] === 200) {
            contextData.setIsGlobalLoading(false)
            contextData.setIsLogin(true)
            Cookies.set('token', result[1].token);
            navigate("/", { replace: true })
        } else {
            contextData.setIsGlobalLoading(false)
            alert("Somthing Wrong!")
            contextData.setIsLogin(false)
        }
        // console.log(result);
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <LoginPage
                onLoginSubmitClick={onLoginSubmitClick}
                inputHandleChange={inputHandleChange}
                username={username}
                password={password}
            />
        </>
    )
}

export default Login
