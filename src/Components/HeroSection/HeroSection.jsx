import React from 'react'
import Header from '../Header/Header'
import img1 from '../../img/black3.jpeg';
import img2 from '../../img/beauty1.jpeg'

const Herosection = () => {
  return (
    <div>
      <Header />
      <img src={img1} alt="" />
      <div className="heroLeft">
        <h2>Quality Product at your doorstep</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quae reprehenderit possimus officia eveniet adipisci illo.
        </p>
        <button className="heroBtn">Place an Order</button>
      </div>
      <div className="heroRight">
        <img src={img2} alt="" />
      </div>
    </div>
  )
}

export default Herosection