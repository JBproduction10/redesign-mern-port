import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import {projects} from '../../Data';
import {motion, AnimatePresence} from 'framer-motion';
import './portfolio.css';

const allNavList = ['all', ...new Set(projects.map((project) => project.category))];


const Portfolio = () => {
  const [projectItems, setMenyItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems=(category) =>{
    if(category === 'all'){
      setMenyItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.
      category === category);

      setMenyItems(newProjectItems);
  }
  return (
    <section className='portfolio section' id='work'>
      <h2 className='section__title text-cs'>Portfolio</h2>
      <p className='section__subtitle'>
        My <span>Works</span>
      </p>

      <List list={navList} filterItems={filterItems}/>

      <motion.div
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:0.8
      }}
       className='portfolio__container container grid'>
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems}/>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Portfolio;