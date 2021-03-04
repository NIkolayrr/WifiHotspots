import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import firebase from '../../core-data/firebase'

export function Map() {
  const [markers, setMarkers] = useState(null) as any
  useEffect(() => {
    const itemsRef = firebase.database().ref('places')
    itemsRef.on('value', (snapshot) => {
      setMarkers(snapshot.val())
    })
  }, [])
  const defaultProps = {
    center: {
      lat: 42.28389,
      lng: 22.69111,
    },
    zoom: 14,
  }

  const mapsKey = process.env.REACT_APP_GOOGLE_API_KEY as string
  return (
    <div>
      <div style={{ height: '92vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
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
                  />
                )
              })
            : null}
        </GoogleMapReact>
      </div>
    </div>
  )
}

const Marker = (props: any) => {
  const [isHidden, setIsHidden] = useState(true)
  return (
    <div className='marker-container'>
      <div className='info-container' hidden={isHidden}>
        <h2>Name: {props.data.name} </h2>
        <h2>Network: {props.data.network} </h2>
        <h2>Password: {props.data.pass} </h2>
      </div>
      <div className='pin' onClick={() => setIsHidden(!isHidden)}></div>
    </div>
  )
}
