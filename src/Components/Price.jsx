import React from 'react'
import card1 from '../Images/card1.png'
import card2 from '../Images/card2.png'
import card3 from '../Images/card3.png'
import card4 from '../Images/card4.png'
import { Link } from 'react-scroll'

export default function Price() {
  return (
    <section id='Price' className='Price'>
      <div className="container">
        <div className="row">
          <h2>Цены на эвакуатор</h2>

          <div className="card-col col-6 col-md-4 col-lg-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={card1} alt="" />
                <h3>Легковые автомобили</h3>
                <p>Цена договорная</p>

                <a href="tel:+9989980777272"></a>
                <a href="tel:+9989980777272"></a>
                <a href="tel:+9989980777272"></a>
                <Link to='Form' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>
                  <button>
                    Заказать
                  </button>
                </Link>
                
              </div>
            </div>
          </div>

          <div className="card-col col-6 col-md-4 col-lg-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={card2} alt="" />
                <h3>Джипы</h3>
                <p>Цена договорная</p>
                <Link to='Form' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>
                  <button>
                    Заказать
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card-col col-6 col-md-4 col-lg-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={card3} alt="" />
                <h3>Мотоциклы</h3>
                <p>Цена договорная</p>
                <Link to='Form' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>
                  <button>
                    Заказать
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card-col col-6 col-md-4 col-lg-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={card4} alt="" />
                <h3>Cпецтехники</h3>
                <p>Цена договорная</p>
                <button>
                   Заказать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
