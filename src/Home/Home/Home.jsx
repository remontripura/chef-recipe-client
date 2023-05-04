import React from 'react';
import Banner from './Banner';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';
import XtraSection from './XtraSection';


const Home = () => {
    const datas = useLoaderData();
    return (
        <Container>

            {/* banner section */}
            <Banner></Banner>

            {/* Chef Section */}
            <div>
                <h2 className='text-center my-5'>Best Chef Of Bangladesh</h2>
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {
                        datas.map(data => <ChefCard
                            key={data.id}
                            data={data}
                        ></ChefCard>)
                    }
                </Row>
            </div>

            {/* extra components */}
            <XtraSection></XtraSection>
        </Container>
    );
};

export default Home;