import React, { useState, useEffect, createRef } from "react"

import useStyles from "./styles"

import PlaceDetails from "../PlaceDetails/PlaceDetails"

//existing components
import { Grid } from "@material-ui/core"

const List = ({ places, childClicked, drawerOpen }) => {
  const classes = useStyles()

  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    console.log(childClicked)
    if (childClicked) {
      scrollToCard(childClicked.id)
    }
  }, [childClicked])

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    )
    console.log(elRefs)
  }, [places])

  const scrollToCard = (id) => {
    if (id) {
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  let markerCount = 0

  return (
    <div className={classes.container} style={{ opacity: drawerOpen ? 1 : 0 }}>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, idx) => {
          console.log(place)
          return (
            <Grid item key={idx} md={12} sm={12} xs={12}>
              <PlaceDetails place={place} id={place.id} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
export default List
