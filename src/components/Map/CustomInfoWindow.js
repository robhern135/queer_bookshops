import React from "react"

import { InfoWindow } from "@react-google-maps/api"

import { Typography } from "@material-ui/core"

const CustomInfoWindow = ({ place, position }) => {
  const title = place.title.rendered
  const { acf } = place
  const { address, website } = acf
  return (
    <InfoWindow position={position}>
      <div
        style={{
          background: `white`,
          padding: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2">{place.acf.address}</Typography>
      </div>
    </InfoWindow>
  )
}
export default CustomInfoWindow
