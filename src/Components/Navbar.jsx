import React, {useState, useEffect} from 'react'
import Logo from '../Images/logo.svg'
import { Link } from 'react-scroll'


export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  }

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
  
  window.addEventListener('scroll', changeNavbar);

  return (
    <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
      <div className="container">
        <div className="nav-body">
          <Link to='Header' spy={true} smooth={true} offset={0} duration={100}>
            <img className='logo' src={Logo} alt="logo" />
          </Link>
          <ul className={active}>
            <li><Link onClick={navToggle} to='Price' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Цены</Link></li>
            <li><Link onClick={navToggle} to='Primushestva' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Преимущетсва</Link></li>
            <li><Link onClick={navToggle} to='About' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>О нас</Link></li>
            <li><Link onClick={navToggle} to='Comments' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Отзывы</Link></li>
            <li><Link onClick={navToggle} to='Form' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Заказать</Link></li>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </div>
      </div>
    </nav>
  )
}
