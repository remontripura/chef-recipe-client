import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Home/Shared/Header/Header';

const DetailsLayout = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
        </Container>
    );
};

export default DetailsLayout;