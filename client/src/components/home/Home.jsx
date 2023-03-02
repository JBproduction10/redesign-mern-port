import React from 'react';
import './home.css';
import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import profileImg from "../../assets/jona.png";
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import {BsTwitter, BsInstagram, BsGithub,BsFacebook,BsLinkedin} from 'react-icons/bs';


const Home = () => {

  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
          <div className="home__container container">
            <p className='home__subtitle text-cs'>
              Hello, <span>My Name is</span>
            </p>

            <motion.h1 
            initial={{
              x:-500,
              opacity:0,
              scale:0.5,
            }}
            animate={{
              x:0,
              opacity:1,
              scale:1,
            }}
            transition={{
              duration:1.5,
            }}
            className='home__title text-cs'>
              <span>Jonathan</span> Bangala
            </motion.h1>

            <p className='home__job'>
              <span className='text-cs'>I Am</span>
              <h1>
                <Typewriter
                    options={{
                      strings:['a Software Engineer',
                      'Game Developer',
                      'Fullstack Developer'
                    ],
                    autoStart: true,
                    loop: true,
                    
                    }}
                  />
              </h1>
            </p>

            <motion.div
            initial={{
              x:500,
              opacity:0,
              scale:0.5
            }}
            animate={{
              x:0,
              opacity:1,
              scale:1
            }}
            transition={{
              duration:1.5
            }}
            className='home__img-wrapper'>
              <div className='home__banner'>
                <img src={profileImg} alt='' className="home__profile"/>
              </div>

              <p className='home__data home__data-one'>
                <span className='text-lg'>
                  4<b>+</b>
                </span>
                <span className='text-sm text-cs'>
                  Years of <span>Experience</span>
                </span>
              </p>

              <p className='home__data home__data-two'>
                <span className='text-lg'>330</span>
                <span className='text-sm text-cs'>
                  Completed <span>Projects</span>
                </span>
              </p>
              
              <img src={shapeOne} alt='' className='shape shape__1'/>
              <img src={shapeTwo} alt='' className='shape shape__2'/>
              <img src={shapeTwo} alt='' className='shape shape__3'/>
            </motion.div>

            <p className='home__text'>
              Software engineer | Game developer. 
              Keen to learn new things, make mistakes, 
              and improve my skills and abilities.
            </p>

            <motion.div 
            initial={{
              x:-500,
              opacity:0,
              scale:0.5,
            }}
            animate={{
              x:0,
              opacity:1,
              scale:1,
            }}
            transition={{
              duration:1.5
            }}
            className='home__socials'>
              <a href='' className='home__social-link'>
                <BsGithub/>
              </a>
              <a href='' className='home__social-link'>
                <BsFacebook/>
              </a>
              <a href='' className='home__social-link'>
                <BsInstagram/>
              </a>
              <a href='' className='home__social-link'>
                <BsTwitter/>
              </a>
              <a href='' className='home__social-link'>
                <BsLinkedin/>
              </a>
            </motion.div>
            <div className='home__btns'>
              <a href='' className='btn text-cs'>Downoad CV</a>
              <a href='' className='hero__link text-cs'>My Skills</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home;