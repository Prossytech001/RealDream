import React from 'react'
import '../Articles/Art.css'
import Con1 from '../../assets/articule1.jpg'
import Con2 from '../../assets/articule2.jpg'
import Con3 from '../../assets/articule3.jpg'
import Con4 from '../../assets/articule4.jpg'

const Art = () => {
  return (
    <section className='art'>
      <div className="art-con">
        <h1>Latest Articles</h1>
        <div className="artscroll">
            <div className="arts">
                <img src={Con1} alt="" />
                <p>Buy a house as a couple</p>
            </div>
            <div className="arts">
            <img src={Con2} alt="" />
            <p>Feel as home</p>
            </div>
            <div className="arts">
            <img src={Con3} alt="" />
            <p>The Phases of foreclosure</p>
            </div>
            <div className="arts">
            <img src={Con4} alt="" />
            <p>Tips for bathroom design</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Art
