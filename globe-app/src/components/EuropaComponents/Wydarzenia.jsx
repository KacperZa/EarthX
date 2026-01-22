import React, { useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { v4 as uuid4 } from 'uuid'

import CloseButton from '../CloseButton'
import './wydarzenia.css'
import Karta from './Karta'

const Wydarzenia = ({wydarzeniaData,setWydarzeniaButtonVisible, isWydarzeniaVisible, setEuropeNews, setCloseButtonVisible, setWydarzeniaVisible, isCloseButtonVisible, setEuropa, Europa}) => {

  return (
    <>
    {isWydarzeniaVisible ? 
    <motion.div 
    className="card-wydarzenia"
    initial={{y: -1000, opacity: 0}}
    animate= {{y: 0, opacity: 1}}
    exit={{y: -1000, opacity: 0}}
    transition={{duration: 1, ease: "easeInOut"}}
    >
        <div className="panel2" id='panel-wydarzenia'>
          <div className="container-wydarzenia">
            {wydarzeniaData
            .map((item) =>(
                <Karta 
                key={uuid4()}
                title={item.title}
                text={item.text}
                imgSrc={item.img}
                />
              )
            )}
          </div>
        </div>
      

      </motion.div>
    : null}
            <motion.button 
            className='close-content' 
            id='switch'
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
            onClick={() => { setWydarzeniaVisible(false); setEuropeNews(true); setCloseButtonVisible(false); setTimeout(() => {
              setCloseButtonVisible(true)
            }, 300); setWydarzeniaButtonVisible(true);}}
            >⮂</motion.button>
            
          {isCloseButtonVisible && (
        <CloseButton
          setEuropa={setEuropa} 
          Europa={Europa} 
          setEuropeNews={setEuropeNews} 
          setCloseButtonVisible={setCloseButtonVisible}
        />)}       
    </>
  )
}

export default Wydarzenia