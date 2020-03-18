import React, { useState, useEffect, useCallback, useRef } from 'react'

import { ProductCard } from '../ProductCard'

import { randomInteger } from '../../utils'

import './App.scss'

const products = Array(200).fill(null).map(() => ({
  id: Math.random().toString(36).substr(2, 9),
  name: 'Тумба прикроватная Rubus с двумя ящиками',
  rating: Number((Math.random() * 5).toFixed(1)),
  price: {
    current: randomInteger(40000, 70000),
    isRed: randomInteger(0, 1),
    get old() {
      return randomInteger(this.current * 1.15, this.current * 1.4)
    }
  },
  color: 'Черный',
  material: 'Ткань',
  size: 'ш. 349 х в. 234 х г. 323',
  mechanism: 'Французская раскладушка',
  seller: 'Laska Family'
}))

export const App = () => {
  const productListRef = useRef(null)
  const [maxProducts, setMaxProducts] = useState(10)

  const onProductListScroll = useCallback(e => {
    const { scrollLeft, clientWidth, scrollWidth } = e.target
    
    const width = scrollWidth - clientWidth
    const scrollPercent = scrollLeft / width

    if (scrollPercent >= 0.9) {
      setMaxProducts(setMaxProducts => setMaxProducts + 10)
    }
  }, [])
  
  useEffect(() => {
    productListRef.current.addEventListener('scroll', onProductListScroll)
  }, [onProductListScroll])

  useEffect(() => {
    if (maxProducts >= products.length) {
      productListRef.current.removeEventListener('scroll', onProductListScroll)
    }
  }, [maxProducts, onProductListScroll])

  const productList = products.slice(0, maxProducts).map(({ id, ...props }) => {
    return (
      <li key={id}>
        <ProductCard id={id} {...props} />
      </li>
    )
  })

  return (
    <div className="app">
      <ul ref={productListRef} className="product-list">
        <li>
          <ul className="title-column">
            <li></li>
            <li>Рейтинг</li>
            <li>Цена</li>
            <li>Цвет</li>
            <li>Материал</li>
            <li>Размеры</li>
            <li>Механизм</li>
            <li>Продавец</li>
          </ul>
        </li>
        {productList}
      </ul>
    </div>
  )
}

