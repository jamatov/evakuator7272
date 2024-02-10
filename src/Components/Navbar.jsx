import React from 'react'
import Logo from '../Images/logo.svg'


export default function Navbar() {
  return (
    <nav className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <img className='logo' src={Logo} alt="logo" />
          <ul>
            <li><a href="">Цены</a></li>
            <li><a href="">Преимущества</a></li>
            <li><a href="">О нас</a></li>
            <li><a href="">Отзывы</a></li>
            <li><a href="">Заказать</a></li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
