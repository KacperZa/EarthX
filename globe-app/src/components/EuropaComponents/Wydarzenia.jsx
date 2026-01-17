import React, { useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { v4 as uuid4 } from 'uuid'

import CloseButton from '../CloseButton'
import './wydarzenia.css'
import Karta from './Karta'
import chrzescijanstwo from './WydarzeniaImg/chrzescijanstwo.jpg'
import demokracja from './WydarzeniaImg/demokracja.png'
import drugaWojna from './WydarzeniaImg/druga_wojna.jpg'
import pierwszaWojna from './WydarzeniaImg/pierwsza_wojna.jpg'
import pismo from './WydarzeniaImg/pismo.png'
import rewolucjaPrzemyslowa from './WydarzeniaImg/rewolucja_przemyslowa.jpg'
import rewolucja from './WydarzeniaImg/rewolucja.jpg'
import uniwersytet from './WydarzeniaImg/uniwersytet.jpg'
import upadekCesarstwa from './WydarzeniaImg/upadek_cesarstwa.jpg'
import wielkiKryzys from './WydarzeniaImg/wielki_kryzys.jpg'
import wielkieOdkrycia from './WydarzeniaImg/wielkie_odkrycia.jpg'
import wyprawy from './WydarzeniaImg/wyprawy.jpg'
import zimnaWojna from './WydarzeniaImg/zimna_wojna.jpg'

const Wydarzenia = ({setWydarzeniaButtonVisible, isWydarzeniaVisible, setEuropeNews, setCloseButtonVisible, setWydarzeniaVisible, isCloseButtonVisible, setEuropa, Europa}) => {

  const [wydarzenia, setWydarzenia] = useState([
    {
      title: "Narodziny Chrześcijaństwa",
      text: "Chrześcijaństwo narodziło się na terenie Imperium Rzymskiego jako religia prześladowana. Jego nauki opierały się na miłości bliźniego, równości ludzi wobec Boga i nadziei na życie wieczne. Chrześcijaństwo ukształtowało kulturę, moralność i system wartości Europy na kolejne stulecia.",
      img: chrzescijanstwo
    },
        {
      title: "Wynalezienie pisma",
      text: "Wynalezienie pisma w Mezopotamii było jednym z najważniejszych momentów w dziejach ludzkości. Dzięki pismu ludzie mogli zapisywać prawa, umowy handlowe, wierzenia religijne oraz ważne wydarzenia. Pozwoliło to na sprawne zarządzanie państwem i przekazywanie wiedzy kolejnym pokoleniom. Od tego momentu możliwe stało się badanie historii na podstawie źródeł pisanych, a nie tylko domysłów archeologicznych.",
      img: pismo
    },
        {
      title: "Powstanie demokracji ateńskiej",
      text: "W Atenach wykształcił się system, w którym wolni obywatele mieli prawo brać udział w zgromadzeniach ludowych i podejmować decyzje dotyczące państwa. Choć demokracja ta nie obejmowała kobiet, niewolników i cudzoziemców, była przełomowa. Po raz pierwszy w historii władza nie należała wyłącznie do króla lub elity. Idee demokracji ateńskiej stały się fundamentem nowoczesnych systemów politycznych.",
      img: demokracja
    },
    {
      title: "Upadek Cesarstwa Zachodniorzymskiego",
      text: "Upadek cesarstwa był wynikiem kryzysu gospodarczego, politycznego i najazdów ludów barbarzyńskich. Zanikła sprawna administracja, handel i bezpieczeństwo. Europa Zachodnia weszła w okres rozdrobnienia politycznego. Wydarzenie to symbolicznie kończy epokę starożytności i rozpoczyna średniowiecze.",
      img: upadekCesarstwa
    },
    {
      title: "Wyprawy krzyżowe", //SREDNIOWIECZE
      text: "Krucjaty były serią wypraw zbrojnych organizowanych przez chrześcijan w celu odzyskania Jerozolimy z rąk muzułmanów. Motywowane były religijnie, ale także politycznie i ekonomicznie. Choć militarnie często kończyły się porażką, doprowadziły do rozwoju handlu, wymiany kulturowej oraz poznania nowych towarów i idei. Jednocześnie przyniosły ogromne cierpienie i zniszczenia.",
      img: wyprawy
    },
    {
      title: "Powstanie uniwersytetów",
      text: "Pierwsze uniwersytety powstały jako centra nauki i dyskusji intelektualnej. Kształcono tam duchownych, prawników i lekarzy. Nauczanie opierało się na filozofii i logice, a wiedza była systematyzowana. Uniwersytety stały się fundamentem rozwoju nauki w Europie.",
      img: uniwersytet
    },
    {
      title: "Wielkie odkrycia geograficzne",
      text: "Europejczycy rozpoczęli dalekie wyprawy morskie w poszukiwaniu nowych dróg handlowych. Doprowadziło to do odkrycia Ameryki i opłynięcia Ziemi. Odkrycia te zmieniły gospodarkę świata, zapoczątkowały kolonializm i doprowadziły do podporządkowania oraz wyniszczenia wielu ludów tubylczych. Europa stała się centrum światowej polityki i handlu.",
      img: wielkieOdkrycia
    },
    {
      title: "Rewolucja francuska",
      text: "Rewolucja francuska była buntem społeczeństwa przeciwko nierównościom i władzy absolutnej króla. Zniesiono przywileje stanowe i ogłoszono prawa człowieka i obywatela. Choć rewolucja doprowadziła do chaosu i terroru, jej idee wpłynęły na rozwój demokracji i nowoczesnych państw na całym świecie.",
      img: rewolucja
    },
    {
      title: "Rewolucja przemysłowa",
      text: "Wprowadzenie maszyn i fabryk radykalnie zmieniło produkcję i życie codzienne. Ludzie masowo przenosili się do miast, powstała klasa robotnicza. Warunki pracy były ciężkie, co prowadziło do protestów i narodzin ruchów robotniczych. Rewolucja przemysłowa przyspieszyła rozwój cywilizacji, ale pogłębiła nierówności społeczne.",
      img: rewolucjaPrzemyslowa
    },
    {
      title: "I wojna światowa",
      text: "Wojna objęła większość państw Europy i wykorzystała nowoczesną broń, co doprowadziło do ogromnych strat ludzkich. Załamał się dawny porządek polityczny, a wielkie imperia przestały istnieć. Konflikt pozostawił Europę zniszczoną i pełną napięć, które nie zostały rozwiązane.",
      img: pierwszaWojna
    },
    {
      title: "Wielki kryzys gospodarczy",
      text: "Krach giełdowy w USA spowodował globalny kryzys. Miliony ludzi straciły pracę, oszczędności i poczucie bezpieczeństwa. Państwa nie radziły sobie z problemami społecznymi, co sprzyjało wzrostowi poparcia dla radykalnych ideologii i dyktatur.",
      img: wielkiKryzys
    },
    {
      title: "II wojna światowa",
      text: "II wojna światowa objęła niemal cały świat i pochłonęła dziesiątki milionów ofiar. Naziści dokonali planowej zagłady Żydów i innych grup. Wojna zakończyła się klęską Niemiec i Japonii oraz całkowitą zmianą układu sił politycznych. Europa była zrujnowana, a świat podzielony na nowe strefy wpływów.",
      img: drugaWojna
    },
    {
      title: "Zimna wojna",
      text: "Upadek muru berlińskiego i rozpad ZSRR zakończyły epokę zimnej wojny. Kraje Europy Środkowo-Wschodniej odzyskały suwerenność i rozpoczęły proces przemian politycznych i gospodarczych. Świat wszedł w nowy etap globalnych powiązań.",
      img: zimnaWojna
    },
    
  ])
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
            {wydarzenia.map((wydarzenia) =>{
              return (
                <Karta 
                key={uuid4()}
                title={wydarzenia.title}
                text={wydarzenia.text}
                imgSrc={wydarzenia.img}
                />
              )
            })}
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