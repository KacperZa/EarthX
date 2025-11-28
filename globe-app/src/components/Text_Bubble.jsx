import React from 'react'
import './TextBubble.css'

function Text_Bubble(props) {
  return (
    <div className='text_bubble'><h1>To jest {props.text}</h1></div>
  )
}

export default Text_Bubble