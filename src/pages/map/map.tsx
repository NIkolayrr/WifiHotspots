import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import firebase from '../../core-data/firebase'
import { Marker } from '../../components/marker'

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
    zoom: 9,
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
                    isActive={true}
                  />
                )
              })
            : null}
        </GoogleMapReact>
      </div>
    </div>
  )
}
