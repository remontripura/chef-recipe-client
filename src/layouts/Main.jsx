import React from 'react';
import Header from '../Home/Shared/Header/Header';
import Footer from '../Home/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;