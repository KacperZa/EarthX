import React, { useState } from 'react'
import './continent2.css'
import { motion, AnimatePresence, delay, transform } from 'framer-motion'



import FunctionalButton from '../FunctionalButton'
import FallingText from '../FallingText/FallingText'
import BlurText from '../BlurText/BlurText'

import EpokaComponent from './EuropaEpoki/EpokaComponent'
import DuzyObrazek from './EuropaEpoki/DuzyObrazek'
import EpokaStartPage from './EuropaEpoki/EpokaStartPage'
import Wydarzenia from './Wydarzenia'
const Europe = ({selectedContinent, worldData, style, setEuropa, Europa}) => {
  
  

  const [EuropeNews, setEuropeNews] = useState(false)
  const [Tytul, setTytul] = useState(true)
  const [isCloseButtonVisible, setCloseButtonVisible] = useState(false)
  const [isWydarzeniaButtonVisible, setWydarzeniaButtonVisible] = useState(false)

  const [isWydarzeniaVisible, setWydarzeniaVisible] = useState(false)

  const [open, setOpen] = useState(false)

  const content = worldData[selectedContinent]

  const Epoka = {
    STAROZYTNOSC: "Starozytnosc",
    NOWOZYTNOSC: "Nowozytnosc",
    SREDNIOWIECZE: "Sredniowiecze",
    WSPOLCZESNOSC: "Wspolczesnosc",
    BRAK: "Brak"
  };

  const [WybranaEpoka, setWybranaEpoka] = useState(Epoka.BRAK)

  
  const ZdjęciaStarozytnosc = content["Starożytność"]["img"]
    .reduce((acc, item) => {
      acc[item.id] = item.id;
      return acc;
    }, {});
  
  const [WybraneZdjecieStarozytnosc, setWybraneZdjecieStarozytnosc] = useState(ZdjęciaStarozytnosc.BRAK)

  const ZdjęciaSredniowiecze = content["Średniowiecze"]["img"]
    .reduce((acc, item) => {
      acc[item.id] = item.id;
      return acc;
    }, {});

  const [WybraneZdjecieSredniowiecze, setWybraneZdjecieSredniowiecze] = useState(ZdjęciaSredniowiecze.BRAK)

  const ZdjęciaNowozytnosc = content["Nowożytność"]["img"]
    .reduce((acc, item) => {
      acc[item.id] = item.id;
      return acc;
    }, {});

  const [WybraneZdjecieNowozytnosc, setWybraneZdjecieNowozytnosc] = useState(ZdjęciaNowozytnosc.BRAK)

  const ZdjęciaWspolczesnosc = content["Współczesność"]["img"]
    .reduce((acc, item) => {
      acc[item.id] = item.id;
      return acc;
    }, {});

  const [WybraneZdjecieWspolczesnosc, setWybraneZdjecieWspolczesnosc] = useState(ZdjęciaWspolczesnosc.BRAK);

  const [isButtonImgVisible, setButtonImgVisible] = useState(false);
  const [AktualnaEpoka, setAktualnaEpoka] = useState("Starożytność");
  const [AktualnyRok, setAktualnyRok] = useState("")
  const [Data, setData] = useState("")

  // let Data;

  const ValueChangeHandler = (e) =>{
    const Rok = Number(e.target.value);
    setData(Rok);
    
    if (Rok < 0){
      setData(Math.abs(Rok) + " p.n.e.");
    }
    else{
      setData(Rok + " n.e.");
    }

      if (Rok >= -800 && Rok < 476) {
        setWybranaEpoka(Epoka.STAROZYTNOSC)
        setAktualnaEpoka("Starożytność")
      }
      if (Rok >= 476 && Rok < 1492) {
        setWybranaEpoka(Epoka.SREDNIOWIECZE)
        setAktualnaEpoka("Średniowiecze")
      }
      if (Rok >= 1492 && Rok < 1914) {
        setWybranaEpoka(Epoka.NOWOZYTNOSC)
        setAktualnaEpoka("Nowożytność")
      }
      if (Rok >= 1914) {
        setWybranaEpoka(Epoka.WSPOLCZESNOSC)
        setAktualnaEpoka("Współczesność")
      }
      
      setAktualnyRok(Data)
      
}

  // const sredniowiecze = content["Starożytność"];
  const obrazkiStarożytność = content["Starożytność"]["img"]; 
  const obrazkiŚredniowiecze = content["Średniowiecze"]["img"]; 
  const obrazkiNowożytność = content["Nowożytność"]["img"]; 
  const obrazkiWspółczesność = content["Współczesność"]["img"]; 
  
  const FunkcjaZamykania = () =>{
      setEuropeNews(false),
      setCloseButtonVisible(false),
      setWydarzeniaButtonVisible(false),
      setWydarzeniaVisible(false)
      setTimeout(() => {
        setEuropa(false)
      }, 300);
  }
  const FunkcjaZmiany = () =>{
    setWydarzeniaVisible(prev => !prev); 
    setEuropeNews(prev => !prev); 
  }
  

  return (
    <>
      <div className="menu">
        <AnimatePresence>
        {isCloseButtonVisible && (
          <FunctionalButton funkcja={FunkcjaZamykania}>X</FunctionalButton>
          )}
        {isWydarzeniaButtonVisible && (
          <FunctionalButton funkcja={FunkcjaZmiany}>⮂</FunctionalButton>
          )}
        </AnimatePresence>
        
      </div>
    

    

      <motion.div className="opakowanie-primary">

    <AnimatePresence>      
      { Tytul && (
        <motion.div
        key="europe-card"
        initial = {{opacity: 0, y: -1000}}
        animate= {{opacity:1, y: 0}}
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

        {/* Obrazki na pierwszym panelu  */}
        {content["startImg"]
        .map(item => (
          <motion.img key={item.id} src={item.src} alt={item.id} />
        ))}

        </motion.div>
        <motion.div id="text"
        drag
        dragConstraints={{top:0, left:0, right:0, bottom:0}}>
            <h1 id="title">{content["name"]}</h1>
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
        initial = {{opacity: 0, y: 1000}}
        animate= {{opacity:1, y: 0}}
        exit = {{opacity:0, y: 1000}}
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
          {/* <SplitText
              text= {content["startText"]}
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
              /> */}
              <BlurText
                text={content["startText"]}
                delay={200}
                animateBy="words"
                direction="top"
                className="poczatek"
            />

              {/* <FallingText items={content["startNames"]}/> */}
        </div>

        <div className="panel2" id='panel-timeline'>
          <div className="opakowanie-tresc">

            <div className="tresc">
              {/* Wyświetlanie Epok w zależności od wartości input range  */}
              <AnimatePresence>
              {AktualnaEpoka === null ? <EpokaStartPage key="start" />: null}
              {AktualnaEpoka === "Starożytność" ? <EpokaComponent  key="Starożytność" data={content[AktualnaEpoka]} WybieranieZdjecia={setWybraneZdjecieStarozytnosc} Zdjęcia={ZdjęciaStarozytnosc}/>: null}
              {AktualnaEpoka === "Średniowiecze" ? <EpokaComponent key="Średniowiecze" data={content[AktualnaEpoka]} WybieranieZdjecia={setWybraneZdjecieSredniowiecze} Zdjęcia={ZdjęciaSredniowiecze}/>: null}
              {AktualnaEpoka === "Nowożytność" ? <EpokaComponent  key="Nowożytność" data={content[AktualnaEpoka]} WybieranieZdjecia={setWybraneZdjecieNowozytnosc} Zdjęcia={ZdjęciaNowozytnosc}/>: null}
              {AktualnaEpoka === "Współczesność" ? <EpokaComponent key="Współczesność" data={content[AktualnaEpoka]} WybieranieZdjecia={setWybraneZdjecieWspolczesnosc} Zdjęcia={ZdjęciaWspolczesnosc}/>: null}
            </AnimatePresence>
            </div>
          </div>
          <div className="opakowanie-timeline">
            <label htmlFor="os-czasu"> Oś czasu, rok: {AktualnyRok} </label>
              <input type="range" name="" id="os-czasu" min={-800} max={2026}  onChange={ValueChangeHandler}/>
          </div>

        </div>
      </motion.div>
        </motion.div>
          )}

      {/* Powiększanie obrazków na Starożytności */} 
      {obrazkiStarożytność
      .filter(item => ZdjęciaStarozytnosc[item.id] === WybraneZdjecieStarozytnosc)
      .map(item => (
        <DuzyObrazek key={item.id} FunkcjaZamykania ={() => {setWybraneZdjecieStarozytnosc(ZdjęciaStarozytnosc.BRAK)}} source={item.src} opis={item.opis}/> 
      
      ))}

      {/* Powiększanie obrazków na Średniowieczu */} 
      {obrazkiŚredniowiecze
      .filter(item => ZdjęciaSredniowiecze[item.id] === WybraneZdjecieSredniowiecze)
      .map(item => (
        <DuzyObrazek key={item.id} FunkcjaZamykania ={() => {setWybraneZdjecieSredniowiecze(ZdjęciaSredniowiecze.BRAK)}} source={item.src} opis={item.opis}/> 
        
      ))}

      {/* Powiększanie obrazków na Nowożytności */} 
      {obrazkiNowożytność
      .filter(item => ZdjęciaNowozytnosc[item.id] === WybraneZdjecieNowozytnosc)
      .map(item => (
        <DuzyObrazek key={item.id} FunkcjaZamykania ={() => {setWybraneZdjecieNowozytnosc(ZdjęciaNowozytnosc.BRAK)}} source={item.src} opis={item.opis}/> 
      ))}

      {/* Powiększanie obrazków na Współczesności */} 
      {obrazkiWspółczesność
      .filter(item => ZdjęciaWspolczesnosc[item.id] === WybraneZdjecieWspolczesnosc)
      .map(item => (
        <DuzyObrazek key={item.id} FunkcjaZamykania ={() => {setWybraneZdjecieWspolczesnosc(ZdjęciaWspolczesnosc.BRAK)}} source={item.src} opis={item.opis}/> 
      ))}

      {/* Wydarzenia  */}
        {isWydarzeniaVisible ? <Wydarzenia key="wydarzenia" wydarzeniaData={content["Wydarzenia"]} setWydarzeniaButtonVisible={setWydarzeniaButtonVisible} setEuropeNews={setEuropeNews} setCloseButtonVisible={setCloseButtonVisible} isWydarzeniaVisible={isWydarzeniaVisible} setWydarzeniaVisible={setWydarzeniaVisible} isCloseButtonVisible={isCloseButtonVisible} isWydarzeniaButtonVisible={isWydarzeniaButtonVisible} setEuropa={setEuropa} />: null}
    </AnimatePresence>

      </motion.div> 
      </>
  )
}

export default Europe