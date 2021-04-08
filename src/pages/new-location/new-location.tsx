import { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import firebase from '../../core-data/firebase'
import { Marker } from '../../components/marker'
import { useHistory } from 'react-router-dom'
import { ReactComponent as LoaderSvg } from '../../assets/loader.svg'

export function NewLocation() {
  const [currentLocation, setCurrentLocation] = useState(undefined) as any
  const [selectedPlace, setSelectedPlace] = useState(undefined) as any
  const [markers, setMarkers] = useState(null) as any
  const history = useHistory()
  const [formData, setFormData] = useState({
    name: '',
    network: '',
    pass: '',
    id: '',
    marker: {
      lat: '',
      lon: '',
      x: '',
      y: '',
    },
    votes: 0,
  })

  const mapsKey = process.env.REACT_APP_GOOGLE_API_KEY as string
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((position: any) => {
    //   console.log('the position', position)
    //   const { latitude, longitude } = position.coords
    //   setCurrentLocation({
    //     lat: latitude,
    //     lon: longitude,
    //   })
    // })

    setCurrentLocation({
      lat: 42.69751,
      lon: 23.32415,
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
    setFormData({
      name: '',
      network: '',
      pass: '',
      id: '',
      marker: { lat: e.lat, lon: e.lng, x: e.x, y: e.y },
      votes: 0,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const itemsRef = firebase.database().ref('places')
    itemsRef.push(formData).then((data) => {
      alert('added marker')
      history.push('/map')
    })
  }

  const onEditMarker = (data: any, id: string) => {
    setFormData({
      ...formData,
      name: data.name,
      network: data.network,
      pass: data.pass,
      id: id,
      marker: { ...data.marker },
    })
  }

  const handleEdit = () => {
    const itemsRef = firebase.database().ref('places')
    itemsRef.child(formData.id).update(formData)
  }

  const handleChange = (event: any) => {
    const target = event.target
    setFormData({ ...formData, [target.name]: target.value })
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
          onClick={clickMap}
          defaultZoom={10}
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
                    isActive={false}
                    onEdit={onEditMarker}
                  />
                )
              })
            : null}
          {selectedPlace ? <Marker lat={selectedPlace.lat} lng={selectedPlace.lon} isActive={false} /> : null}
        </GoogleMapReact>
      </div>
      <form className='form'>
        {selectedPlace ? (
          <p>
            lat: <span className='coordinate'>{selectedPlace.lat}</span> lon:{' '}
            <span className='coordinate'>{selectedPlace.lon}</span>
          </p>
        ) : null}
        <label>
          <div>Name</div>
          <input type='text' name='name' value={formData.name} onChange={handleChange} />
        </label>
        <label>
          <div>WiFi Network</div>
          <input type='text' name='network' value={formData.network} onChange={handleChange} />
        </label>
        <label>
          <div>WiFi Password</div>
          <input type='text' name='pass' value={formData.pass} onChange={handleChange} />
        </label>
        <div className='button-wrapper'>
          <button className='button secondary' onClick={(e) => (formData.id ? handleEdit() : handleSubmit(e))}>
            {formData.id ? 'save' : 'submit'}
          </button>
          <button
            className='button primary'
            onClick={(e) => {
              e.preventDefault()
              setSelectedPlace(null)
            }}
          >
            clear marker
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className='loader loader--style6' title='5'>
      <LoaderSvg />
    </div>
  )
}
