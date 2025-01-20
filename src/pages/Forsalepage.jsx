import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Navbar/Nabv.jsx';
import Key from '../components/Keyword/Key.jsx';
import Footer from '../components/Footer/Footer.jsx'
import Forpage from '../components/Forsales/Forsales.jsx'



const Aboutpage = () => {
  return (
    <div>
       <Nav/>
       <Key/>
       <Forpage/>
       
       <Footer/>
    </div>
  )
}

export default Aboutpage
