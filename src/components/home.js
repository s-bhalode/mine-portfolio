import React from 'react';
import style from './style.css';
import {Row, Col} from 'react-bootstrap';
import NavbarComponent from './navbarComponent';
import SideNav from './sideNav';

const Home = () => {
    return (
        <>
            <Row>
                <NavbarComponent />
            </Row>
            <Row className='homeContainer'>
                <Col md={3}>
                    <SideNav />
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </>
    );
}

export default Home;
