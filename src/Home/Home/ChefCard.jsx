import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ChefCard = ({ data }) => {
    const { id, chefImage, chefName, yearsOfExperience, numberOfRecipes, likes } = data;
    return (
        <Col>
            <Card>
                <Card.Img className='w-100' style={{ height: '300px' }} variant="top" src={chefImage} />
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <p className='m-0'><span style={{ fontWeight: 'bold' }}>Experience:</span> {yearsOfExperience}</p>
                    <p className='my-2'><span style={{ fontWeight: 'bold' }}>Recipe:</span> {numberOfRecipes}</p>
                    <p className='m-0'><span style={{ fontWeight: 'bold' }}>Likes:</span> {likes}</p>
                    <Button variant="primary" className='w-100'>
                        <Link className='text-light text-decoration-none' to={`/details/${id}`}>View Recipes</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCard;