import React from 'react'
import { easeIn, easeInOut, motion } from 'framer-motion'
import { linear } from 'animejs'

const ObrazekAnimacja = ({key, source, Klikniecie}) => {

  const child = {
    hidden: {
      opacity: 0, 
      x: -300
    },
    visible: {
      opacity: 1, 
      x:0,
      transition:{
        duration: 0.5,
        ease: "linear",
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