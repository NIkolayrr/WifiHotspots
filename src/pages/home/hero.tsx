import React, { useEffect } from 'react'

export function Hero() {
  const onSearch = (event: any) => {
    console.log(event.target.value)
  }
  return (
    <div className='hero'>
      <h1>Need free wifi? No problem, we got you covered.</h1>
      <h2>Use the search bar below or enable your location to detect places nearby</h2>
      <input type='text' onChange={(e) => onSearch(e)} />
    </div>
  )
}
