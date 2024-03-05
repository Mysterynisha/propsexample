import React from 'react'

const Productcard = ({item}) => {
  return (
    <div className='card'>
         
        <h2>{item.name}</h2>
        <p>{item.image}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
    
    </div>
  )
}

export default Productcard