import React from 'react'
import '../Keyword/Key.css'
import { Link } from 'react-router-dom'

const Key = () => {
  return (
    <section className='key'>
      <div className="keyinp">
        <input type="text" placeholder='Search for houses'/>
        <button> <Link to='/forrent'>Go</Link></button>
      </div>
    </section>
  )
}

export default Key
