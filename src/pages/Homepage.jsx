import React from 'react'
import Logo from '../components/Logo/Logo.jsx';
import Nav from '../components/Navbar/Nabv.jsx';
import Key from '../components/Keyword/Key.jsx';
import Line1 from '../components/Line1/L1.jsx';
import Late from '../components/Latestsale/sale.jsx';
import Prop from '../components/Properties/Prop.jsx';
import Art from '../components/Articles/Art.jsx';
import Footer from '../components/Footer/Footer.jsx'

const Homepage = () => {
  return (
    <div>
      <Nav/>
      <Key/>
      <Line1/>
      <Late/>
      <Prop/>
      <Art/>
      <Footer/>
      
    </div>
  )
}

export default Homepage
