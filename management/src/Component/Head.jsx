import React from 'react'
import image from './download1.jpeg'
import image1 from './ima.jpeg'
import image2 from './download3.jpeg'
import image3 from './images.jpeg'
import image4 from './imag.jpeg'
import './head.css'
const Head = () => {
  
    

  return (
    <>
    <div className='header1'>
       <h1>Inventory Management System </h1>
       </div>
  <div className="container">
  <div className='container1'>
  <div className="box">
  <div className='col'></div>
    <img src={image2} alt="image1"/>
    <h1>PC</h1>
    <p> Total Qty: 100</p>
    <p> Remain Qty: 10</p>
  </div>
  <div className="box">
  <div className='col2'></div>
    <img src={image3} alt="Image 2"/>
    <h1>Keyboard</h1>
    <p> Total Qty: 150</p>
    <p> Remain Qty: 50</p>
  </div>
  <div className="box">
  <div className='co'></div>
    <img src= {image} alt="Image 3"/>
    <h1>Mouse</h1>
    <p> Total Qty: 250</p>
    <p> Remain Qty: 20</p>
  </div>
  </div>
  <div className='container2'>
  <div className="box">
  <div className='c'></div>
    <img src={image1} alt="Image 4"/>
    <h1>Cables</h1>
    <p> Total Qty: 150 box</p>
    <p> Remain Qty: 20box</p>
  </div>
  <div className="box1">
  <div className='o'></div>
    <img src={image4} alt="Image 5"/>
    <h1>Storage device</h1>
    <p> Total Qty: 320</p>
    <p> Remain Qty: 120</p>
  </div>
  </div>
  
</div>
   
    </>
  )
}

export default Head