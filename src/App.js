import React, { useState } from 'react'
import Productcard from './Component/Productcard'
import Productdata from './Component/Productdata'
import './App.css'
const App = () => {

  return (
    <div className='App'>
     <center> <h1 >Props example!</h1></center>
    <div className='product'>
      {
     Productdata.map((item,key)=>
     (<Productcard item={item}/>))
      }
    </div>
    </div>
  )
}

export default App