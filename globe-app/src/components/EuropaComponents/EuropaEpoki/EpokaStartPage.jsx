import React from 'react'
import './EpokaStartPage.css'
import { motion } from 'framer-motion'

    const EpokaStartPage = () => {
      return (
        <>
            <motion.div className="tresc-tekst" id='start-tresc-tekst'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            transition={{duration: 1}}>
                <div className='naglowek' id='start-naglowek'> HISTORIA EUROPY</div>
                    Użyj suwaka na dole aby odkryć historię Europy.
              </motion.div>
        </>
      )
    }
    
    export default EpokaStartPage