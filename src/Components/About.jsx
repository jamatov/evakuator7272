import React from 'react'
import img from '../Images/about.png'

export default function About() {
  return (
    <section className='About'>
      <div className="container">

        <div className="row">
          <div className="col-md-6 about-info">
            <h2>Также мы работаем</h2>
            <p>Если вы являетесь владельцем автомобиля, то прекрасно знаете, что очень часто поломки случаются в самый неподходящий момент. А учитывая возрастающую интенсивность движения на дороге, опасность попасть всегда находится на высоком уровне. Поэтому стоит быть постоянно подготовленным и знать, как быстро вызвать профессиональный эвакуатор. Наша компания предлагает высококачественный сервис по эвакуации автотранспорта. </p>

            <div className='number-info-body'>
              <div className='info-body__numbers'>
                <h3>20+</h3>
                <p>ЕДИНИЦ <br /> ТЕХНИКИ</p>
              </div>

              <div className='info-body__numbers'>
                <h3>30+</h3>
                <p>ШТАТ <br /> СОТРУДНИКОВ</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
