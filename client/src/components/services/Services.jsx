import React from 'react';
import './services.css';
import {Swiper} from 'swiper';

const Services = () => {
  return (
    <section className='services section' id='section'>
      <h2 className='section__title'>What I Do</h2>
      <p className='section__subtitle'>
        My <span>Services</span>
      </p>
      <Swiper>
        <div className='swiper-wrapper'>
          <div className="swiper-slide services__item card card-one swiper-slidle">
            
          </div>
        </div>
      </Swiper>
    </section>
  )
}

export default Services;