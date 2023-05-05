import React from 'react';
import chef from '../../assets/chef.jpg'
import { Card, CardGroup } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Banner = () => {
    return (
        <CardGroup className='gap-5 my-5 align-items-center'>
            <Card className='border-0'>
                <Card.Body>
                    <Card.Title>Hi i am Alex</Card.Title>
                    <Card.Text>
                        I Working in the kitchen has taught me the value of discipline, teamwork, and hard work. Each day presents a new challenge, and the thrill of creating something new and exciting is what keeps me going.
                        <br></br>
                        I have had the privilege of working alongside some of the most talented and passionate chefs, who have taught me valuable lessons and pushed me to be better every day.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <LazyLoad>
                    <LazyLoad>
                        <Card.Img variant="top" src={chef} />
                    </LazyLoad>
                </LazyLoad>
            </Card>
        </CardGroup>
    );
};

export default Banner;