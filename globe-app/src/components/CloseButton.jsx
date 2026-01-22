import React from 'react'
import './EuropaComponents/continent2.css'
import { AnimatePresence, motion } from "framer-motion";

const CloseButton = ({setWydarzeniaButtonVisible,setEuropeNews, setEuropa, setCloseButtonVisible}) => {
  return (
    <>
    {/* <motion.div className="przycisk-content"> */}
    {/* <AnimatePresence> */}
    <motion.button className="close-content"
    whileHover={{
        scale:0.9,
        transition: {duration: 0.1}
    }}
    initial = {{opacity: 0, scale: 0.8}}
    animate= {{opacity:1, scale:1}}
    exit = {{opacity:0, y: -1000}}
    transition={{
        scale: { type: "spring", bounce: 0.4, duration: 0.5},
        opacity: { duration: 0.4, ease: "easeInOut"},
        y:{ duration: 0.5, ease: "easeInOut" }
    }} 
    onClick={()=> {setEuropeNews(false); setCloseButtonVisible(false); setWydarzeniaButtonVisible(false)  ;setTimeout(() => {
        setEuropa(false)
    }, 300);}}>✕
    </motion.button>
    {/* </AnimatePresence> */}
    {/* </motion.div> */}
    </>
  )
}

export default CloseButton