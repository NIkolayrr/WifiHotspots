import { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import firebase from '../../core-data/firebase'

export function NewLocation() {
  const [currentLocation, setCurrentLocation] = useState(undefined) as any
  const [selectedPlace, setSelectedPlace] = useState(undefined) as any
  const [name, setName] = useState('')
  const [network, setNetwork] = useState('')
  const [pass, setPass] = useState('')

  const mapsKey = process.env.REACT_APP_GOOGLE_API_KEY as string
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      const { latitude, longitude } = position.coords
      setCurrentLocation({
        lat: latitude,
        lon: longitude,
      })
    })
  }, [])

  const clickMap = (e: any) => {
    console.log('place selected')
    setSelectedPlace({
      lat: e.lat,
      lon: e.lng,
      x: e.x,
      y: e.y,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!name || !network || !pass) return
    const itemsRef = firebase.database().ref('places')
    const item = {
      name: name,
      network: network,
      pass: pass,
      marker: { ...selectedPlace },
    }
    itemsRef.push(item)
  }

  return currentLocation ? (
    <div className='new-location-page'>
      <div style={{ height: '92vh', width: '60%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={{
            lat: currentLocation.lat,
            lng: currentLocation.lon,
          }}
          onClick={(e) => clickMap(e)}
          defaultZoom={15}
        ></GoogleMapReact>
      </div>
      <div>
        <h1>Click on the place</h1>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
          <label>
            Name:
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            WiFi Network:
            <input type='text' value={network} onChange={(e) => setNetwork(e.target.value)} />
          </label>
          <label>
            WiFi Password:
            <input type='text' value={pass} onChange={(e) => setPass(e.target.value)} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  ) : null
}
