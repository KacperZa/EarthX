import React, { useState } from 'react'
import './continent2.css'
import { motion, AnimatePresence, delay, transform } from 'framer-motion'

//  Zdjęcia do starożytności 
import grecja1 from './img/grecja1.jpg'
import grecja2 from './img/grecja2.jpg'
import grecja3 from './img/grecja4.jpeg'
import grecja4 from './img/grecja5.jpg'
import grecja5 from './img/grecja6.jpg'
import rzym1 from './img/rzym1.jpg'
import rzym2 from './img/rzym2.jpg'
import rzym3 from './img/rzym4.jpg'
import ateny from './img/ateny.jpg'

// Zdjęcia do średniowiecza
import dzuma from "./SredniowieczeImg/dzuma.jpg"
import husaria from "./SredniowieczeImg/husaria.jpg"
import kosciol from "./SredniowieczeImg/kosciol.jpg"
import miasta from "./SredniowieczeImg/miasta.jpg"
import mieszczanie from "./SredniowieczeImg/mieszczanie.jpg"
import bolonia from "./SredniowieczeImg/bolonia.jpg"
import ogrodzieniec from "./SredniowieczeImg/ogrodzieniec.jpg"
import wies from "./SredniowieczeImg/wies.jpg"
import rycerz from "./SredniowieczeImg/zbroja_rycerza.jpg"

// Zdjęcia do Nowożytności 
import czlowiek from './NowozytnoscImg/czlowiek.jpg'
import rozwojDruku from './NowozytnoscImg/rozwojdruku.jpg'
import kopernik from './NowozytnoscImg/kopernik.jpg'
import luter from './NowozytnoscImg/luter.jpg'
import magellan from './NowozytnoscImg/magellan.jpg'
import michalAniol from './NowozytnoscImg/michalaniol.jpeg'
import odkrycieAmeryki from './NowozytnoscImg/odkrycie_ameryki.jpg'
import staraMapa from './NowozytnoscImg/stara_mapa.jpg'
import upadekRzymu from "./NowozytnoscImg/upadek_rzymu.jpg"

// Zdjęcia do Współczesności
import czolgi from './WspolczesnoscImg/czolgi.jpg'
import drugaWojna from './WspolczesnoscImg/drugawojna.jpg'
import euro from './WspolczesnoscImg/euro.jpeg'
import flaga from './WspolczesnoscImg/flaga.jpeg'
import komunizm from './WspolczesnoscImg/komunizm.jpg'
import murBerlinski from './WspolczesnoscImg/murberlinski.jpg'
import pierwszaWojna from './WspolczesnoscImg/pierwszawojna.jpg'
import zolnierze from './WspolczesnoscImg/pierwszawojnazolnierze.jpg'
import unia from './WspolczesnoscImg/unia.jpg'

import chorwacja from './StartImg/chorwacja.jpg'
import hiszpania from './StartImg/hiszpania.png'
import islandia from './StartImg/islandia.png'

import CloseButton from '../CloseButton'
import SplitText from '../SplitText'

import Starozytnosc from './EuropaEpoki/Starozytnosc'
import Średniowiecze from './EuropaEpoki/Średniowiecze'
import Nowożytność from './EuropaEpoki/Nowożytność'
import Współczesność from './EuropaEpoki/Współczesność'
import DuzyObrazek from './EuropaEpoki/DuzyObrazek'
import EpokaStartPage from './EuropaEpoki/EpokaStartPage'
import Wydarzenia from './Wydarzenia'
const Europe = ({style, setEuropa, Europa}) => {

  const [EuropeNews, setEuropeNews] = useState(false)
  const [Tytul, setTytul] = useState(true)
  const [isCloseButtonVisible, setCloseButtonVisible] = useState(false)
  const [isWydarzeniaButtonVisible, setWydarzeniaButtonVisible] = useState(false)

  const [isWydarzeniaVisible, setWydarzeniaVisible] = useState(false)

  const [open, setOpen] = useState(false)

  
  
  const Epoka = {
    STAROZYTNOSC: "Starozytnosc",
    NOWOZYTNOSC: "Nowozytnosc",
    SREDNIOWIECZE: "Sredniowiecze",
    WSPOLCZESNOSC: "Wspolczesnosc",
    BRAK: "Brak"
  };

  const [WybranaEpoka, setWybranaEpoka] = useState(Epoka.BRAK)
  
  const ZdjęciaStarozytnosc = {
    RZYM1: "rzym1",
    RZYM2: "rzym2",
    RZYM3: "rzym3",
    GRECJA1: "grecja1",
    GRECJA2: "grecja2",
    GRECJA3: "grecja3",
    GRECJA4: "grecja4",
    GRECJA5: "grecja5",
    ATENY: "ateny",
    BRAK: "brak"
  }
  
  const [WybraneZdjecieStarozytnosc, setWybraneZdjecieStarozytnosc] = useState(ZdjęciaStarozytnosc.BRAK)

  const ZdjęciaSredniowiecze = {
    DZUMA: "dzuma",
    HUSARIA: "husaria",
    KOSCIOL: "kosciol",
    MIASTA: "miasta",
    MIESZCZANIE: "mieszczanie",
    BOLONIA: "bolonia",
    OGRODZIENIEC: "ogrodzieniec",
    WIES: "wies",
    RYCERZ: "rycerz",
    BRAK: "brak"
  }

  const [WybraneZdjecieSredniowiecze, setWybraneZdjecieSredniowiecze] = useState(ZdjęciaSredniowiecze.BRAK)

  const ZdjęciaNowozytnosc = {
    CZLOWIEK: "czlowiek",
    ROZWOJDRUKU: "rozwojDruku",
    KOPERNIK: "kopernik",
    LUTER: "luter", 
    MAGELLAN: "magellan",
    MICHALANIOL: "michalAniol",
    ODKRYCIEAMERYKI: "odkrycieAmeryki",
    STARAMAPA: "staraMapa",
    UPADEKRZYMU: "upadekRzymu",
    BRAK: "brak"
  }

  const [WybraneZdjecieNowozytnosc, setWybraneZdjecieNowozytnosc] = useState(ZdjęciaNowozytnosc.BRAK)

  const ZdjęciaWspolczesnosc = {
    CZOLGI: "czolgi",
    DRUGAWOJNA: "drugaWojna",
    EURO: "euro",
    FLAGA: "flaga",
    KOMUNIZM: "komunizm",
    MURBERLINSKI: "murBerlinski",
    PIERWSZAWOJNA: "pierwszaWojna",
    ZOLNIERZE: "zolnierze",
    UNIA: "unia",
    BRAK: "brak"
  }

  const [WybraneZdjecieWspolczesnosc, setWybraneZdjecieWspolczesnosc] = useState(ZdjęciaWspolczesnosc.BRAK)

  const [isButtonImgVisible, setButtonImgVisible] = useState(false)

  const ValueChangeHandler = (e) =>{
    const Rok = Number(e.target.value);

  
      if (Rok < 476) {
        setWybranaEpoka(Epoka.STAROZYTNOSC)
      }
      if (Rok >= 476 && Rok < 1492) {
        setWybranaEpoka(Epoka.SREDNIOWIECZE)
      }
      if (Rok >= 1492 && Rok < 1914) {
        setWybranaEpoka(Epoka.NOWOZYTNOSC)
      }
      if (Rok >= 1914) {
        setWybranaEpoka(Epoka.WSPOLCZESNOSC)

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
          transition={{duration: 0.5}} onClick={() => {setEuropeNews(true); setTytul(false); setCloseButtonVisible(true); setWydarzeniaButtonVisible(true)}}>Czytaj dalej</motion.button>
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

        {/* <motion.div className="panel2">
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
        </motion.div> */}

        <div className="panel2" id='panel-timeline'>
          <div className="opakowanie-tresc">

            <div className="tresc">
              {WybranaEpoka === Epoka.BRAK ? <EpokaStartPage/>: null}
              {WybranaEpoka === Epoka.STAROZYTNOSC ? <Starozytnosc WybieranieZdjeciaStarozytnosc={setWybraneZdjecieStarozytnosc} ZdjęciaStarozytnosc={ZdjęciaStarozytnosc}/>: null}
              {WybranaEpoka === Epoka.SREDNIOWIECZE ? <Średniowiecze WybieranieZdjeciaSredniowiecze={setWybraneZdjecieSredniowiecze} ZdjęciaSredniowiecze={ZdjęciaSredniowiecze}/>: null}
              {WybranaEpoka === Epoka.NOWOZYTNOSC ? <Nowożytność WybieranieZdjeciaNowozytnosc={setWybraneZdjecieNowozytnosc} ZdjęciaNowozytnosc={ZdjęciaNowozytnosc}/>: null}
              {WybranaEpoka === Epoka.WSPOLCZESNOSC ? <Współczesność WybieranieZdjeciaWspolczesnosc={setWybraneZdjecieWspolczesnosc} ZdjęciaWspolczesnosc={ZdjęciaWspolczesnosc}/>: null}
            </div>
          </div>
          <div className="opakowanie-timeline">
            <label htmlFor="os-czasu"> Oś czasu europy</label>
              <input type="range" name="" id="os-czasu" min={-800} max={2025}  onChange={ValueChangeHandler}/>
          </div>

        </div>
      </motion.div>
        </motion.div>
          )}
      {/* STAROZYTNOSC */} 

      {WybraneZdjecieStarozytnosc === ZdjęciaStarozytnosc.RZYM1 ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={rzym1}/> : null}
      {WybraneZdjecieStarozytnosc === ZdjęciaStarozytnosc.RZYM2 ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={rzym2}/> : null}
      {WybraneZdjecieStarozytnosc === ZdjęciaStarozytnosc.RZYM3 ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={rzym3}/> : null}
      {WybraneZdjecieStarozytnosc === ZdjęciaStarozytnosc.GRECJA1 ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={grecja1}/> : null}
      {WybraneZdjecieStarozytnosc === ZdjęciaStarozytnosc.GRECJA2 ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={grecja2}/> : null}
      {WybraneZdjecieStarozytnosc === ZdjęciaStarozytnosc.GRECJA3 ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={grecja3}/> : null}
      {WybraneZdjecieStarozytnosc === ZdjęciaStarozytnosc.GRECJA4 ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={grecja4}/> : null}
      {WybraneZdjecieStarozytnosc === ZdjęciaStarozytnosc.GRECJA5 ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={grecja5}/> : null}
      {WybraneZdjecieStarozytnosc === ZdjęciaStarozytnosc.ATENY ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={ateny}/> : null}

      {/* SREDNIOWIECZE */}
      {WybraneZdjecieSredniowiecze === ZdjęciaSredniowiecze.DZUMA ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaSredniowiecze.BRAK)}} source={dzuma}/> : null}
      {WybraneZdjecieSredniowiecze === ZdjęciaSredniowiecze.HUSARIA ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaSredniowiecze.BRAK)}} source={husaria}/> : null}
      {WybraneZdjecieSredniowiecze === ZdjęciaSredniowiecze.KOSCIOL ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaSredniowiecze.BRAK)}} source={kosciol}/> : null}
      {WybraneZdjecieSredniowiecze === ZdjęciaSredniowiecze.MIASTA ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaSredniowiecze.BRAK)}} source={miasta}/> : null}
      {WybraneZdjecieSredniowiecze === ZdjęciaSredniowiecze.MIESZCZANIE ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaSredniowiecze.BRAK)}} source={mieszczanie}/> : null}
      {WybraneZdjecieSredniowiecze === ZdjęciaSredniowiecze.BOLONIA ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaSredniowiecze.BRAK)}} source={bolonia}/> : null}
      {WybraneZdjecieSredniowiecze === ZdjęciaSredniowiecze.OGRODZIENIEC ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaSredniowiecze.BRAK)}} source={ogrodzieniec}/> : null}
      {WybraneZdjecieSredniowiecze === ZdjęciaSredniowiecze.WIES ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaSredniowiecze.BRAK)}} source={wies}/> : null}
      {WybraneZdjecieSredniowiecze === ZdjęciaSredniowiecze.RYCERZ ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaStarozytnosc.BRAK)}} source={rycerz}/> : null}
     
      {/* NOWOŻYTNOŚĆ */}
      {WybraneZdjecieNowozytnosc === ZdjęciaNowozytnosc.CZLOWIEK ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaNowozytnosc.BRAK)}} source={czlowiek}/> : null}
      {WybraneZdjecieNowozytnosc === ZdjęciaNowozytnosc.ROZWOJDRUKU ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaNowozytnosc.BRAK)}} source={rozwojDruku}/> : null}
      {WybraneZdjecieNowozytnosc === ZdjęciaNowozytnosc.KOPERNIK ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaNowozytnosc.BRAK)}} source={kopernik}/> : null}
      {WybraneZdjecieNowozytnosc === ZdjęciaNowozytnosc.LUTER ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaNowozytnosc.BRAK)}} source={luter}/> : null}
      {WybraneZdjecieNowozytnosc === ZdjęciaNowozytnosc.MAGELLAN ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaNowozytnosc.BRAK)}} source={magellan}/> : null}
      {WybraneZdjecieNowozytnosc === ZdjęciaNowozytnosc.MICHALANIOL ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaNowozytnosc.BRAK)}} source={michalAniol}/> : null}
      {WybraneZdjecieNowozytnosc === ZdjęciaNowozytnosc.ODKRYCIEAMERYKI ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaNowozytnosc.BRAK)}} source={odkrycieAmeryki}/> : null}
      {WybraneZdjecieNowozytnosc === ZdjęciaNowozytnosc.STARAMAPA ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaNowozytnosc.BRAK)}} source={staraMapa}/> : null}
      {WybraneZdjecieNowozytnosc === ZdjęciaNowozytnosc.UPADEKRZYMU ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={upadekRzymu}/> : null}
      
      {/* WSPOLCZESNOSC */}
      {WybraneZdjecieWspolczesnosc === ZdjęciaWspolczesnosc.CZOLGI ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaWspolczesnosc.BRAK)}} source={czolgi}/> : null}
      {WybraneZdjecieWspolczesnosc === ZdjęciaWspolczesnosc.DRUGAWOJNA ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaWspolczesnosc.BRAK)}} source={drugaWojna}/> : null}
      {WybraneZdjecieWspolczesnosc === ZdjęciaWspolczesnosc.EURO ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaWspolczesnosc.BRAK)}} source={euro}/> : null}
      {WybraneZdjecieWspolczesnosc === ZdjęciaWspolczesnosc.FLAGA ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaWspolczesnosc.BRAK)}} source={flaga}/> : null}
      {WybraneZdjecieWspolczesnosc === ZdjęciaWspolczesnosc.KOMUNIZM ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaWspolczesnosc.BRAK)}} source={komunizm}/> : null}
      {WybraneZdjecieWspolczesnosc === ZdjęciaWspolczesnosc.MURBERLINSKI ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaWspolczesnosc.BRAK)}} source={murBerlinski}/> : null}
      {WybraneZdjecieWspolczesnosc === ZdjęciaWspolczesnosc.PIERWSZAWOJNA ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaWspolczesnosc.BRAK)}} source={pierwszaWojna}/> : null}
      {WybraneZdjecieWspolczesnosc === ZdjęciaWspolczesnosc.ZOLNIERZE ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaWspolczesnosc.BRAK)}} source={zolnierze}/> : null}
      {WybraneZdjecieWspolczesnosc === ZdjęciaWspolczesnosc.UNIA ? <DuzyObrazek FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaStarozytnosc.BRAK)}} source={unia}/> : null}


      {isWydarzeniaVisible ? <Wydarzenia setWydarzeniaButtonVisible={setCloseButtonVisible} setEuropeNews={setEuropeNews} setCloseButtonVisible={setCloseButtonVisible} isWydarzeniaVisible={isWydarzeniaVisible} setWydarzeniaVisible={setWydarzeniaVisible} isCloseButtonVisible={isCloseButtonVisible} setEuropa={setEuropa} Europa={Europa} />: null}

      {isWydarzeniaButtonVisible ? 
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
      onClick={() => { setWydarzeniaVisible(true); setEuropeNews(false); setCloseButtonVisible(true); setWydarzeniaButtonVisible(false);}}
      >⮂</motion.button> : null}

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