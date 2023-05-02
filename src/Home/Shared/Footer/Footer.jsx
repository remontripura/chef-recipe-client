import React from 'react';
import { Card, CardGroup, Container} from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-dark' style={{marginTop: '100px'}}>
            <Container className='py-5'>
                <CardGroup className='gap-3'>
                    <Card className='border-0 bg-dark text-light' style={{fontSize: '20px'}}>
                        <Card.Body>
                            <div className='d-flex align-items-center gap-3 mb-4'>
                                <FaMapMarkerAlt />
                                <p className='m-0'>Dhaka, Bangladesh</p>
                            </div>
                            <div  className='d-flex align-items-center gap-3 mb-4'>
                                <FaPhoneAlt />
                                <Link>+880 1657 6576 09</Link>
                            </div>
                            <div  className='d-flex align-items-center gap-3 mb-4'>
                                <FaEnvelopeOpen />
                                <Link>ranna24@gmail.com</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 bg-dark text-light'>
                        <Card.Body>
                            <h4>About Company</h4>
                            <p>If you're looking for an easy and delicious recipe to try at home, look no further than our latest blog post! We've got a mouthwatering pasta dish that's perfect for a cozy night in or a fancy dinner party. Plus, it's quick and simple to make with just a few ingredients. Check it out now!</p>
                            <div style={{fontSize: '50px'}}>
                                <FaFacebook className='p-2 me-3 text-info border'/>
                                <FaTwitter className='p-2 me-3 text-info border' />
                                <FaInstagram className='p-2 me-3 text-danger border' />
                            </div>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Footer;