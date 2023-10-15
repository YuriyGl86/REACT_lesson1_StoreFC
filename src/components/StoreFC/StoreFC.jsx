import React from 'react'
import classes from './store.module.css'

export function StoreFC(props) {
    const { shopItem } = props

  return (
    <div className={classes["main-content"]}>
        <h2>{ shopItem.brand }</h2>
        <h1>{ shopItem.title }</h1>
        <h3>{ shopItem.description }</h3>
        <div className={classes["description"]}>
            { shopItem.descriptionFull }
        </div>
        <div className={[classes["highlight-window"], classes["mobile"]].join(' ')}>
            <div className={classes["highlight-overlay"]}></div>
        </div>
        <div className={classes["divider"]}></div>
        <div className={classes["purchase-info"]}>
            <div className={classes["price"]}>{ shopItem.currency }{ shopItem.price }</div>
            <button>Добавить в корзину</button>
        </div>
    </div>
  )
}


