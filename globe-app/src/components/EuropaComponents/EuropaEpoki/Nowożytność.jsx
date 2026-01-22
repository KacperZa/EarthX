    // import React from 'react'
    // import czlowiek from '.././NowozytnoscImg/czlowiek.jpg'
    // import rozwojDruku from '.././NowozytnoscImg/rozwojdruku.jpg'
    // import kopernik from '.././NowozytnoscImg/kopernik.jpg'
    // import luter from '.././NowozytnoscImg/luter.jpg'
    // import magellan from '.././NowozytnoscImg/magellan.jpg'
    // import michalAniol from '.././NowozytnoscImg/michalaniol.jpeg'
    // import odkrycieAmeryki from '.././NowozytnoscImg/odkrycie_ameryki.jpg'
    // import staraMapa from '.././NowozytnoscImg/stara_mapa.jpg'
    // import upadekRzymu from ".././NowozytnoscImg/upadek_rzymu.jpg"

    // import ObrazekAnimacja from './ObrazekAnimacja'
    
    // import { motion } from 'framer-motion'
    
    // const Nowożytność = ({WybieranieZdjeciaNowozytnosc, ZdjęciaNowozytnosc}) => {

    //   const parent = {
    //     hidden: {},
    //     visible: {
    //       transition: {
    //         staggerChildren: 0.15
    //       }
    //     }
    //   }
    //   return (
    //     <>
        
    //         <motion.div className="tresc-tekst"
    //           initial = {{ opacity: 0, x: -400}}
    //           animate = {{opacity: 1, x:0}}
    //           exit = {{ opacity: 0, x:40}}
    //           transition={{
    //             x: {duration: .8},
    //             opacity: {duration: .8}
    //           }}>
              
    //             <div className='naglowek'> NOWOŻYTNOŚĆ</div>
                
    //             <p>Epoka ta przyniosła gwałtowne przebudzenie i zmianę perspektywy z teocentrycznej na antropocentryczną – człowiek stanął w centrum wszechświata. </p>
    //             <p>Humanizm i powrót do wzorców antycznych zaowocowały eksplozją sztuki (Da Vinci, Michał Anioł) oraz przełomami naukowymi, takimi jak teoria heliocentryczna Kopernika, która zburzyła dotychczasowy obraz kosmosu. Równocześnie, dzięki odwadze żeglarzy takich jak Kolumb czy Magellan, Europa przełamała granice horyzontu, rozpoczynając erę Wielkich Odkryć Geograficznych.Druk również dzięki swojemu rozwojowi wspomógł szybsze przekazywanie informacji. Stary Kontynent stał się centrum globalnego handlu i hegemonem, budującym kolonialne imperia od obu Ameryk po Indie, co przyniosło Europie niewyobrażalne bogactwo, ale też zapoczątkowało krwawą rywalizację mocarstw i reformację religijną, która trwale podzieliła chrześcijaństwo.</p>
    //           </motion.div>
    //           <div className="tresc-zdjecia">

    //            <motion.div 
    //             className="column"
    //             variants={parent}
    //             initial="hidden"
    //             animate="visible">
    //               <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaNowozytnosc(ZdjęciaNowozytnosc.CZLOWIEK)}} key={1} source={czlowiek} />
    //               <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaNowozytnosc(ZdjęciaNowozytnosc.ROZWOJDRUKU)}}key={2} source={rozwojDruku} />
    //               <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaNowozytnosc(ZdjęciaNowozytnosc.KOPERNIK)}} key={3} source={kopernik}/>
    //             </motion.div>

    //             <motion.div
    //             className="column"
    //             variants={parent}
    //             initial="hidden"
    //             animate="visible"
    //             >
    //               <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaNowozytnosc(ZdjęciaNowozytnosc.LUTER)}} key={4} source={luter}/>
    //               <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaNowozytnosc(ZdjęciaNowozytnosc.MAGELLAN)}} key={5} source={magellan}/>
    //               <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaNowozytnosc(ZdjęciaNowozytnosc.MICHALANIOL)}} key={6} source={michalAniol}/>
    //             </motion.div>

    //             <motion.div
    //             className="column"
    //             variants={parent}
    //             initial="hidden"
    //             animate="visible"
    //             >
    //               <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaNowozytnosc(ZdjęciaNowozytnosc.ODKRYCIEAMERYKI)}} key={7} source={odkrycieAmeryki}/>
    //               <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaNowozytnosc(ZdjęciaNowozytnosc.STARAMAPA)}} key={8} source={staraMapa}/>
    //               <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaNowozytnosc(ZdjęciaNowozytnosc.UPADEKRZYMU)}} key={9} source={upadekRzymu}/>
    //             </motion.div>

    //         </div>
    //     </>
    //   )
    // }
    
    // export default Nowożytność