import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

import { navigate } from '@reach/router'
import contacts from '../contacts'
import mapStyles from '../mapStyles'

const Map = withScriptjs(
  withGoogleMap(() => (
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
        onClick={() => navigate(contacts.map.link)}
        position={{ lat: 55.944577, lng: 36.591989 }}
      />
    </GoogleMap>
  ))
)

export default Map