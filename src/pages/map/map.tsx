import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'

export function Map() {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }
  const mapsKey = process.env.GOOGLE_API_KEY as string
  return (
    <div>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </div>
  )
}
