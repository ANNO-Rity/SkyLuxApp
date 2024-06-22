import React from 'react';
import falcon from './img/image01.jpg';
import './StyledAbout.css';
import history from './img/history1.jpg';
import airport from './img/LAX.jpg'

function About() {
  return (
    <body>
      <img className='falcon' src={falcon} alt="falcon10x1" />
      <h1>About Us</h1>

      <div className="container1">
        <div className="row1">
          <div className="col1">
            <img className='figure' src={history} alt="" />
          </div>
          <div className="col2">
            <h2>
              OUR HISTORY
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, maiores libero nihil quae vitae unde vel qui harum est porro. Quas, rerum. Libero illo optio est voluptatum delectus doloremque sequi laudantium officia labore culpa. Autem?
            </p>
          </div>
        </div>
        <div className="row2">
          <div className="col3">
            <h2>
              OUR BACKGROUND
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia excepturi voluptas accusamus sed minus illum rem, iusto nisi debitis quidem atque minima voluptatem? Ipsam minima mollitia nam rem ipsa voluptatem voluptate ut culpa odit fugit autem eos quis, quidem eligendi id quae assumenda adipisci ullam. Ad corrupti odio dolores.
            </p>
          </div>
          <div className="col4">
            <img className='figure' src={airport} alt="" />
          </div>
        </div>
      </div>
    </body>
  )
}

export default About