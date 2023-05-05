import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const XtraSection = () => {
    return (
        <div>
            <h3 className='text-danger text-center'>Chiken Pasta</h3>

            {/* First Extra Section */}
            <div className='my-5 bg-secondary bg-opacity-25'>
                <CardGroup className='gap-5 my-5 align-items-center'>
                    <Card className='border-0 text-center'>
                        <Card.Body className='bg-secondary bg-opacity-25'>
                            <Card.Text style={{ fontSize: '18px' }}>
                                Chiken pasta is a go-to dish for many people around the world. It's easy to make, it's delicious, and it can be paired with so many different ingredients. One of the most popular pasta dishes is chicken pasta, and for good reason. Chicken pasta is a dish that combines the rich flavors of chicken with the savory taste of pasta.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/9VzhCZw/tagliatelle-pasta-with-tomatoes-chicken.jpg" />
                    </Card>
                </CardGroup>
            </div>

            {/* Second Extra Section */}
            <div className='my-5 bg-dark w-100 text-center' style={{ padding: '30px' }}>
                <h3 className='text-center text-light'>Bangladeshi Chef</h3>
                <p className='text-light' style={{ fontSize: '20px' }}>
                    Bangladesh has a rich culinary heritage, and its chefs are at the forefront of showcasing the country's diverse flavors and techniques. From street food vendors to high-end restaurants, Bangladeshi chefs are known for their creativity and skill in the kitchen.
                </p>
            </div>
        </div>
    );
};

export default XtraSection;