import React from 'react'
import './DuzyObrazek.css'
import {motion, AnimatePresence, easeInOut} from 'framer-motion'

const DuzyObrazek = ({source, FunkcjaZamykania}) => {
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
            <img  id="obrazek" src={source} alt="" />
            <button className="close" id="duzy-obrazek" onClick={FunkcjaZamykania}>Zamknij</button>
        </motion.div>
    </>
  )
}

export default DuzyObrazek