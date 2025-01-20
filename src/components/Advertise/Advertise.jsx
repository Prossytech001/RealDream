import React from 'react'
import '../Advertise/Advertise.css'
import { Link } from 'react-router-dom'
import ad1 from '../../assets/advertise.jpg'
import { FaAngleRight } from "react-icons/fa6";

const Advertise = () => {
  return (
    <section className='advertise'>
        <div className="advertise-content">
            <div className="advert">
                <h1><Link to='/'>Home</Link><FaAngleRight/>Advertise with us</h1>
                <h2>Advertise With Us</h2>

            </div>
            <div className="adver">
                <img src={ad1} alt="" />
                <div className="advertcon">
                    <ul>
                        <li className='first'>The New Property Listing Website for You.</li>
                        <li>Be one of the first people to advertise your properties with BE FORWARD Real Estate Nigeria. We provide a place where you and your customers can get connected directly.</li>
                        <li className='first'>Advertise for FREE.</li>
                        <li>If any of the following applies to you, you are on the right page.</li>
                        <li> Are you a Real Estate Agent in Nigeria?</li>
                        <li>Are you finding difficulties finding Customers</li>
                        <li>Do you want to increase inquiries for your properties?
                        </li>
                        <li> Are you interested in advertising your property/agent for FREE?</li>
                        <li className='first'>Get Registered Today.</li>
                        <li>Simply <Link to='/contact'>click here</Link> and send us your information. We will get back to you soon.</li>
                        <li>– Your Information –</li>
                        <li>Your Name (First/Last):</li>
                        <li>TEL:</li>
                        <li>Email:</li>
                        <li>Agent (Company) Name:</li>
                        <li>WhatsApp Number:</li>
                        <li>Instagram:</li>
                        <li>Areas of Properties:</li>
                        <li>Current Number of Properties:</li>
                       
                    </ul>
                </div>
                <div className="adbtn">
                    <Link to='/contact'><button>Get Registered</button></Link>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Advertise
