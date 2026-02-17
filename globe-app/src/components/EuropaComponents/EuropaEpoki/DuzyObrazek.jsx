import React from 'react'
import './DuzyObrazek.css'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'

const DuzyObrazek = ({source, FunkcjaZamykania, opis}) => {
  return (
    <>
        <motion.div 
        key={"DuzyObrazek"}
        className="containerImg"
        initial = {{ opacity: 0}}
        animate = {{ opacity: 1}}
        exit={{opacity: 0}}
        transition = {{
          opacity: { 
            duration: 0.5,
            ease: "easeInOut" 
          }
        }}
        >
          <div id='containerImg'>
            <div id='obrazekImg'>
              <img id="obrazek" src={source} alt="" />
            </div>
            <p className='opis'>{opis}</p>
          </div>
          <div className="obrazekBtn">
            <button className="close" id='bigPictureBtn' onClick={FunkcjaZamykania}>Zamknij</button>
          </div>
        </motion.div>
    </>
  )
}

export default DuzyObrazek