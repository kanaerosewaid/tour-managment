import React from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import Testimonial from '../components/Testimonial/Testimonial';

import '../styles/about.css';
import maleTourist from '../assets/images/male-tourist.png';

const About = () => {
  return (
    <>
      <CommonSection title="Про нас" />

      <section className="about-section">
        <Container>

          {/* Блок 1: Вступ + картинка */}
          <div className="about-block about-block--image-text">
            <Row className="align-items-center">
              <Col lg="6">
                <h2 className="about-title">Ласкаво просимо до нашої туристичної компанії</h2>
                <p className="about-text">
                  Наша компанія — це команда ентузіастів, які щодня працюють над тим, щоб дарувати людям яскраві емоції та незабутні спогади.
                  Ми організовуємо подорожі у понад 50 країн світу. Кожен наш тур — це результат ретельного планування, турботи про деталі та любові до подорожей.
                </p>
                <p className="about-text">
                  Незалежно від того, чи ви мрієте про екзотичний відпочинок, культурну екскурсію чи активні пригоди — ми знайдемо тур саме для вас.
                </p>
              </Col>
              <Col lg="6">
                <img src={maleTourist} alt="About us" className="about-img" />
              </Col>
            </Row>
          </div>

          {/* Блок 2: Місія */}
          <div className="about-block">
            <h3 className="about-subtitle">Наша місія</h3>
            <p className="about-text">
              Ми віримо, що подорожі змінюють людей, розширюють світогляд і дарують нові горизонти. Наша місія — зробити подорожі доступними, зручними та надихаючими для кожного.
            </p>
          </div>

          {/* Блок 3: Переваги */}
          <div className="about-block">
            <h3 className="about-subtitle">Наші переваги</h3>
            <Row>
              <Col lg="6">
                <ul className="about-list">
                  <li>👥 Індивідуальний підхід до кожного клієнта</li>
                  <li>🌍 Широкий вибір турів на будь-який смак і бюджет</li>
                  <li>📞 Цілодобова підтримка туристів</li>
                  <li>🌟 Досвідчені менеджери з туристичним досвідом</li>
                </ul>
              </Col>
              <Col lg="6">
                <ul className="about-list">
                  <li>💳 Гнучка система бронювання та оплати</li>
                  <li>🤝 Співпраця з перевіреними партнерами</li>
                  <li>🔐 Надійність та прозорість у процесах</li>
                  <li>💬 Високий рівень задоволеності клієнтів</li>
                </ul>
              </Col>
            </Row>
          </div>

          {/* Блок 4: Команда */}
          <div className="about-block">
            <h3 className="about-subtitle">Наша команда</h3>
            <p className="about-text">
              У нашій команді працюють справжні професіонали — менеджери, гіди, координатори та служба підтримки.
              Ми — мандрівники в душі, які знають, як зробити ваш відпочинок ідеальним і безтурботним.
            </p>
          </div>

          {/* Блок 5: Відгуки */}
          <div className="about-block">
            <h3 className="about-subtitle">Відгуки наших клієнтів</h3>
            <Testimonial />
          </div>

        </Container>
      </section>
    </>
  );
};

export default About;
