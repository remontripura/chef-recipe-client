import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import google from '../../assets/google.webp';
import github from '../../assets/github.png';


const Login = () => {

    const { user, loginUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
            })
            .catch(error => {
                console.log(error)
                    setError(error?.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn();
    }

    const handleGithubSignIn = () => {
        githubSignIn()
    }

    return (
        <Container>
            <Form onSubmit={handleLogin} className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Type Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {user ? (
                    <Button disabled variant="primary" type="submit" className='w-100'>
                        logged
                    </Button>
                ) : (
                    <Button variant="primary" type="submit" className='w-100'>
                        Login
                    </Button>
                )}
                <Form.Text className="text-danger">
                   {error}
                </Form.Text>
                <p className='mt-3'>You don't have account? <Link to='/register'>Please Register</Link></p>
                <div className='text-center'>
                    {
                        (!user) &&
                        <Link><img onClick={handleGoogleSignIn} className='me-3' style={{ width: '50px' }} src={google} alt="" /></Link>
                    }
                    {
                        (!user) &&
                        <Link><img disabled onClick={handleGithubSignIn} className='me-3' style={{ width: '25px' }} src={github} alt="" /></Link>
                    }
                </div>
            </Form>

        </Container>
    );
};

export default Login;