import React from 'react'
import './continent.css'

const Europe = ({style, children, setEurope}) => {
  return (
    <>
    <div style={style} className='card'>
      <div id="tekst">
      {children}
      </div>

      </div>
      <button onClick={() => {setEurope(false)}}>X</button>
      </>
  )
}

export default Europe