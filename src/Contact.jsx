import React from 'react'
import './StyledContact.css'

function Contact() {
  return (
    <body>
      <br />
      <br />
      <br />
      <h1>
        Contact Us
      </h1>

      <div className="container1">
        <div className="row1">
          <div className="col1">
            <h2>
              HEAD OFFICE
            </h2>
          </div>
          <div className="col2">
            <p>
              20 Rue Gaston Rollin, 92210 Saint-Cloud, France <br />
              (011) 12 34 56 78 <br />
              +33 123-45-67-890
            </p>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="row2">
          <div className="col3">
            <h2>
              REPRESENTATIVE OFFICE
            </h2>
          </div>
          <div className="col4">
            <p>
              Jalan Jend. Sudirman Kav 52 - 53, RT.5/RW.3, Senayan, Kebayoran Baru, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190
              <br />
              (021) 123-456-789
              <br />
              0821-1234-5678
            </p>
          </div>
        </div>
      </div>

      <div className="others-contact">
        <p>
          OTHERS CONTACT <br />
          <strong>EMAIL : </strong> public@skylux.co.fr
          <br />
          <strong>LINKEDIN : </strong> Skylux Avions de France
        </p>
      </div>
    </body>
  )
}

export default Contact