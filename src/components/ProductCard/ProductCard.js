import React from 'react'

import { Star } from '../Star'

import { formatPrice } from '../../utils'

import sofaImg from '../../assets/img/sofa.png'
import { ReactComponent as Heart } from '../../assets/icons/heart.svg'
import { ReactComponent as Cart } from '../../assets/icons/cart.svg'

import './ProductCard.scss'

export const ProductCard = ({
  id,
  name,
  rating,
  price,
  color,
  material,
  size,
  mechanism,
  seller,
}) => {
  const { current, isRed, old } = price
  const priceClassNames = `current-price ${isRed ? 'red' : ''}`
  const oldPrice = old ? 
    <span className="old-price">{formatPrice(old)} Р</span> 
    :
    null

  const starsFullness = [
    ...Array(Math.floor(rating)).fill(1), //fill all stars 1
    Number((rating - Math.floor(rating)).toFixed(1)) // decimal
  ]

  const starList = Array(5).fill(null).map((item, idx) => {
    return (
      <li key={`${id}-${idx}`}>
        <Star id={`${id}-${idx}`} fullness={starsFullness[idx] || 0} />
      </li>
    )
  })

  return (
    <ul className="product-card">
      <li className="header">
        <div className="img"><img src={sofaImg} alt={name} /></div>
        <h5>{name}</h5>
      </li>
      <li className="rating">
        <ul className="stars">
          {starList}
        </ul>
        <span>{rating}</span>
      </li>
      <li className="price">
        <span className={priceClassNames}>{formatPrice(current)} Р</span>
        {oldPrice}
      </li>
      <li className="color">{color}</li>
      <li className="material">{material}</li>
      <li className="size">{size}</li>
      <li className="mechanism">{mechanism}</li>
      <li className="seller"><a href="/">{seller}</a></li>
      <li className="actions">
        <button className="btn like"><Heart /></button>
        <button className="btn buy"><Cart /> <span>Купить</span></button>
      </li>
    </ul>
  )
}

