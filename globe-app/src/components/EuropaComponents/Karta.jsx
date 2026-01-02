import React from 'react'
import './karta.css'

const Karta = ({imgSrc, title, text}) => {
  return (
    <>
    <div className="karta" >
    <div className="info-card">
    <div className="front" style={{backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
    <div className="back">
        <h3>{title}</h3>{text}
        </div>
    </div>
</div>
    </>
  )
}

export default Karta