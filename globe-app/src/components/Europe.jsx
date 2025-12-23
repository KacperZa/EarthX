import React, { useState } from 'react'
import './continent2.css'
import { motion, AnimatePresence, delay, transform } from 'framer-motion'

import chorwacja from '.././chorwacja.jpg'
import hiszpania from '.././hiszpania.png'
import islandia from '.././islandia.png'
import CloseButton from './CloseButton'
import SplitText from './SplitText'

import Starozytnosc from './EuropaEpoki/Starozytnosc'
import Średniowiecze from './EuropaEpoki/Średniowiecze'
import Nowożytność from './EuropaEpoki/Nowożytność'
import Współczesność from './EuropaEpoki/Współczesność'
const Europe = ({style, setEuropa, Europa}) => {
  const [EuropeNews, setEuropeNews] = useState(false)
  const [Tytul, setTytul] = useState(true)

  const [isCloseButtonVisible, setCloseButtonVisible] = useState(false)
  const [ŚredniowieczeVisible, setŚredniowieczeVisible] = useState(false)
  const [StarożytnośćVisible, setStarożytnoścVisible] = useState(false)
  const [NowożytnośćVisible, setNowożytnośćVisible] = useState(false)
  const [WspółczesnośćVisible, setWspółczesnośćVisible] = useState(false)

  const [text, setText] = useState('')
  const [Wartosc, setWartosc] = useState(0)

  const ValueChangeHandler = (e) =>{
    const Rok = Number(e.target.value);


      if (!Rok) {
        setStarożytnoścVisible(true)
      }

      if (Rok < 476) {
        setStarożytnoścVisible(true)
        setŚredniowieczeVisible(false)
        setNowożytnośćVisible(false)
        setWspółczesnośćVisible(false)
      }
      if (Rok >= 476 && Rok < 1492) {
        setŚredniowieczeVisible(true)
        setStarożytnoścVisible(false)
        setNowożytnośćVisible(false)
        setWspółczesnośćVisible(false)
      }
      if (Rok >= 1492 && Rok < 1914) {
        setNowożytnośćVisible(true)
        setŚredniowieczeVisible(false)
        setStarożytnoścVisible(false)
        setWspółczesnośćVisible(false)
      }
      if (Rok >= 1914) {
        setWspółczesnośćVisible(true)
        setNowożytnośćVisible(false)
        setŚredniowieczeVisible(false)
        setStarożytnoścVisible(false)
      }
      
}
  

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
            <motion.button className='close' id='close-czytaj'
            whileHover={{
              scale:0.9,
              transition: {duration: 0.1}
            }}  
          transition={{duration: 0.5}} onClick={() => {setEuropeNews(true);   setTytul(false); setCloseButtonVisible(true)}}>Czytaj dalej</motion.button>
          <motion.button className="close"
           whileHover={{
            scale:0.9,
            transition: {duration: 0.1}
          }}
          transition={{duration: 0.5}}
          onClick={() => {setTytul(false); setTimeout(() => {
            setEuropa(false)
          }, 300);}}>Zamknij
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

      <motion.div id="container-content">
        {/* Panel powitalny(wstęp) */}
        <div className="panel1">
          <SplitText
              text="Historia Europy: Od Antyku do Współczesności"
              className='poczatek'
              delay={100}
              duration={2.5}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
          />
        </div>
        {/* Panel z informacjami o europie */}
        <motion.div className="panel2">
          <div className="naglowek-panel2">
            1. Starożytność: Fundamenty Zachodu
          </div>
          <div className="container-panel2">
            <div className="tekst-panel2">
              
              <div className="tekst1-panel2">
                Dziedzictwo Grecji: To starożytni Grecy dali Europie to, co najcenniejsze: demokrację, filozofię, teatr i kanony piękna w architekturze. Ateny stały się pierwszym laboratorium wolnej myśli, gdzie pytania o naturę świata i człowieka zadawali Sokrates czy Platon.
              </div>

              <div className="tekst2-panel2">
                Potęga Rzymu: Rzymianie przejęli grecką kulturę i połączyli ją z militarną potęgą oraz geniuszem inżynieryjnym. Stworzyli Imperium Rzymskie, które zjednoczyło większość kontynentu pod jednym prawem. Rzymskie drogi, akwedukty i – przede wszystkim – kodeksy prawne stały się szkieletem przyszłej Europy. U schyłku tej epoki kluczową rolę zaczęło odgrywać chrześcijaństwo, stając się spoiwem nowej rzeczywistości.
              </div>

            </div>
            <div className="zdjecia-panel2">
            </div>
          </div>
        </motion.div>

        <div className="panel2" id='panel-timeline'>
          <div className="opakowanie-tresc">

            <div className="tresc">

              { StarożytnośćVisible ? <Starozytnosc/>: null}
              { NowożytnośćVisible ? <Nowożytność/>: null}
              { WspółczesnośćVisible ? <Współczesność/>: null}
              { ŚredniowieczeVisible ? <Średniowiecze/>: null}
            </div>

          </div>
          <div className="opakowanie-timeline">
            <label htmlFor="os-czasu"> Oś czasu europy</label>
              <input type="range" name="" id="os-czasu" min={-800} max={2025}  onChange={ValueChangeHandler}/>
          </div>

        </div>
        {/* <div className="panel2">

        </div> */}
      </motion.div>

        </motion.div>
          )}
      </AnimatePresence>
      <AnimatePresence>
      {isCloseButtonVisible && (
        <CloseButton
        setEuropa={setEuropa} 
        Europa={Europa} 
        setEuropeNews={setEuropeNews} 
        setCloseButtonVisible={setCloseButtonVisible}
        />)}
      </AnimatePresence>
      </>
  )
}

export default Europe