import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CartDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const { chefName, chefImage, description, likes, numberOfRecipes, yearsOfExperience } = data;
    return (
        <Card className='w-50 mx-auto'>
            <Card.Img variant="top" src={chefImage} />
            <Card.Body>
                <Card.Title>Chef Name: {chefName}</Card.Title>
                <Card.Text>
                    <p className='m-0'><span style={{ fontWeight: 'bold' }}>Experience:</span> {yearsOfExperience}</p>
                    <p className='my-2'><span style={{ fontWeight: 'bold' }}>Recipe:</span> {numberOfRecipes}</p>
                    <p className='m-0'><span style={{ fontWeight: 'bold' }}>Likes:</span> {likes}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CartDetails;