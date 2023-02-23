import React from 'react';
import './skills.css';
import {skills} from '../../Data';
import {motion} from 'framer-motion';

const Skills = () => {
  return (
    <section className='skills section' id='section'>
      <h2 className='section__title text-cs'>Professional Skills</h2>

      <p className='section__subtitle'>
        My <span>Talent</span>
      </p>

      <div className='skills__container container grid'>
        {skills.map(({name, percentage, description}, index) =>{
          return (
            <div className='skills__item'>
              <div className='skills__titles'>
                <h3 className='skills__name'>{name}</h3>
                <span className='skills__number'>
                  {percentage} <span>%</span>
                </span>
              </div>

              <p className='skills__description'>{description}</p>

              <div className='skills__bar'>
                <motion.span
                initial={{
                  width:0,
                }}
                animate={{
                  width: `${percentage}%`
                }}
                transition={{
                  duration:2.5,
                }}
                className='skills__percentage'
                >
                  <span></span>
                </motion.span>
              </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills;