import React from 'react'

function Loading({itemsLoaded}) {
  return (
    <>
    <div className="container">
        <p>Loading...</p>
        <progress className="progress-bar" value={itemsLoaded} max='100'>PROCENT</progress>
    </div>
    </>
  )
}

export default Loading