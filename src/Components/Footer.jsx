import React from 'react'
import Logo from '../Images/footer-logo.svg'
import Number from '../Images/footer-number.svg'
import Location from '../Images/location.svg'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <ul>
              <li><a href="">Цены</a></li>
              <li><a href="">Преимущества</a></li>
              <li><a href="">О нас</a></li>
              <li><a href="">Отзывы</a></li>
              <li><a href="">Заказать</a></li>
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
                    <li><a href="">98 077 72 72</a></li>
                    <li><a href="">97 480 16 16</a></li>
                    <li><a href="">97 111 56 56</a></li>
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
