import React from 'react'
import './StyledCareer.css'
import marketing from './img/career1.jpg'
import engineering from './img/career2.jpg'

function Career() {
  return (
    <body>
        <br />
        <br />
        <h1>We Are Hiring!</h1>

        <div className="container1">
          <div className="row1">
            <div className="col1">
              <img className='marketing' src={marketing} alt="marketing" />
            </div>
            <div className="col2">
                <h2>Marketing Staff</h2>
                <p>REQUIREMENTS</p>
                <ul>
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>dolor</li>
                </ul>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="row2">
            <div className="col3">
              <h2>Engineering Staff</h2>
                <p>REQUIREMENTS</p>
                <ul>
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>dolor</li>
                  <li>it samet</li>
                </ul>
            </div>
            <div className="col4">
              <img className='engineering' src={engineering} alt="engineering" />
            </div>
          </div>
        </div>
    </body>
  )
}

export default Career