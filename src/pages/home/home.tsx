import React, { useEffect } from 'react'
import { Hero } from './hero'
import firebase from '../../core-data/firebase'

export function Home() {
  return (
    <div className='home-wrapper'>
      <Hero />
    </div>
  )
}
