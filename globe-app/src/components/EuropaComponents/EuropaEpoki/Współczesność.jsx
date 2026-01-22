// import React from 'react'

// import czolgi from '.././WspolczesnoscImg/czolgi.jpg'
// import drugaWojna from '.././WspolczesnoscImg/drugawojna.jpg'
// import euro from '.././WspolczesnoscImg/euro.jpeg'
// import flaga from '.././WspolczesnoscImg/flaga.jpeg'
// import komunizm from '.././WspolczesnoscImg/komunizm.jpg'
// import murBerlinski from '.././WspolczesnoscImg/murberlinski.jpg'
// import pierwszaWojna from '.././WspolczesnoscImg/pierwszawojna.jpg'
// import zolnierze from '.././WspolczesnoscImg/pierwszawojnazolnierze.jpg'
// import unia from '.././WspolczesnoscImg/unia.jpg'

//     import ObrazekAnimacja from './ObrazekAnimacja'
//     import { motion, AnimatePresence } from 'framer-motion'
    
//     const Współczesność = ({WybieranieZdjeciaWspolczesnosc, ZdjęciaWspolczesnosc}) => {

//       const parent = {
//         hidden: {},
//         visible: {
//           transition: {
//             staggerChildren: 0.15
//           }
//         }
//       }
//       return (
//         <>
//             <motion.div 
//             // key={"wspolczesnosc"}
//             className="tresc-tekst"
//             initial = {{ opacity: 0, x: -400}}
//             animate = {{opacity: 1, x:0}}
//             exit = {{ opacity: 0, x:40}}
//             transition={{
//               x: {duration: .8},
//               opacity: {duration: .8}
//             }}
//             >
//                 <div className='naglowek'> WSPÓŁCZESNOŚĆ</div>
//                 <p>
//                 Epoka współczesna to obecnie trwający okres historii, którego fundamentem były I i II wojna światowa. Konflikty te doprowadziły do upadku dawnych imperiów, ogromnych zniszczeń i śmierci milionów ludzi, a II wojna światowa dodatkowo ujawniła skalę zbrodni totalitarnych systemów. Po 1945 roku Europa została podzielona między dwa przeciwstawne bloki, z których wschodni opierał się na komunizmie i silnej kontroli państwa, a zachodni na demokracji i współpracy.</p>
              
//                 <p>Doświadczenia wojen stały się impulsem do poszukiwania trwałego pokoju, czego efektem było powstanie Unii Europejskiej jako wspólnoty mającej zapobiegać kolejnym konfliktom. Współczesność pozostaje więc epoką napięć, pamięci o dramatycznych wydarzeniach XX wieku oraz ciągłego dążenia do stabilności i porozumienia między państwami.</p>
//               </motion.div>
//               <motion.div className="tresc-zdjecia">
//                 <motion.div 
//                 className="column"
//                 variants={parent}
//                 initial="hidden"
//                 animate="visible">
//                 <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaWspolczesnosc(ZdjęciaWspolczesnosc.KOMUNIZM)}} key={5} source={komunizm}/>
//                   <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaWspolczesnosc(ZdjęciaWspolczesnosc.DRUGAWOJNA)}}key={2} source={drugaWojna} />
//                 <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaWspolczesnosc(ZdjęciaWspolczesnosc.MURBERLINSKI)}} key={6} source={murBerlinski}/>
//                 </motion.div>

//                 <motion.div
//                 className="column"
//                 variants={parent}
//                 initial="hidden"
//                 animate="visible"
//                 >
//                 <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaWspolczesnosc(ZdjęciaWspolczesnosc.PIERWSZAWOJNA)}} key={7} source={pierwszaWojna}/>
//                   <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaWspolczesnosc(ZdjęciaWspolczesnosc.CZOLGI)}} key={1} source={czolgi} />
//                   <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaWspolczesnosc(ZdjęciaWspolczesnosc.EURO)}} key={3} source={euro}/>
//                 </motion.div>

//                 <motion.div
//                 className="column"
//                 variants={parent}
//                 initial="hidden"
//                 animate="visible"
//                 >
//                   <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaWspolczesnosc(ZdjęciaWspolczesnosc.ZOLNIERZE)}} key={8} source={zolnierze}/>
//                   <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaWspolczesnosc(ZdjęciaWspolczesnosc.FLAGA)}} key={4} source={flaga}/>
//                   <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaWspolczesnosc(ZdjęciaWspolczesnosc.UNIA)}} key={9} source={unia}/>
//                 </motion.div>
//             </motion.div>
//         </>
//       )
//     }
    
//     export default Współczesność