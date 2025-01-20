import React from 'react'
import '../Footer/Footer.css'
import Logo from '../Logo/Logo.jsx'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer'>
     <div className="footer-content">
        <ul className="first">
            <li className="head">Popular Property</li>
            <Link to='/forsale'> <li>Apartment for Sale in Lagos</li></Link>
            <Link to='/forrent'> <li>Apartment for Rent in Lagos</li></Link>
            <Link to='/forsale'><li>Apartment for Sale in Abuja</li></Link>
            <Link to='/forrent'><li>Apartment for Rent in Abuja</li></Link>
        </ul>
        <ul className="first">
           <li className="head">About Us</li>
            <li>REAL DREAM Real Estate Nigeria is a new <br/>property listing website for properties in <br/>Nigeria, offering many options of Houses,<br/> Apartments, Land, and Commercial<br/> Properties for Sale and Rent.</li>
            <Link> <li>About Us</li></Link>
            <Link to='/contact'><li>Contact Us</li></Link>
            
        </ul>
        <ul className="first">
            <li className="head">For Real Estate Agent</li>
             <li>We offer a market place for Real Estate <br></br>Agents to Sell and Rent out properties.</li>
            <Link to='/advert'> <li>Advertise with Us</li></Link>
            
        </ul>
     </div>
     <div className="footer2">
        <Logo/>
        <h1>© 2024 BE FORWARD CO.,LTD. All rights reserved</h1>
     </div>
    </section>
  )
}

export default Footer
