import React from 'react'
import '../Contact/Contact.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className='contact'>
      <div className="contact-content">
        <div className="contactco">
            <h1><Link to='/'>Home</Link><FaAngleRight/>Contact us</h1>
            <h2>Contact</h2>
        </div>
        <div className="contactcon">
            <div className="concon">
                <h1>Real Estate Nigeria</h1>
                <p>Thank you for visiting our website. Please feel free to ask for any question on the properties, products and services you are interested in.
                We welcome any comments or suggestions to enhance your experience.</p>
            </div>
            <div className="coninput">
                <div className="conput">
                    <label htmlFor="name">Your Name (required)</label>
                    <input type="text" required/>
                </div>
                <div className="conput">
                    <label htmlFor="tel">Your TEL (required)</label>
                <input type="text" required />
                </div>
                <div className="conput">
                <label htmlFor="email">Your Email (required)</label>
                <input type="text" required/>
                </div>
                <div className="conput">
                <label htmlFor="massage">Your Massage</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <input type="submit" className='submit'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
