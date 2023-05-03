import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ChefCard = ({ data }) => {
    const { chefImage, chefName, yearsOfExperience, numberOfRecipes, likes } = data;
    return (
        <Col>
            <Card>
                <Card.Img className='w-100' style={{height: '300px'}} variant="top" src={chefImage} />
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>
                    <p className='m-0'><span style={{fontWeight: 'bold'}}>Experience:</span> {yearsOfExperience}</p>
                    <p className='my-2'><span style={{fontWeight: 'bold'}}>Recipe:</span> {numberOfRecipes}</p>
                    <p className='m-0'><span style={{fontWeight: 'bold'}}>Likes:</span> {likes}</p>
                    </Card.Text>
                    <Button variant="primary" className='w-100'>
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCard;