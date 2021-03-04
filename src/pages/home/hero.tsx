import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Hero() {
  const onSearch = (event: any) => {
    console.log(event.target.value)
  }
  return (
    <div className='hero'>
      <h1>Need free wifi? No problem, we got you covered.</h1>
      <h2>Check available locations below</h2>
      <Link to='/map'>
        <button className='button accent'>Go to map</button>
      </Link>
    </div>
  )
}
