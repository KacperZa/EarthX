import React, { useState } from 'react'
import './continent2.css'
import { motion, AnimatePresence, delay, transform } from 'framer-motion'
import ateny from '../ateny.jpg'
import CircularGallery from './CircularGallery'
import chorwacja from '.././chorwacja.jpg'
import hiszpania from '.././hiszpania.png'
import islandia from '.././islandia.png'
import EuropeContent from './EuropeContent'

const Europe = ({style, setEuropa, Europa}) => {
  const [EuropeNews, setEuropeNews] = useState(false)
  const [Tytul, setTytul] = useState(true)
  return (
    <>
    <AnimatePresence>
      { Tytul && (
        <motion.div
        key="europe-card"
        initial = {{opacity: 0, scale: 0.8}}
        animate= {{opacity:1, scale:1}}
        exit = {{opacity:0, y: -1000}}
        transition={{
          scale: { type: "spring", bounce: 0.4, duration: 0.5},
          opacity: { duration: 0.4, ease: "easeInOut"},
          y:{ duration: 0.5, ease: "easeInOut" }
        }} 
        style={style}
        className='card'>
      <motion.div id="container">
        <motion.div id='slideshow'>
          <motion.img src={islandia} alt="" />
          <motion.img src={hiszpania} alt="" />
          <motion.img src={chorwacja} alt="" />
        </motion.div>
        <motion.div id="text"
        drag
        dragConstraints={{top:0, left:0, right:0, bottom:0}}>
            <h1 id="title">EUROPA</h1>
        </motion.div>
          <motion.div className="przycisk">
            <motion.button className='close' onClick={() => {setEuropeNews(true);   setTytul(false)}}>AHA</motion.button>
          <motion.button className="close"
           whileHover={{
            scale:0.9,
            transition: {duration: 0.1}
          }}
          transition={{duration: 0.5}}
          onClick={() => {setTytul(false); setTimeout(() => {
            setEuropa(false)
          }, 300);}}>Close
          </motion.button>
          </motion.div>
          </motion.div>
        </motion.div>
      )}
      { EuropeNews && (
        <motion.div
        key="content-card"
        initial = {{opacity: 0, scale: 0.8}}
        animate= {{opacity:1, scale:1}}
        exit = {{opacity:0, y: -1000}}
        transition={{
          scale: { type: "spring", bounce: 0.4, duration: 0.5},
          opacity: { duration: 0.4, ease: "easeInOut"},
          y:{ duration: 0.5, ease: "easeInOut" }
        }} 
        style={style}
        className='content'>
          <div className='test1'>siema</div>
          <div className='test1'>AHA</div>

          <motion.div className='przycisk' id='close-main'>
            <motion.button onClick={()=> {setEuropeNews(false); setTimeout(() => {
              setEuropa(false)
            }, 300);}} className='close'> Close</motion.button>
          </motion.div>
        </motion.div>
          )}
      </AnimatePresence>

      </>
  )
}

export default Europe