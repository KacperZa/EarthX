import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)
import SplitType from 'split-type'

import './FallingText.css'

const FallingText = ({items}) => {
    const wrapperRef = useRef(null)

    useEffect(() =>{
        const titles = gsap.utils.toArray('p', wrapperRef.current);
        const tl = gsap.timeline({repeat: -1, repeatDelay: 0, yoyo: true});

        titles.forEach(title => {
            const splitTitle = new SplitText(title, {types: 'chars'})
            tl
                .from(splitTitle.chars, {
                    opacity: 0,
                    y: 80,
                    rotateX: -90,
                    stagger: .06,
                    duration: 0.5,
                    ease: "power1.out"
                }, "<")
                .to(splitTitle.chars, {
                    opacity: 1,
                    y: -80,
                    rotateX: 90,
                    stagger: .06,
                    duration: 0.5,
                    ease: "power1.out"
                }, "<1")
            // gsap.from(splitTitle.chars, {
            //     opacity: 0,
            //     y: 40,
            //     stagger: 0.03,
            //     duration: 0.6,
            //     ease: "power3.out"
            // })
            // gsap.to(splitTitle.chars{
            //     opacity:1,

            // })
        })   

    },[])

  return (
    <>
    <div className="text-wrapper" ref={wrapperRef}>
        {items
        .map(item => (
            <p className='poczatek' key={item.id}>{item.nazwa}</p>
        ))}
    </div>
    </>
  )
}

export default FallingText