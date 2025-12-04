import React, { useState } from 'react'
import './continent.css'
import { motion, AnimatePresence, delay } from 'framer-motion'
import ateny from '../ateny.jpg'
import CircularGallery from './CircularGallery'
import grecja from '../grecja.jpg'
import rzym2 from '../rzym2.jpg'
import rzym from '../rzym.jpg'
import koloseum from '../koloseum.jpg'
import sokrates from '../sokrates.jpg'
import platon from '../platon.jpg'

const items = [
  {
    image: grecja,
    text: "Grecja"
  },
  {
    image: rzym,
    text: "Rzym",
  },
  {
    image: koloseum,
    text: "Koloseum"
  },
  {
    image: sokrates,
    text: "Sokrates"
  },
  {
    image: platon,
    text: "Platon"
  },
  {
    image: rzym2,
    text: "Rzym2"
  }
]

const Europe = ({style, setEuropa, Europa}) => {

  return (
    <>
      <AnimatePresence>
    {Europa && (
        <motion.div
        key="europe-card"
        initial = {{opacity: 0, scale: 0}} animate= {{opacity:1, scale:1}}
        exit = {{opacity: 0, scale: 0}}
        transition={{
          duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5},
      }} 
        style={style} className='card'>
        <div id="container">
          <div id="tekst">
            <h1 id="title">EUROPA</h1>

<p>
<div className='epoka'><h3>ANTYK</h3></div>
<h3>I. Fundamenty Świata (ok. 800 p.n.e. – 476 n.e.)</h3>

<motion.div initial = {{opacity: 0}} whileInView= {{opacity:1}} transition={{duration: 0.5, delay: 0.5}}>
  <section className='ateny'>
<div id="tekst-ateny">
Wszystko zaczęło się nad Morzem Śródziemnym. Europa Północna była wtedy lasem zamieszkanym przez plemiona, podczas gdy Południe budowało cywilizację. <br /> <hr />
Grecja – Wynalazcy Rozumu: To Grecy wymyślili, że światem rządzą prawa fizyki, a nie tylko kaprysy bogów. Dali Europie filozofię (Sokrates, Platon), teatr, olimpiady i – co najważniejsze – demokrację. To w Atenach narodziła się idea, że obywatele mogą decydować o losach państwa. <br /> <hr />
Rzym – Architekci Mocy: Rzymianie byli pragmatykami. Wzięli grecką kulturę i uzbroili ją w legiony oraz prawo.
Stworzyli koncepcję państwa jako machiny prawnej.
Zbudowali drogi, akwedukty i miasta od dzisiejszej Szkocji po Syrię.
Przyjęli Chrześcijaństwo, co w IV wieku n.e. zmieniło duchowe oblicze kontynentu na zawsze.
Koniec epoki: Upadek Rzymu (476 r.) pod naporem barbarzyńców to moment, gdy światło zgasło, a Europa musiała wymyślić się na nowo. <br />
</div>
<div id="zdjecie-ateny">
<img src={ateny} alt="ateny" id='ateny' style={{height:'300px', width: '500px'}} />
 <br /> <br />
</div>
{/* <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery items={items} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div> */}
</section>



</motion.div>




{/* II. ŚREDNIOWIECZE: Krzyż i Miecz (476 – 1453)
To nie były tylko „wieki ciemne”. To czas rodzenia się narodów, które znamy dzisiaj: Francji, Niemiec, Anglii, Polski.
Chrześcijańska Unitas: Kościół Katolicki stał się jedyną siłą spajającą rozbity kontynent. Łacina była językiem elit, a klasztory – strażnikami wiedzy.
Karol Wielki: W roku 800 po raz pierwszy od upadku Rzymu próbowano zjednoczyć Europę Zachodnią. Powstało Święte Cesarstwo Rzymskie – zalążek przyszłych Niemiec i Francji.
Wielka Schizma (1054): Tragiczne pęknięcie na Zachód (katolicki) i Wschód (prawosławny/bizantyjski). Ta linia podziału do dziś determinuje różnice między Europą Zachodnią a Rosją czy częścią Bałkanów.
Feudalizm: System, w którym władza opierała się na ziemi i lojalności wasala wobec seniora. To wtedy powstały zamki, etos rycerski i pierwsze uniwersytety (Bolonia, Paryż, Kraków).
III. NOWOŻYTNOŚĆ: Europa Podbija Świat (1492 – 1789)
Europa nagle się budzi. Następuje eksplozja energii, chciwości i geniuszu.
Renesans: Powrót do antycznego piękna i kult człowieka. Leonardo da Vinci i Michał Anioł zmieniają sztukę, a Gutenberg (druk) sprawia, że wiedza przestaje być elitarna.
Wielkie Odkrycia: Kolumb płynie do Ameryki, Vasco da Gama do Indii. Europa staje się centrum globalnego handlu. Zaczyna się era kolonializmu – Europa bogaci się kosztem innych kontynentów, budując imperia, nad którymi „słońce nie zachodzi”.
Reformacja: Marcin Luter w 1517 r. rozbija jedność Kościoła. Europa spływa krwią w wojnach religijnych (Wojna Trzydziestoletnia), co uczy ją (bardzo powoli) tolerancji i oddzielenia religii od państwa.
Oświecenie: Wiek Rozumu. Newton opisuje grawitację, Wolter walczy o wolność słowa. Rodzi się przekonanie, że nauka i postęp rozwiążą wszystkie problemy ludzkości.
IV. WIEK XIX: Maszyny i Narody (1789 – 1914)
To stulecie ukształtowało naszą codzienność.
Rewolucja Francuska (1789): Gilotyna ścina króla. Deklaracja Praw Człowieka i Obywatela głosi: Wolność, Równość, Braterstwo. Monarchie drżą w posadach, rodzi się nowoczesna republika.
Rewolucja Przemysłowa: Maszyna parowa zmienia wszystko. Chłopi stają się robotnikami, powstają wielkie zadymione miasta (Londyn, Manchester, Łódź). Rodzi się kapitalizm, a w odpowiedzi na wyzysk – socjalizm.
Wiosna Ludów i Nacjonalizm: Ludzie przestają czuć się poddanymi króla, a zaczynają czuć się Polakami, Włochami, Niemcami. Mapa Europy zmienia się – Włochy i Niemcy jednoczą się w potężne państwa.
V. WIEK XX: Czas Samobójstwa (1914 – 1945)
Europa, będąc u szczytu potęgi technologicznej, kieruje tę potęgę przeciwko sobie.
I Wojna Światowa: Upadają wielkie imperia (Austro-Węgry, Rosja Carska, Turcja Osmańska). Polska wraca na mapę. Ale miliony giną w okopach dla przesuwania linii frontu o kilkaset metrów.
Totalitaryzmy: Kryzys demokracji rodzi potwory. W Rosji powstaje komunizm (ZSRR), w Niemczech nazizm.
II Wojna Światowa: Apokalipsa. Holokaust, bombardowania dywanowe miast, śmierć 50 milionów ludzi. Europa traci status centrum świata na rzecz USA i ZSRR.
VI. ZIMNA WOJNA: Podzielony Kontynent (1945 – 1989)
Europa zostaje przecięta Żelazną Kurtyną.
Zachód: Odbudowuje się dzięki Planowi Marshalla, stawia na demokrację, kapitalizm i sojusz z USA (NATO).
Wschód: Trafia pod but Moskwy. Polska, Węgry, Czechy tracą suwerenność. Gospodarka centralnie planowana prowadzi do biedy i zacofania.
To czas napięcia atomowego, ale też czas, w którym na Zachodzie kiełkuje myśl: „Może zamiast walczyć, zacznijmy handlować?”.
VII. FINAŁ: Zjednoczenie i Unia Europejska (1989 – Dziś)
Ostatni akt tej historii to próba sklejenia rozdartego kontynentu.
Jesień Ludów (1989): Polacy (Solidarność) wybijają pierwszą cegłę z Muru Berlińskiego. Komunizm upada. Europa znów może oddychać oboma płucami.
Budowa Unii: Na Zachodzie proces ten trwał od lat 50. (od węgla i stali), ale po 1990 roku przyspiesza.
Powstaje Wspólny Rynek (towary jadą bez cła).
Wchodzi Euro (jedna waluta zamiast marek i franków).
Otwierają się granice (Schengen).
Wielkie Rozszerzenie (2004): To symboliczny koniec II wojny światowej. Polska i inne kraje dawnego bloku wschodniego wchodzą do struktur zachodnich.
Gdzie jesteśmy dzisiaj? Europa jest najbogatszym, najbezpieczniejszym i najbardziej wolnym miejscem do życia w historii ludzkości, ale demony nie śpią. Wojna wróciła (Ukraina), nacjonalizmy rosną w siłę, a kontynent starzeje się demograficznie. Unia Europejska to współczesna odpowiedź na tysiąclecia wojen – próba zastąpienia armat dyplomacją i handlem.*/}</p> 
          </div>

          <div id="przycisk">
          <motion.button id="close" whileHover={{
            scale:0.9,
            transition: {duration: 0.1}
            }}
          transition={{duration: 0.5}}
            onClick={() => {setEuropa(false)}}>X</motion.button>
          </div>
        </div>
        </motion.div>)}
      </AnimatePresence>
      </>
  )
}

export default Europe