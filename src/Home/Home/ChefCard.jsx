import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ data }) => {
    const { id, chefImage, chefName, yearsOfExperience, numberOfRecipes, likes } = data;
    return (
        <Col>
            <Card>
                <LazyLoad>
                    <Card.Img className='w-100' style={{ height: '300px' }} variant="top" src={chefImage} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <p className='m-0'><span style={{ fontWeight: 'bold' }}>Experience:</span> {yearsOfExperience}</p>
                    <p className='my-2'><span style={{ fontWeight: 'bold' }}>Recipe:</span> {numberOfRecipes}</p>
                    <p className='m-0'><span style={{ fontWeight: 'bold' }}>Likes:</span> {likes}</p>
                    <Button variant="primary" className='w-100'>
                        <Link className='text-light text-decoration-none' to={`/details/${id}`}>View Recipes <FaArrowRight className='ms-3' /></Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCard;