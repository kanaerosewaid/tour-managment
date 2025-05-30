import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    dots:true,
                    infinite:true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1, 
                },
            },
        ]
    }
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
    <p> Валентин організував для мене неймовірну подорож. Все було продумано до деталей, а підтримка на кожному кроці зробила поїздку максимально комфортною.

    </p>
     <div className='d=flex align-items-center gap-4 mt-3'>
        <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
     <div>
        <h6 className='mb-0 mt-3'>Артем Сімпл</h6>
        <p>Клієнт
        </p>
     </div>
     </div>
    </div>
    <div className="testimonial py-4 px-3">
    <p> Дякую за професіоналізм! Тур був насиченим і дуже цікавим, а всі питання вирішувались швидко. Рекомендую всім, хто цінує якісний сервіс.

    </p>
     <div className='d=flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
     <div>
        <h6 className='mb-0 mt-3'>Темплар Асасін</h6>
        <p>Клієнт



        </p>
     </div>
     </div>
    </div>
    <div className="testimonial py-4 px-3">
    <p>Велика подяка команді за тур, який перевершив всі очікування. Особливо сподобалась увага до деталей та дружня атмосфера.

    </p>
     <div className='d=flex align-items-center gap-4 mt-3'>
        <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
     <div>
        <h6 className='mb-0 mt-3'>Стасян Лисенко</h6>
        <p>Клієнт



        </p>
     </div>
     </div>
    </div>
    <div className="testimonial py-4 px-3">
    <p> Дякую за професіоналізм! Тур був насиченим і дуже цікавим, а всі питання вирішувались швидко. Рекомендую всім, хто цінує якісний сервіс.</p>
     <div className='d=flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
     <div>
        <h6 className='mb-0 mt-3'>Темплар Асасін</h6>
        <p>Клієнт



        </p>
     </div>
     </div>
    </div>
  </Slider>
  
  
};

export default Testimonial