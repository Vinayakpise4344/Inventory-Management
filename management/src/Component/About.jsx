import React from 'react'
import Dashboard from './Dashboard'
import './abt.css'

const About = () => {
  return (
    <>
    <Dashboard/>
    <div class="abt">
      <div className='abt1'>
        <h2>About Us</h2>
        <div>
          <h3>Our Place</h3>
          <p>
            Welcome to <strong>XYZ</strong>, where we are dedicated to providing top-quality products and services to meet your needs. Here, you'll find comprehensive information about our establishment, the talented individuals who manage it, and the hardworking team members who ensure our inventory is stocked and ready for you.
          </p>
          <p>
            <strong>XYZ</strong> is a leading provider of [describe your industry or niche]. Located in [location], our state-of-the-art facility houses an extensive inventory of [mention types of products or services]. Whether you're visiting us in person or exploring our online platform, we aim to provide a seamless experience where you can find exactly what you need.
          </p>
        </div>

        <div>
          <h3>Management Team</h3>
          <p>
            At the helm of <strong>XYZ</strong> is our esteemed management team, led by John Smith, our CEO. With years of experience in the industry, John is committed to delivering exceptional products and services to our customers. Assisting John are our dedicated managers, each bringing their unique expertise to ensure the smooth operation of our business.
          </p>
        </div>

        <div>
          <h3>Our Dedicated Team</h3>
          <p>
            Behind the scenes, our dedicated team of workers is the backbone of <strong>XYZ</strong>. From skilled technicians to diligent warehouse staff, each member plays a crucial role in maintaining our inventory and delivering on our promises. United by a shared dedication to excellence, our team embodies our values of reliability, integrity, and customer satisfaction.
          </p>
        </div>
        
    
        </div>
      </div>
      </>
  )
}

export default About 
  