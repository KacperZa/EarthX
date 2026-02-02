import React from 'react'
import './karta.css'

const Karta = ({imgSrc, title, text}) => {
  return (
    <>
    <div className="karta" >
    <div className="info-card">
      <div className="front" style={{backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      <div className="back">
          <div className='tytul-wydarzenia'>{title}</div>
          <div className="tekst-wydarzenia">{text}</div>
      </div>
    </div>
</div>
    </>
  )
}

export default Karta