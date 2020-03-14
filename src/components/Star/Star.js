import React from 'react'

import './Star.scss'

export const Star = ({ id, fullness }) => {
  const fillPercent = (fullness) => {
    switch (fullness) {
      case 1:
        return '100%'
      case 0:
        return '0%'
      default:
        return `${String(fullness)[2]}0%`
    }
  }
  
  return (
    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id}>
            <stop offset={fillPercent(fullness)} style={{stopColor: '#FFBC00'}}></stop>
            <stop offset={fillPercent(fullness)} style={{stopColor: 'gray'}}></stop>
        </linearGradient>
      </defs>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.25919 12.4377L3.39907 15L4.32727 9.57295L0.395352 5.72949L5.82913 4.93769L8.25919 0L10.6892 4.93769L16.123 5.72949L12.1911 9.57295L13.1193 15L8.25919 12.4377Z" fill={`url(#${id})`} />
    </svg>
  )
}

