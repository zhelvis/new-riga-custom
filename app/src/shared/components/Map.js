import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

import { makeStyles } from '@material-ui/core'

import { navigate } from '@reach/router'
import mapStyles from '../mapStyles'

const useStyles = makeStyles(() => ({
  map: {
    width: '100%',
    height: '50vh',
  },
}))

const Map = withScriptjs(
  withGoogleMap(({ markerLink }) => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 55.944577, lng: 36.591989 }}
      options={{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: mapStyles,
      }}
    >
      <Marker
        onClick={() => navigate(markerLink)}
        position={{ lat: 55.944577, lng: 36.591989 }}
        zIndex={2}
      />
    </GoogleMap>
  ))
)

export default function MapContainer({ markerLink }) {
  const classes = useStyles()
  return (
    <div className={classes.map}>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUVXQwhqOBEAbvSn0_tngvkshx3hLAYrI"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markerLink={markerLink || '#'}
      />
    </div>
  )
}
