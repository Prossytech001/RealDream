import React from 'react'
import '../Forrent/Forrent.css'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Hou7 from '../../assets/house17.jpg'
import Hou8 from '../../assets/house15.jpg'
import Hou9 from '../../assets/house10.jpg'
import Hou1 from '../../assets/house12.jpg'
import Hou2 from '../../assets/house13.jpg'
import Hou3 from '../../assets/house14.jpg'
import Hou4 from '../../assets/house16.jpg'
import Hou5 from '../../assets/house5.jpg'
import Hou6 from '../../assets/house6.jpg'

const Forrent = () => {
  return (
    <section className='forrent'>
      <div className="forrent-content">
                  <div className="forrentcons">
                      <h1><Link to='/'>Home</Link><FaAngleRight/>For rent</h1>
                      <h2>For Rent</h2>
                      <p>Looking for Property for rent? Let us help you find one today. Choose from many selections of properties in Nigeria. House, Apartments, Flat, Commercial Properties and more. Click on any property to find contact information for the agent.</p>
                  </div>
                  <div className="forrentcos">
                      <div className="forrents1">
                                      <img src={Hou8} alt=''/>
                                      <h1 className="folrs">ForSale</h1>
                                    <div className="rent-fors">
                                      <h1>$200,000/N200,000,000</h1>
                                      <p>Unit of 4 Bedroom...</p>
                                      <div className="rentflat">
                                          <h1>FLAT</h1>
                                         <Link to='/forrent'> <button>
                                              Rent now
                                          </button></Link>
                                      </div>
                                    </div>
                                    </div>
                      <div className="forrents1">
                                      <img src={Hou7} alt=''/>
                                      <h1 className="folas">ForSale</h1>
                                    <div className="rent-fors">
                                      <h1>$100,000/N100,000,000</h1>
                                      <p>Unit of 4 Bedroom...</p>
                                      <div className="rentflat">
                                          <h1>FLAT</h1>
                                          <Link to='/forrent'> <button>
                                              Rent now
                                          </button></Link>
                                      </div>
                                    </div>
                                    </div>
                                    <div className="forrents1">
                                      <img src={Hou9} alt=''/>
                                      <h1 className="folrs">ForSale</h1>
                                    <div className="rent-fors">
                                      <h1>$500,000/N500,000,000</h1>
                                      <p>Unit of 6 Bedroom...</p>
                                      <div className="rentflat">
                                          <h1>FLAT</h1>
                                          <Link to='/forrent'> <button>
                                              Rent now
                                          </button></Link>
                                      </div>
                                    </div>
                                    </div>
                                    <div className="forrents1">
                                      <img src={Hou1} alt=''/>
                                      <h1 className="folrs">ForSale</h1>
                                    <div className="rent-fors">
                                      <h1>$800,000/N800,000,000</h1>
                                      <p>Unit of 9 Bedroom...</p>
                                      <div className="rentflat">
                                          <h1>FLAT</h1>
                                          <Link to='/forrent'> <button>
                                              Rent now
                                          </button></Link>
                                      </div>
                                    </div>
                                    </div>
                                    <div className="forrents1">
                                      <img src={Hou2} alt=''/>
                                      <h1 className="folrs">ForSale</h1>
                                    <div className="rent-fors">
                                      <h1>$300,000/N300,000,000</h1>
                                      <p>Unit of 3 Bedroom...</p>
                                      <div className="rentflat">
                                          <h1>FLAT</h1>
                                          <Link to='/forrent'> <button>
                                              Rent now
                                          </button></Link>
                                      </div>
                                    </div>
                                    </div>
                                    <div className="forrents1">
                                      <img src={Hou3} alt=''/>
                                      <h1 className="folrs">ForSale</h1>
                                    <div className="rent-fors">
                                      <h1>$900,000/N1,000,000,000</h1>
                                      <p>Unit of 11 Bedroom...</p>
                                      <div className="rentflat">
                                          <h1>FLAT</h1>
                                          <Link to='/forrent'> <button>
                                              Rent now
                                          </button></Link>
                                      </div>
                                    </div>
                                    </div>
                                    <div className="forrents1">
                                      <img src={Hou4} alt=''/>
                                      <h1 className="folrs">ForSale</h1>
                                    <div className="rent-fors">
                                      <h1>$300,000/N400,000,000</h1>
                                      <p>Unit of 6 Bedroom...</p>
                                      <div className="rentflat">
                                          <h1>FLAT</h1>
                                          <Link to='/forrent'> <button>
                                              Rent now
                                          </button></Link>
                                      </div>
                                    </div>
                                    </div>
                                    <div className="forrents1">
                                      <img src={Hou5} alt=''/>
                                      <h1 className="folrs">ForSale</h1>
                                    <div className="rent-fors">
                                      <h1>$200,000/N200,000,000</h1>
                                      <p>Unit of 4 Bedroom...</p>
                                      <div className="rentflat">
                                          <h1>FLAT</h1>
                                          <Link to='/forrent'> <button>
                                              Rent now
                                          </button></Link>
                                      </div>
                                    </div>
                                    </div>
                                    <div className="forrents1">
                                      <img src={Hou6} alt=''/>
                                      <h1 className="folrs">on Discount</h1>
                                    <div className="rent-fors">
                                      <h1>$400,000/N400,000,000</h1>
                                      <p>Unit of 6 Bedroom...</p>
                                      <div className="rentflat">
                                          <h1>FLAT</h1>
                                          <Link to='/forrent'> <button>
                                              Rent now
                                          </button></Link>
                                      </div>
                                    </div>
                                    </div>              
                  </div>
              </div>
            
    </section>
  )
}

export default Forrent
