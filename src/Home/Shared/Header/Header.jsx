import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img style={{ width: '50px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none text-dark font-weight-normal me-5' to='/'>Home</Link>
                        <Link className='text-decoration-none text-dark font-weight-normal me-5' to='/category'>Blog</Link>
                        <Link className='text-decoration-none text-dark font-weight-normal me-5' to='/recipe'>Recipe</Link>
                        <Link className='text-decoration-none text-dark font-weight-normal me-5' to='/contact'>Contact</Link>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button onClick={handleLogOut} className='btn btn-primary '>
                                    Logout
                                </button> :
                                <button className='btn btn-primary '>
                                    <Link className='text-decoration-none text-light font-weight-normal' to='/login'>Login</Link>
                                </button>
                        }
                        <img src={user} alt="" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;