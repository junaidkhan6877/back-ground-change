import React, { useState } from 'react'

const BgChanged = () => {
    const [bgColor,setBGColor]=useState('withe')
    const rendeamColor=()=>{
        let clr= '#'+Math.floor(Math.random()*1111)
        setBGColor(clr)
    }
  return (
    <div style={{backgroundColor:bgColor, height:"100vh"}}>
      <h1>BG  Color Changed</h1>
      <button  onClick={rendeamColor}>BG Color changed</button>
    </div>
  )
}

export default BgChanged
