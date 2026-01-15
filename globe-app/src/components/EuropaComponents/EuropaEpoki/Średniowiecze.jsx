    import React from 'react'

    import dzuma from ".././SredniowieczeImg/dzuma.jpg"
    import husaria from ".././SredniowieczeImg/husaria.jpg"
    import kosciol from ".././SredniowieczeImg/kosciol.jpg"
    import miasta from ".././SredniowieczeImg/miasta.jpg"
    import mieszczanie from ".././SredniowieczeImg/mieszczanie.jpg"
    import bolonia from ".././SredniowieczeImg/bolonia.jpg"
    import ogrodzieniec from ".././SredniowieczeImg/ogrodzieniec.jpg"
    import wies from ".././SredniowieczeImg/wies.jpg"
    import rycerz from ".././SredniowieczeImg/zbroja_rycerza.jpg"

    import ObrazekAnimacja from './ObrazekAnimacja'
    import { motion, AnimatePresence } from 'framer-motion'
    
    const Średniowiecze = ({data,WybieranieZdjeciaSredniowiecze, ZdjęciaSredniowiecze}) => {

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
            className="tresc-tekst"
            initial = {{ opacity: 0, x: -400}}
            animate = {{opacity: 1, x:0}}
            exit = {{ opacity: 0, x:40}}
            transition={{
              x: {duration: .8},
              opacity: {duration: .8}
            }}
            >
                <div className='naglowek'> ŚREDNIOWIECZE</div>
                <p>Ta trwająca tysiąc lat epoka, niesłusznie zwana „wiekami ciemnymi”, była czasem rodzenia się europejskich narodów i uniwersalnej kultury łacińskiej. Po upadku Rzymu i chaosie Wędrówek Ludów, Kościół Katolicki stał się jedyną instytucją spajającą rozbity kontynent, przechowując wiedzę w klasztornych skryptoriach i tworząc sieć pierwszych uniwersytetów (Bolonia, Paryż, Kraków). </p>
                <p>Był to czas feudalizmu, gdzie społeczeństwo dzieliło się na tych, co się modlą, walczą i pracują, oraz czas narodzin etosu rycerskiego i wielkich królestw – Francji, Anglii, czy monarchii Karola Wielkiego. Mimo epidemii Czarnej Śmierci i wojen, to właśnie wtedy rozkwitły miasta, powstały systemy cechowe i parlamentaryzm, a gotyckie katedry pnące się ku niebu stały się dowodem na niezwykły kunszt inżynieryjny ówczesnej Europy.</p>
              </motion.div>
              <motion.div className="tresc-zdjecia">

               <motion.div 
                className="column"
                variants={parent}
                initial="hidden"
                animate="visible">
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaSredniowiecze(ZdjęciaSredniowiecze.DZUMA)}} key={1} source={dzuma} />
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaSredniowiecze(ZdjęciaSredniowiecze.HUSARIA)}}key={2} source={husaria} />
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaSredniowiecze(ZdjęciaSredniowiecze.KOSCIOL)}} key={3} source={kosciol}/>
                </motion.div>

                <motion.div
                className="column"
                variants={parent}
                initial="hidden"
                animate="visible"
                >
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaSredniowiecze(ZdjęciaSredniowiecze.MIASTA)}} key={4} source={miasta}/>
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaSredniowiecze(ZdjęciaSredniowiecze.MIESZCZANIE)}} key={5} source={mieszczanie}/>
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaSredniowiecze(ZdjęciaSredniowiecze.BOLONIA)}} key={6} source={bolonia}/>
                </motion.div>

                <motion.div
                className="column"
                variants={parent}
                initial="hidden"
                animate="visible"
                >
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaSredniowiecze(ZdjęciaSredniowiecze.OGRODZIENIEC)}} key={7} source={ogrodzieniec}/>
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaSredniowiecze(ZdjęciaSredniowiecze.WIES)}} key={8} source={wies}/>
                  <ObrazekAnimacja Klikniecie={()=> {WybieranieZdjeciaSredniowiecze(ZdjęciaSredniowiecze.RYCERZ)}} key={9} source={rycerz}/>
                </motion.div>

            </motion.div>
        </>
      )
    }
    
    export default Średniowiecze