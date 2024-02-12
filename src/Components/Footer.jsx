import React from 'react'
import Logo from '../Images/footer-logo.svg'
import Number from '../Images/footer-number.svg'
import Location from '../Images/location.svg'
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <ul>
              <li><Link to='Price' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Цены</Link></li>
              <li><Link to='Primushestva' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Преимущетсва</Link></li>
              <li><Link to='About' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>О нас</Link></li>
              <li><Link to='Comments' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Отзывы</Link></li>
              <li><Link to='Form' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Заказать</Link></li>
            </ul>
          </div>

          <div className="col-md-4 footer-border">
            <div className='fooder-main'>
              <div>
                <img src={Logo} alt="" />
                <p>Эвакуатор в Ташкенте</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 footer-end">
            <div>
              <div className="footer-numbers mb-5">
                <img src={Number} alt="" />
                <div className="footer-number-links">
                  <h3>Наш телефон:</h3>
                  <ul className='footer-list'>
                    <li><a href="tel:+9989980777272">98 077 72 72</a></li>
                    <li><a href="tel:+9989974801616">97 480 16 16</a></li>
                    <li><a href="tel:+9989971115656">97 111 56 56</a></li>
                  </ul>
                </div>
              </div>

              <div className="footer-numbers">
                <img src={Location} alt="" />
                <div className="footer-number-links">
                  <h3>Мы находимся по адресу:</h3>
                  <ul className='footer-list'>
                    <li><a href="">Узбекистан, г. Ташкент</a></li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </footer>
  )
}
