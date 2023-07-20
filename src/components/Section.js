import React from 'react'
import './Section.css'
import arrow from '../images/down-arrow.svg'
import Fade from 'react-reveal/Fade'

function Section({ title, desc, lftBtn, rightBtn, bg}) {
  const url = bg;
  return (
    <div className="section" style={{backgroundImage: `url(${url})`}}>
      <Fade bottom>
      <div className="section__head">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      </Fade>

      <div className="section__allBtns">
        <Fade bottom>
        <div className="section__btnGrp">
          <button className="section__btnLeft">{lftBtn}</button>
          <button className="section__btnRight">{rightBtn}</button>
        </div>

        <img className="section__downArrow" src={arrow}/>
        </Fade>
      </div>
    </div>
  )
}

export default Section