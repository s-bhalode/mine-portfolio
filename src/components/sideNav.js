import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Divider } from '@mui/material';
import './style.css';
import mine from '../assets/mine-profile-pic.png';
import ProgressCircle from './progressCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Blink from 'react-blink-text';
import Tooltip from '@mui/material/Tooltip';


const SideNav = () => {
    return (
        <div className='mine-profile-sec'>
            <div>
                <img className='mine-pic' src={mine} alt="mine_image" />
                <div style={{position: 'absolute', top: '32vh', left:'17%'}}>
                    <Blink text='🟢' fontSize='18' color="#ffc107"></Blink>
                    <Tooltip title="Delete">
                    
                    </Tooltip>
                </div>
            </div>
            
            <div className='side-skills'>
                <Row>
                    <Col style={{color: 'white', margin: '20px 0px 20px 50px'}}>
                        <p>Residence:</p>
                        <p>City:</p>
                    </Col>
                    <Col style={{color: 'white', margin: '20px 0px 20px 0px'}}>
                        <p>India</p>
                        <p>Indore</p>
                    </Col>
                </Row>
                <Divider color="white" style={{margin: '0px 30px 20px'}} />
                <Row className="justify-content-md-center mb-5">
                    <p style={{color: 'white', textAlign: 'center'}}>Programming Languages</p>
                    <Col md={3}>
                        <ProgressCircle end={70} title='C' color='yellow' />
                    </Col>
                    <Col md={3}>
                        <ProgressCircle end={75} title='C++' />
                    </Col>
                    <Col md={3}>
                        <ProgressCircle end={75} title='JS' />
                    </Col>
                </Row>
                
                <Divider color="white" style={{margin: '0px 30px 20px'}} />
                <Row className="justify-content-md-center mb-5">
                    <p style={{color: 'white', textAlign: 'center'}}>Frontend</p>
                    <Col md={3}>
                        <ProgressCircle end={70} title='React JS' color='yellow' />
                    </Col>
                    <Col md={3}>
                        <ProgressCircle end={75} title='React Native' />
                    </Col>
                    <Col md={3}>
                        <ProgressCircle end={75} title='Angular' />
                    </Col>
                </Row>
                <Divider color="white" style={{margin: '0px 30px 20px'}} />
                <Row className="justify-content-md-center mb-5">
                    <p style={{color: 'white', textAlign: 'center'}}>Backend</p>
                    <Col md={3}>
                        <ProgressCircle end={70} title='Node JS' color='yellow' />
                    </Col>
                    <Col md={3}>
                        <ProgressCircle end={75} title='Express JS' />
                    </Col>
                    {/* <Col md={3}>
                        <ProgressCircle end={75} title='JS' />
                    </Col> */}
                </Row>
                <Divider color="white" style={{margin: '0px 30px 20px'}} />
                <Row className="justify-content-md-center mb-5">
                    <p style={{color: 'white', textAlign: 'center'}}>Database</p>
                    <Col md={3}>
                        <ProgressCircle end={75} title='MySQL' color='yellow' />
                    </Col>
                    <Col md={3}>
                        <ProgressCircle end={75} title='MongoDB' />
                    </Col>
                    {/* <Col md={3}>
                        <ProgressCircle end={75} title='Oracle' />
                    </Col> */}
                </Row>
            </div>
            <div className='social-links'>
                <Row className="justify-content-md-center">
                    <Col md={2}>
                        <a href="https://pluralsight.com"><GitHubIcon style={{color: 'white'}} /></a>
                    </Col>
                    <Col md={2}>
                        <a href="https://pluralsight.com"><LinkedInIcon style={{color: 'white'}} /></a>
                    </Col>
                    <Col md={2}>
                        <a href="https://pluralsight.com"><EmailIcon style={{color: 'white'}} /></a>
                    </Col>
                    {/* <Col md={3}>
                        <a href="https://pluralsight.com"><InstagramIcon style={{color: 'white'}} /></a>
                    </Col> */}
                </Row>
            </div>
        </div>
    );
}

export default SideNav;
