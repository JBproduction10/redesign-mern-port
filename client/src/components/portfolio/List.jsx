import React, { useState } from 'react'

const List = ({list, filterItems}) => {
  const [activate, setActive] = useState(0);

  return (
    <div className='portfolio__list'>
      {list.map((category, index) =>{
        return(
          <button className={`${activate === index ? 'active-work' : ""}
          portfolio__list-item text-cs`}
          key={index} onClick={() => {
            setActive(index);
            filterItems(category)
          }}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default List;