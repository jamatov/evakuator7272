import React from 'react'

export default function Header() {
  return (
    <div className='Header'>
      <div className="container">
        <div className="header-info">
          <div>
            <h2>Эвакуатор в Ташкенте</h2>
            <p className='price'>от 50.000сум</p>
            <p className='price-info'>Мы можем эвакуировать автомобили весом до 5 тонн</p>

            <div className='d-flex'>
              <button>98 077 72 72</button>
              <button>97 480 16 16</button>
              <button>97 111 56 56</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
