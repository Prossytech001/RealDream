import React from 'react'
import '../Forsales/Forsales.css'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Hou7 from '../../assets/house7.jpg'
import Hou8 from '../../assets/house8.jpg'
import Hou9 from '../../assets/house10.jpg'
import Hou1 from '../../assets/house1.jpg'
import Hou2 from '../../assets/house2.jpg'
import Hou3 from '../../assets/house3.jpg'
import Hou4 from '../../assets/house4.jpg'
import Hou5 from '../../assets/house5.jpg'
import Hou6 from '../../assets/house6.jpg'

const Forsales = () => {
  return (
    <section className='forsale'>
        <div className="forsale-content">
            <div className="forsalecons">
                <h1><Link to='/'>Home</Link><FaAngleRight/>Forsale</h1>
                <h2>For Sale</h2>
                <p>Looking for Property for Sale? Let us help you find one today. Choose from many selections of properties in Nigeria. House, Apartments, Flat, Commercial Properties and more. Click on any property to find contact information for the agent.</p>
            </div>
            <div className="forsalecos">
                <div className="forsales1">
                                <img src={Hou8} alt=''/>
                                <h1 className="folas">ForSale</h1>
                              <div className="sale-fors">
                                <h1>$200,000/N200,000,000</h1>
                                <p>Unit of 4 Bedroom...</p>
                                <div className="saleflat">
                                    <h1>FLAT</h1>
                                    <Link to='/forsale'><button>
                                        Buy now
                                    </button></Link>
                                </div>
                              </div>
                              </div>
                <div className="forsales1">
                                <img src={Hou7} alt=''/>
                                <h1 className="folas">ForSale</h1>
                              <div className="sale-fors">
                                <h1>$100,000/N100,000,000</h1>
                                <p>Unit of 4 Bedroom...</p>
                                <div className="saleflat">
                                    <h1>FLAT</h1>
                                    <Link to='/forsale'><button>
                                        Buy now
                                    </button></Link>
                                </div>
                              </div>
                              </div>
                              <div className="forsales1">
                                <img src={Hou9} alt=''/>
                                <h1 className="folas">ForSale</h1>
                              <div className="sale-fors">
                                <h1>$500,000/N500,000,000</h1>
                                <p>Unit of 6 Bedroom...</p>
                                <div className="saleflat">
                                    <h1>FLAT</h1>
                                    <Link to='/forsale'><button>
                                        Buy now
                                    </button></Link>
                                </div>
                              </div>
                              </div>
                              <div className="forsales1">
                                <img src={Hou1} alt=''/>
                                <h1 className="folas">ForSale</h1>
                              <div className="sale-fors">
                                <h1>$800,000/N800,000,000</h1>
                                <p>Unit of 9 Bedroom...</p>
                                <div className="saleflat">
                                    <h1>FLAT</h1>
                                    <Link to='/forsale'><button>
                                        Buy now
                                    </button></Link>
                                </div>
                              </div>
                              </div>
                              <div className="forsales1">
                                <img src={Hou2} alt=''/>
                                <h1 className="folas">ForSale</h1>
                              <div className="sale-fors">
                                <h1>$300,000/N300,000,000</h1>
                                <p>Unit of 3 Bedroom...</p>
                                <div className="saleflat">
                                    <h1>FLAT</h1>
                                    <Link to='/forsale'><button>
                                        Buy now
                                    </button></Link>
                                </div>
                              </div>
                              </div>
                              <div className="forsales1">
                                <img src={Hou3} alt=''/>
                                <h1 className="folas">ForSale</h1>
                              <div className="sale-fors">
                                <h1>$900,000/N1,000,000,000</h1>
                                <p>Unit of 11 Bedroom...</p>
                                <div className="saleflat">
                                    <h1>FLAT</h1>
                                    <Link to='/forsale'><button>
                                        Buy now
                                    </button></Link>
                                </div>
                              </div>
                              </div>
                              <div className="forsales1">
                                <img src={Hou4} alt=''/>
                                <h1 className="folas">ForSale</h1>
                              <div className="sale-fors">
                                <h1>$300,000/N400,000,000</h1>
                                <p>Unit of 6 Bedroom...</p>
                                <div className="saleflat">
                                    <h1>FLAT</h1>
                                    <Link to='/forsale'><button>
                                        Buy now
                                    </button></Link>
                                </div>
                              </div>
                              </div>
                              <div className="forsales1">
                                <img src={Hou5} alt=''/>
                                <h1 className="folas">ForSale</h1>
                              <div className="sale-fors">
                                <h1>$200,000/N200,000,000</h1>
                                <p>Unit of 4 Bedroom...</p>
                                <div className="saleflat">
                                    <h1>FLAT</h1>
                                    <Link to='/forsale'><button>
                                        Buy now
                                    </button></Link>
                                </div>
                              </div>
                              </div>
                              <div className="forsales1">
                                <img src={Hou6} alt=''/>
                                <h1 className="folas">on Discount</h1>
                              <div className="sale-fors">
                                <h1>$400,000/N400,000,000</h1>
                                <p>Unit of 6 Bedroom...</p>
                                <div className="saleflat">
                                    <h1>FLAT</h1>
                                    <Link to='/forsale'><button>
                                        Buy now
                                    </button></Link>
                                </div>
                              </div>
                              </div>              
            </div>
        </div>
      
    </section>
  )
}

export default Forsales
