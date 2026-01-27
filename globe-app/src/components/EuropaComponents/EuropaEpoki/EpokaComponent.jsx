    import React, { useState } from 'react'
    import ObrazekAnimacja from './ObrazekAnimacja'
    import { motion, AnimatePresence } from 'framer-motion'
    import { v4 as uuid4 } from 'uuid'
    // import Snowfall from 'react-snowfall'  # Efekt padania śniegu


    
    const Starozytnosc = ({data, WybieranieZdjecia, Zdjęcia}) => {

      const parent = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }
      const obrazki = data["img"]
      
      return (
        <>

            <motion.div 
            // key={"starozytnosc"}
            className="tresc-tekst"
            initial = {{ opacity: 0, x: -400}}
            animate = {{opacity: 1, x:0}}
            exit = {{ opacity: 0, x:40}}
            transition={{
              x: {duration: .8},
              opacity: {duration: .8}
            }}
            >
              {/* <Snowfall # Efekt padania śniegu
               color='#fff'
               snowflakeCount={350}/> */}
                <div className='naglowek'>{data["title"]}</div>
                <p>{data["text1"]}</p>
                <p>{data["text2"]}</p>

              </motion.div>
              <motion.div
              className="tresc-zdjecia"
                variants={parent}
                initial="hidden"
                animate="visible">
                {/* <motion.div 
 */}

                 {obrazki
                  .map(item =>(
                    <ObrazekAnimacja 
                    Klikniecie={()=> {WybieranieZdjecia(Zdjęcia[item.id])}}
                    key={item.id}
                    source={item.src} />
                  ))}
                {/* </motion.div> */}
            </motion.div>
        </>
      )
    }
    
    export default Starozytnosc