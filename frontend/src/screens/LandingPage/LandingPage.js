import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome to React</h1>
                            
                        </div>
                        <div className="buttonContainer">
                            <a href='/login'>
                                <Button size="lg" className="landingbutton">
                                    Login
                                </Button>
                           </a>
                           <a href='/login'>
                                <Button
                                    variant="outline-primary" size="lg" className="landingbutton">
                                    Signup
                                </Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default LandingPage
