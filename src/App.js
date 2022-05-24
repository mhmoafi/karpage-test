import React, { useContext, useState, useLayoutEffect, useEffect } from 'react';

import GlobalContextData from './context/contextProvider';

import LoadingPage from './components/common/loading'
import LoginPage from './components/loginPage'
import logo from './logo.svg';
import './App.css';
import { Route, Navigate, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/login';
import Layout from './components/layout';
import HomePage from './pages/home';
import { loginDetector } from './lib/initialProps';


export const PublicRoute = ({ isLogin, children }) => {
  if (isLogin) return <Navigate to={"/"} />
  else return children
};
export const PrivateRoute = ({ isLogin, children }) => {
  if (isLogin) return children
  else return <Navigate to={"/login"} />
}

function App() {
  const contextData = useContext(GlobalContextData)

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        contextData.setIsMobile(true)
      } else {
        contextData.setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    loginDetector(contextData);
  }, [])

  if (contextData.isGlobalLoading) {
    return (
      <>
        <LoadingPage />
      </>
    )
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={
            <PublicRoute isLogin={contextData.isLogin}>
              <Login />
            </PublicRoute>
          } />
          <Route path={"/"} element={
            <PrivateRoute isLogin={contextData.isLogin}>
              <Layout>
                <HomePage />
              </Layout>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;