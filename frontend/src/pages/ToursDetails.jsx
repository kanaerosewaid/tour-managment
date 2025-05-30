import React, {useEffect, useRef, useState, useContext} from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup} from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'; 

import useFetch from './../hooks/useFetch'
import { BASE_URL } from './../utils/config'

import { AuthContext } from './../context/AuthContext'


const ToursDetails = () => {

  const {id} = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const {user} = useContext(AuthContext)

  const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)

  const 
  {
    photo, 
    title, 
    desc, 
    price, 
    address, 
    reviews, 
    city, 
    distance, 
    maxGroupSize
  } = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  const options = {day: 'numeric', month:'long', year:'numeric'};

  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;

    try {
      if(!user || user===undefined || user===null) {
      alert('Please sign in')
      }

      const reviewObj = {
        username:user?.username,
        reviewText,
        rating:tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })

      const result = await res.json()
      if(!res.ok) {
        return alert(result.message)
      }
   
      alert(result.message)

    } catch (err) {
      alert(err.message)
    }
  };

  useEffect(()=>{
  },[tour])

  return <>
  <section>
    <Container>
      {
        loading && <h4 className='text-center pt-5'>Loading...</h4>
      }
      {
        error && <h4 className='text-center pt-5'>{error}</h4>
      }
      {
        !loading && !error && <Row>
        <Col lg='8'>
        <div className="tour__content">
          <img src={photo} alt='' />

          <div className="tour__info">
            <h2>{title}</h2>

            <div className='d-flex align-items-center gap-5'>
              <span className='tour__rating d-flex align-items-center gap-1'>
                    <i class="ri-star-fill" 
                    style={{'color':"var(--secondary-color"}}
                    ></i>
                     {avgRating === 0 ?  null  : avgRating}
                    {totalRating ===  0 ? (
                      'Not rated' 
                    ) : ( 
                    <span>({reviews?.length})</span>
                  )}
                </span>

              <span>
                <i class="ri-map-pin-user-fill"></i> {address}
              </span>

            </div>

            <div className="tour__extra-details">
              <span><i class="ri-map-pin-2-line"></i>{city}</span>
              <span><i class="ri-money-dollar-circle-line"></i>${price} за особу</span>
              <span><i class="ri-map-pin-time-line"></i>{distance} км</span>
              <span><i class="ri-group-line"></i>{maxGroupSize} людей </span>
            </div>
            <h5>Опис</h5>
            <p>{desc}</p>
          </div>
          {/* =========== tour reviews section start =============*/}
          <div className="tour__reviews mt-4">
            <h4>Відгуки ({reviews?.length} відгуки)</h4>

            <Form onSubmit={submitHandler}>
              <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                  {[1,2,3,4,5].map(star => (
                  <span key={star} onClick={() => setTourRating(star)} className={tourRating >= star ? 'selected' : ''} style={{cursor: 'pointer'}}>
                  {star} 
                  <i className="ri-star-s-fill"></i>
                    </span>
                  ))}
              </div>
              <div className="review__input">
                <input type="text" ref={reviewMsgRef} placeholder='поділись своїми враженнями'
                required
                />
                <button className="btn primary__btn text-white" type='submit'>
                  Відправити
                </button>
              </div>
            </Form>

            <ListGroup className="user__reviews">
                  {reviews?.map(review => (
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                            </div>
                            <span className="d-flex align-items-center">{review.rating}<i class="ri-star-s-fill"></i></span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }
            </ListGroup>
          </div>
          {/* =========== tour reviews section end =============*/}
        </div>
        </Col>
                  <Col lg='4'>
                  <Booking tour={tour} avgRating={avgRating} />
                  </Col>

      </Row>
      }
    </Container>
  </section>
  <Newsletter />
  </>
}

export default ToursDetails