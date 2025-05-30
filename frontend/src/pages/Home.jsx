import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle';


import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>

  {/* =========== hero section start ===========*/}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt="" />
          </div>
          <h1>Подорож — це унікальна історія, яка залишається у <span className="highlight"> серці </span></h1>
          <p>Відкривайте нові місця, знайомтеся з цікавими людьми і занурюйтесь у культуру інших країн, щоб збагатити своє життя яскравими враженнями та емоціями.

          </p>
        </div>
        </Col>
        <Col lg='2'>
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>
        <Col lg='2'>
        <div className="hero__img-box hero__video-box mt-4">
          <video src={heroVideo} alt="" controls/>
        </div>
        </Col>
        <Col lg='2'>
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="" />
        </div>
        </Col>

        <SearchBar/>
      </Row>
    </Container>
  </section>
    {/* =========== hero section end ===========*/}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className='services__subtitle'>What we serve</h5>
          <h2 className='services__title'>Ми надаємо найкращі послуги</h2>
          </Col>

          <ServiceList/>
        </Row>
      </Container>
    </section>

    {/* =========== featured tour section start ===========*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Наші найкращі тури</h2>
          </Col>
       <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* =========== featured tour section end ===========*/}

    {/* =========== experience section start ============*/}
    <section>
      <Container>
      <Row>
        <Col lg='6'>
        <div className="experience content">
          <Subtitle subtitle={'Experience'}/>
        <h2>З усім нашим досвідом <br /> ми служимо вам </h2>
        <p>Ми дбаємо про кожного клієнта, забезпечуючи високий рівень сервісу та незабутні враження від подорожей. 
          <br />
          Ваш комфорт і задоволення — наш головний пріоритет.
        </p>

          </div>
          <div className='counter_wrapper d-flex align-items-center gap-5'>
            <div className="counter__box">
              <span>12k+</span>
              <h6>Успішних поїздок</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Постійних клієнтів</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Років досвіду</h6>
            </div>
          </div>
          </Col>
        <Col lg='6'>
        <div className="experience__img">
          <img src={experienceImg} alt='' />
        </div>
        </Col>
      </Row>
      </Container>
    </section>

    {/* =========== experience section end =============*/}

    {/* =========== gallery section start =============*/}
    <section id='gallery'>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/> 
          <h2 className="gallery__title">Перегляньте галерею наших клієнтів з подорожей </h2>
          </Col>
          <Col lg='12'>
          <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>

    {/* =========== gallery section end =============*/}

    {/* =========== testimonial section start =============*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Fans Love'} />
          <h2 className="testimonial__title">Що про нас говорять наші клієнти</h2>
          </Col>
          <Col lg='12'>
          <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>
    {/* =========== testimonial section end =============*/}
    <Newsletter />


  </>
}

export default Home