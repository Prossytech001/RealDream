import React from 'react'
import '../Latestsale/sale.css'
import Hou7 from '../../assets/house7.jpg'
import Hou8 from '../../assets/house8.jpg'
import { Link } from 'react-router-dom'
import Hou9 from '../../assets/house10.jpg'
const sale = () => {
  return (
    <section className='sale'>
     <div className="sale-content">
         <h1 className='conh1'>Latest Sales</h1>
         <div className="sale-card">
            <div className="sale-card1">
              <img src={Hou7} alt=''/>
              <h1 className="fors">ForSale</h1>
              <div className="sale-conts">
                <h1>$100,000/N100,000,000</h1>
                <p>Unit of 3 Bedroom...</p>
                <div className="sale-flat">
                    <h1>FLAT</h1>
                    <Link to='/forsale'><button>See more</button></Link>
                </div>
              </div>
              </div>
              <div className="sale-card2">
                <img src={Hou8} alt=''/>
                <h1 className="fors">ForSale</h1>
              <div className="sale-conts">
                <h1>$100,000/N100,000,000</h1>
                <p>Unit of 3 Bedroom...</p>
                <div className="sale-flat">
                    <h1>FLAT</h1>
                    <Link to='/forsale'><button>See more</button></Link>
                </div>
              </div>
              </div>
                <div className="sale-card3">
                    <img src={Hou9} alt=''/>
                    <h1 className="fors">ForSale</h1>
              <div className="sale-conts">
                <h1>$100,000/N100,000,000</h1>
                <p>Unit of 3 Bedroom...</p>
                <div className="sale-flat">
                    <h1>FLAT</h1>
                    <Link to='/forsale'><button>See more</button></Link>
                </div>
              </div>
                    </div>
     </div>
     </div>
    </section>
  )
}

export default sale
