import React, { useState } from "react"

import { Marker, MarkerClusterer } from "@react-google-maps/api"

import CustomInfoWindow from "./CustomInfoWindow"

import MarkerIcon from "../../icons/map-marker.png"

export default function MarkerInfo({
  place,
  clusterer,
  setChildClicked,
  childClicked,
}) {
  const [infoOpen, setInfoOpen] = useState(false)

  const createKey = (location) => {
    return location.lat + location.long
  }

  const placeLat = place.acf.position.latitude
  const placeLong = place.acf.position.longitude
  const placeLatLng = { lat: placeLat, lng: placeLong }

  const { id } = place
  const title = place.title.rendered

  const handleClickedMarker = (place) => {
    setChildClicked({
      id: id,
      name: title,
      lat: placeLat,
      lng: placeLong,
    })
    setInfoOpen(true)
  }
  console.log(placeLatLng)

  return (
    <>
      <Marker
        // options={options}

        onClick={() => handleClickedMarker(place)}
        key={createKey(place)}
        position={placeLatLng}
        clusterer={clusterer}
        icon={{
          url: MarkerIcon,
        }}
      />
      {infoOpen && (
        <CustomInfoWindow
          name={place.title}
          place={place}
          position={placeLatLng}
        />
      )}
    </>
  )
}
