    import React, { useState } from 'react'
    import grecja1 from '.././img/grecja1.jpg'
    import grecja2 from '.././img/grecja2.jpg'
    import grecja3 from '.././img/grecja4.jpeg'
    import grecja4 from '.././img/grecja5.jpg'
    import grecja5 from '.././img/grecja6.jpg'
    import rzym1 from '.././img/rzym1.jpg'
    import rzym2 from '.././img/rzym2.jpg'
    import rzym3 from '.././img/rzym4.jpg'
    import ateny from '../img/ateny.jpg'
    
    import ObrazekAnimacja from './ObrazekAnimacja'
    import { motion, AnimatePresence } from 'framer-motion'
    // import Snowfall from 'react-snowfall'  # Efekt padania śniegu


    
    const Starozytnosc = ({WybieranieZdjeciaStarozytnosc, ZdjęciaStarozytnosc}) => {

      const parent = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }
      
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
                <div className='naglowek'> STAROŻYTNOŚĆ</div>
                <p>
                  Potęga Rzymu: Rzymianie przejęli grecką kulturę i połączyli ją z militarną potęgą oraz geniuszem inżynieryjnym. Stworzyli Imperium Rzymskie, które zjednoczyło większość kontynentu pod jednym prawem. Rzymskie drogi, akwedukty i – przede wszystkim – kodeksy prawne stały się szkieletem przyszłej Europy. U schyłku tej epoki kluczową rolę zaczęło odgrywać chrześcijaństwo, stając się spoiwem nowej rzeczywistości.</p>
                 <p>Dziedzictwo Grecji: To starożytni Grecy dali Europie to, co najcenniejsze: demokrację, filozofię, teatr i kanony piękna w architekturze. Ateny stały się pierwszym laboratorium wolnej myśli, gdzie pytania o naturę świata i człowieka zadawali Sokrates czy Platon.</p>
              </motion.div>
              <div className="tresc-zdjecia">

                <motion.div 
                className="column"
                variants={parent}
                initial="hidden"
                animate="visible">
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaStarozytnosc(ZdjęciaStarozytnosc.RZYM1)}} key={1} source={rzym1} />
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaStarozytnosc(ZdjęciaStarozytnosc.RZYM2)}}key={2} source={rzym2} />
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaStarozytnosc(ZdjęciaStarozytnosc.RZYM3)}} key={3} source={rzym3}/>
                </motion.div>

                <motion.div
                className="column"
                variants={parent}
                initial="hidden"
                animate="visible"
                >
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaStarozytnosc(ZdjęciaStarozytnosc.GRECJA1)}} key={4} source={grecja1}/>
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaStarozytnosc(ZdjęciaStarozytnosc.GRECJA2)}} key={5} source={grecja2}/>
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaStarozytnosc(ZdjęciaStarozytnosc.GRECJA3)}} key={6} source={grecja3}/>
                </motion.div>

                <motion.div
                className="column"
                variants={parent}
                initial="hidden"
                animate="visible"
                >
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaStarozytnosc(ZdjęciaStarozytnosc.GRECJA4)}} key={7} source={grecja4}/>
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaStarozytnosc(ZdjęciaStarozytnosc.GRECJA5)}} key={8} source={grecja5}/>
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaStarozytnosc(ZdjęciaStarozytnosc.ATENY)}} key={9} source={ateny}/>
                </motion.div>
            </div>
        </>
      )
    }
    
    export default Starozytnosc