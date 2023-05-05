import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaRegHeart, FaStar, FaStarHalf } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';


const CartDetails = () => {
    const data = useLoaderData();
    const { chefName, chefImage, description, likes, numberOfRecipes, yearsOfExperience, recipe } = data;
    const [disabled, setDisabled] = useState(false);

    const onClick = () => {
        setDisabled(true);
    };

    return (
        <div>

            {/* Chef Details */}
            <Card className='w-50 sm={w-100} mx-auto'>
                <LazyLoad>
                    <Card.Img variant="top" src={chefImage} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>Chef Name: {chefName}</Card.Title>
                    <Card.Text>
                        <p className='m-0'><span style={{ fontWeight: 'bold' }}>bio:</span> {description}</p>
                        <p className='m-0'><span style={{ fontWeight: 'bold' }}>Experience:</span> {yearsOfExperience}</p>
                        <p className='my-2'><span style={{ fontWeight: 'bold' }}>Recipe:</span> {numberOfRecipes}</p>
                        <p className='m-0'><span style={{ fontWeight: 'bold' }}>Likes:</span> {likes}</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Recipe Details Section */}
            <div className='mt-5'>
                <h2 className='text-danger text-center my-5 border-bottom'>{chefName} Recipe</h2>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        recipe.map(r =>
                            <Col>
                                <Card style={{ height: '500px' }}>
                                    <Card.Body>
                                        <Card.Title className='text-danger'>{r.recipe_name}</Card.Title>
                                        <p><span style={{ fontWeight: 'bold' }}>Ingredients: </span>{r.ingredients}</p>
                                        <p><span style={{ fontWeight: 'bold' }}>Cooking Method:</span>{r.cooking_method}</p>
                                        <span className='d-flex align-items-center'>
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStarHalf className='text-warning' />
                                            {r?.ratings}</span>
                                        <button disabled={disabled} onClick={onClick} className='btn btn-primary position-absolute bottom-0 start-0 w-100'>Fabourite Recipe <FaRegHeart /></button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default CartDetails;

