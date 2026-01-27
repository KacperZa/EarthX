import React from 'react'
import { motion } from 'framer-motion'

const ObrazekAnimacja = ({ source, Klikniecie}) => {

  const child = {
    hidden: {
      opacity: 0, 
      x: -150
    },
    visible: {
      opacity: 1, 
      x:0,
      transition:{
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  }
  return (
    <>
        <motion.img
        variants={child}
        src={source} alt=""
        onClick={Klikniecie} 
        />
        
    </>
  )
}

export default ObrazekAnimacja