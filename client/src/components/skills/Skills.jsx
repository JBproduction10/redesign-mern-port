import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section className='skills section' id='section'>
      <h2 className='section__title text-cs'>Professional Skills</h2>

      <p className='section__subtitle'>
        My <span>Talent</span>
      </p>

      <div className='skills__container container grid'>
        <div className='skills__item'>
          <div className='skills__titles'>
            <h3 className='skills__name'></h3>
            <span className='skills__number'>
              <span>%</span>
            </span>
          </div>
          <p className='skills__description'></p>
          <div className='skills__bar'>
            <span className='skills__percentage'>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;