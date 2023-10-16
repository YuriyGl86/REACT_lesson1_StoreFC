import React from 'react'
// import classes from './store.module.css'

export function StoreFC(props) {
    const { shopItem } = props

  return (
    <div className="main-content">
        <h2>{ shopItem.brand }</h2>
        <h1>{ shopItem.title }</h1>
        <h3>{ shopItem.description }</h3>
        <div className="description">
            { shopItem.descriptionFull }
        </div>
        <div className="highlight-window  mobile">
            <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
            <div className="price">{ shopItem.currency }{ shopItem.price.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }</div>
            <button>Добавить в корзину</button>
        </div>
    </div>
  )
}


