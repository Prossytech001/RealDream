import React from 'react'
import { Link } from 'react-router-dom';
import '../Navbar/Nav.css';
import Logo from '../Logo/Logo';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";


const Nabv = () => {
  return (
    <header className='nav'> 
      <div className="navbar">
         <Link to='/'><div className="logo"><Logo/></div></Link>
         <div className="navul">
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/forsale'><li>For SALE</li></Link>
                <Link to='/forrent'><li> For RENT</li></Link>
                <Link to='/advert'><li>Advertise with us</li></Link>
            </ul>
         </div>
         <div className="nvabtn">
            <Link to='/contact'><button>Contact me</button></Link>
         </div>
         
         <label htmlFor="side" className='openside'><GiHamburgerMenu/></label>
        
         <input type="checkbox"  id='side'/>
         <label htmlFor="side"id='overlay' ></label>
         <div className="sidenav">
            <label htmlFor="side" className='closeside'><MdOutlineClose/></label>
           <ul>
             <Link to='/'><li>Home</li></Link> 
             <Link to='/forsale'><li>For SALE</li></Link> 
             <Link to='/forrent'><li>For RENT</li></Link> 
             <Link to='/advert'><li>Advertise with us</li></Link> 
             <Link to='/contact'><li>Contact me</li></Link> 
           </ul>
         </div>

      </div>
    </header>
  )
}

export default Nabv
