import React, { useState } from 'react'
import './Header.css'
import logo from '../images/logo.svg'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Header({ show }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        <a href=""><img src={logo} alt="" /></a>
      </div>

      <div className="header__centerMenu">
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Panels</a>
        <a href="#">Solar Roof</a>
      </div>

      <div className="header__rightMenu">
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <p onClick={() => setOpen((prev) => !prev)} style={{cursor: 'pointer'}}>{ open ? 'Close' : 'Menu'}</p>
      </div>
        <div className={`header__hamburger${setOpen ? ' show-menu' : ''}`} show={open} style={{transform: `${show ? 'translateX(0)': 'translateX(100%)'}`}}>
          {/* <div className="header__hamburgerCross" >
            <CloseRoundedIcon/>
          </div> */}
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Used Inventory</a></li>
          <li><a href="">Trade-In</a></li>
          <li><a href="">Demo Drive</a></li>
          <li><a href="">Insurance</a></li>
          <li><a href="">Fleet</a></li>
          <li><a href="">Cybertruck</a></li>
          <li><a href="">Roadster</a></li>
          <li><a href="">Semi</a></li>
          <li><a href="">Charging</a></li>
          <li><a href="">Commercial Energy</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Find Us</a></li>
          <li><a href="">Support</a></li>
        </div>
    </div>
  )
}

export default Header