import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import  weatherImg from '../assets/images/weather.png'
import  guideImg from '../assets/images/guide.png'
import  customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Розрахунок погоди",
        desc: "Отримуйте актуальні дані про погоду для планування ваших подорожей.",
    },
    {
        imgUrl: guideImg,
        title: "Найкращий туристичний гід",
        desc: "Наші гіди допоможуть зробити вашу подорож цікавою та пізнавальною.",
    },
    {
        imgUrl: customizationImg,
        title: "Індивідуальний підхід",
        desc: "Ми підлаштовуємо тури під ваші побажання та інтереси.",
    },
]

const ServiceList = () => {
  return (
  <>
    {servicesData.map((item, index) => (
    <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
        <ServiceCard item={item}/> 
        </Col>
  ))}
  </> 
  );
};

export default ServiceList