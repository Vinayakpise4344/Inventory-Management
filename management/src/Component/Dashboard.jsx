import React from 'react';


import './Dash.css'

const Dashboard = () => {
    // document.querySelector(".sidebar-menu").classList("active")

  
      
   
  return (
    <div className='sidebar-menu'>
      <div className='Dashboard'>
      <div className='logo'>
      <h1>Vinayak...</h1>
      </div>
      <div className='sidebar'>
        <div className='links'>
          <div className='link'>
            <a href="/home">
            <i class="ri-dashboard-fill"></i>
            Dashboard
            </a>
          </div>
          <div className='link'>
            <a href="/About">
            <i class="ri-article-line"></i>
            About
            </a>
          </div>
          <div  className='link'>
          
             <a  href="#" >
            <i  class="ri-shopping-cart-line"></i>
            Inventory</a>
            
            <ul className='sub-menu'  >
              <a href="/invet">Information technology</a>
              
            </ul>
            
          </div>
          
          {/* <div className='link'>
            <a href="#">
            <i class="ri-file-chart-fill"></i>
            Reports
            </a>
          </div>
          <div className='link'>
            <a href="#">
            <i class="ri-shopping-bag-4-line"></i>
            Orders
            </a>
          </div> */}

        </div>
      </div>
      </div>
     <div className='header'>
      <h4>iuwbsi2oin</h4>jbdx2own
   

   
     </div>
    </div>
    

  )
}

export default Dashboard