import React from 'react'
import './EuropaComponents/continent2.css'
import { AnimatePresence, motion } from "framer-motion";
import { Children } from 'react';

const CloseButton = ({funkcja, children}) => {
  
  return (
    <>
    <motion.button className="close-content"
    whileHover={{
        scale:0.9,
        transition: {duration: 0.1}
    }}
    initial = {{opacity: 0,}}
    animate= {{opacity:1}}
    exit = {{opacity:0}}
    transition={{
        scale: { type: "spring", bounce: 0.4, duration: 0.5},
        opacity: { duration: 0.4, ease: "easeInOut"},
    }} 
    onClick={()=> {funkcja()}}> {children}
    </motion.button>
    </>
  )
}

export default CloseButton