import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Home/Shared/Header/Header';
import Footer from '../Home/Shared/Footer/Footer';

const DetailsLayout = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default DetailsLayout;