import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick__links=[
  {
    path:'/home',
    display:'Головна'
  },
  {
    path:'/about',
    display:'Про нас'
 },
 {
    path:'/tours',
    display:'Тури'
 },
];

const quick__links2=[
  {
    path:'/gallery',
    display:'Галерея'
  },
  {
    path:'/login',
    display:'Логін'
 },
 {
    path:'/register',
    display:'Реєстрація'
 },
];

const Footer = () => {

const year = new Date().getFullYear()

  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3'>
        <div className="logo">
          <img src={logo} alt='' />
          <p>Завжди готові допомогти вам у виборі ідеальної подорожі. Слідкуйте за нашими новинами та акціями!</p>
       
        <div className="social__links d-flex align-items-center gap-4">
        <span>
          <Link to='#'><i class="ri-youtube-line"></i></Link>
        </span>
        <span>
          <Link to='#'><i class="ri-telegram-line"></i></Link>
        </span>
        <span>
          <Link to='#'><i class="ri-instagram-line"></i></Link>
        </span>
        <span>
          <Link to='#'><i class="ri-github-line"></i></Link>
        </span>
        </div>
        </div>
        </Col>
        <Col lg='3'>
        <h5 className='footer__link-title'>Відкрийте для себе</h5>

        <ListGroup className='footer__quick-links'>
        {
          quick__links.map((item, index)=>(
            <ListGroupItem key={index} className='ps-0 border-0'> 
              <Link to ={item.path}>{item.display}</Link>
            </ListGroupItem>
          ))
        }
        </ListGroup>
        </Col>
        <Col lg='3'><h5 className='footer__link-title'>Швидкі посилання</h5>

        <ListGroup className='footer__quick-links'>
        {
          quick__links2.map((item, index)=>(
            <ListGroupItem key={index} className='ps-0 border-0'> 
              <Link to ={item.path}>{item.display}</Link>
            </ListGroupItem>
          ))
        }
        </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className='footer__link-title'>Контакти</h5>

        <ListGroup className='footer__quick-links'>       
            <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                Адреса:
              </h6> 
              <p className='mb-0'>Тернопіль, Україна</p>
            </ListGroupItem>
             <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i></span>
                Пошта:
              </h6> 
              <p className='mb-0'>korm.kyrki@gmail.com</p>
            </ListGroupItem>
             <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-fill"></i></span>
                Телефон:
              </h6> 
              <p className='mb-0'>+380 67 525 30 93</p>
            </ListGroupItem>

        </ListGroup>
        </Col>
        <Col lg='12'className='text-center pt-5'>
        <p className='copyright'>Copyright {year}, design and develop by Valentin Gusiev. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer> 
        
      };

export default Footer