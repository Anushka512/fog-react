import React from 'react'
import Donut from "../../Assets/Images/donut.webp"

import "./Error.scss"


function Error() {
  return (
    <>
      <div className='container error-page'>
        <div className='error-page-wrapper'>
          <div className="error-top">
            <h1>4</h1>
            <img src={Donut} alt="Donut Img" />
            <h1>4</h1>
          </div>
          <div className='error-bottom'>
            <button className='btn btn-primary'>
              Get Back to Home
            </button>
          </div>


        </div>
      </div>
    </>
  )
}

export default Error