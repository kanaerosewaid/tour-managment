import React from 'react'
import './newsletter.css'

import { Container, Row, Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
 
const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>Підпишіться зараз, щоб отримувати корисну інформацію про подорожі.</h2>

                <div className="newsletter__input">
                    <input type='email' placeholder='Enter your email' />
                    <button className='btn newsletter__btn'>Підписатись</button>
                        </div>
                        <p>Отримуйте свіжі поради, найкращі пропозиції та цікаві маршрути просто на вашу пошту. Ми допоможемо зробити вашу наступну подорож незабутньою та комфортною!</p>
                        </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter__img">
                <img src={maleTourist} alt='' />
                </div>
                </Col>
        </Row>
    </Container>
    </section>
    };

export default Newsletter