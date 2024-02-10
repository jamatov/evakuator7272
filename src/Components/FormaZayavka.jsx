import React from 'react'

export default function FormaZayavka() {
  return (
    <section className='FormaZayavka'>
      <div className="container">
        <form action="">
          <h3>Заказать эвакуатор</h3>
          <p>В течении 5 минут с вами свяжется наш менеджер, для согласования всех условий.</p>
          <div className="d-flex">
            <input type="text" placeholder='Имя'/>
            <input type="number" placeholder='Телефон'/>
            <input type="text" placeholder='Модель машина' /> 
            <button>Заказать</button>
          </div>
        </form>
      </div>
    </section>
  )
}
