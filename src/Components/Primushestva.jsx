import React from 'react'
import img1 from '../Images/primushestva1.png'
import img2 from '../Images/primushestva2.png'
import img3 from '../Images/primushestva3.png'
import img4 from '../Images/primushestva4.png'

export default function Primushestva() {
  return (
    <section className='Primushestva'>
      <div className="container">
        <div className="row">
          <h2>Наши преимущества</h2>

            <div className="col-md-6 d-flex ">
              <img src={img1} alt="" />

              <div className='p-info'>
                <h3>Эвакуируем авто более 10 лет</h3>
                <p>Работаем с 2007 года, гарантируем качественный сервис 24 часа в сутки и без выходных. Успешно выполняем любые задачи по эвакуации и транспортировке автомобиля.</p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <img src={img2} alt="" />

              <div className='p-info'>
                <h3>Безупречное техническое оснащение</h3>
                <p>Каждый эвакуатор соответствует требованиям, установленным для такой спецтехники. При перевозке автомобилей выполняется их фиксация с помощью 4-х упоров и 8-ми ремней с натяжными средствами. Платформа эвакуатора оборудована лихтарями заднего вида.</p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <img src={img3} alt="" />

              <div className='p-info'>
                <h3>Качественный сервис</h3>
                <p>Мы постоянно делаем контрольные вызовы наших эвакуаторов для проверки уровня предоставляемых услуг. </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <img src={img4} alt="" />

              <div className='p-info'>
                <h3>Удобный для вас вариант оплаты</h3>
                <p>Оплата производится наличными или другими методами, которые нужно согласовывать с водителем.</p>
              </div>
            </div>
            
          </div>
        


      </div>
    </section>
  )
}
