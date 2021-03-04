import { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import firebase from '../../core-data/firebase'
import { Marker } from '../../components/marker'
import { useHistory } from 'react-router-dom'

export function NewLocation() {
  const [currentLocation, setCurrentLocation] = useState(undefined) as any
  const [selectedPlace, setSelectedPlace] = useState(undefined) as any
  const [markers, setMarkers] = useState(null) as any
  const [name, setName] = useState('')
  const [network, setNetwork] = useState('')
  const [pass, setPass] = useState('')
  const history = useHistory()

  const mapsKey = process.env.REACT_APP_GOOGLE_API_KEY as string
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      const { latitude, longitude } = position.coords
      setCurrentLocation({
        lat: latitude,
        lon: longitude,
      })
    })

    const itemsRef = firebase.database().ref('places')
    itemsRef.on('value', (snapshot) => {
      setMarkers(snapshot.val())
    })
  }, [])

  const clickMap = (e: any) => {
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
    itemsRef.push(item).then((data) => {
      alert('added marker')
      history.push('/map')
    })
  }

  return currentLocation ? (
    <div className='new-location-page'>
      <div className='map-wrapper'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={{
            lat: currentLocation.lat,
            lng: currentLocation.lon,
          }}
          onClick={(e) => clickMap(e)}
          defaultZoom={15}
        >
          {markers
            ? Object.keys(markers).map((el: any, index: number) => {
                return (
                  <Marker
                    key={index}
                    lat={markers[el].marker.lat}
                    lng={markers[el].marker.lon}
                    data={markers[el]}
                    id={el}
                    isActive={true}
                  />
                )
              })
            : null}
          {selectedPlace ? <Marker lat={selectedPlace.lat} lng={selectedPlace.lon} isActive={false} /> : null}
        </GoogleMapReact>
      </div>
      <form className='form'>
        <label>
          <div>Name</div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <div>WiFi Network</div>
          <input type='text' value={network} onChange={(e) => setNetwork(e.target.value)} />
        </label>
        <label>
          <div>WiFi Password</div>
          <input type='text' value={pass} onChange={(e) => setPass(e.target.value)} />
        </label>
        <div className='button-wrapper'>
          <button className='button secondary' onClick={(e) => handleSubmit(e)}>
            submit
          </button>
          <button className='button primary' onClick={() => setSelectedPlace(null)}>
            clear marker
          </button>
        </div>
      </form>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}
