import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import google from '../../assets/google.webp';
import github from '../../assets/github.png';


const Login = () => {

    const { loginUser, googleSignIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn();
    }

    return (
        <Container>
            <Form onSubmit={handleLogin} className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Type Your Email" required />

                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100'>
                    Login
                </Button>
                <p className='mt-3'>You don't have account? <Link to='/register'>Please Register</Link></p>
                <div className='text-center'>
                    {/* <span className='text-danger'><FaGoogle /></span> */}
                    <Link><img onClick={handleGoogleSignIn} className='me-3' style={{width: '50px'}} src={google} alt="" /></Link>
                    <Link><img className='me-3' style={{width: '25px'}} src={github} alt="" /></Link>
                </div>
            </Form>

        </Container>
    );
};

export default Login;