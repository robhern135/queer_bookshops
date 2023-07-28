import { useEffect, useState } from "react"
import "./App.scss"

import axios from "axios"
import { useLoadScript } from "@react-google-maps/api"

import "@reach/combobox/styles.css"

//material ui
import { CssBaseline } from "@material-ui/core"

//components
import Header from "./components/Header/Header"

//screens
import MapView from "./screens/MapView"
import LocationView from "./screens/LocationView"

//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

// const libraries = ["places"]

function App() {
  const [places, setPlaces] = useState([])

  //state for filters
  // const [type, setType] = useState("")
  const [latLng, setLatLng] = useState("")

  //APIs
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  })

  const API_URL = `${process.env.REACT_APP_API_URL}/wp-json/wp/v2/bookshops/?_embed&per_page=100`

  //first page data for testing
  const getPlacesData = async () => {
    try {
      // let FS_URL = `https://api.foursquare.com/v3/places/search?query=opticians&ll=${latLng}&categories=17037%2C%2015024&sort=DISTANCE&limit=10&fields=${fields}`
      // console.log(API_URL)
      fetch(API_URL)
        .then((response) => response.json())
        .then((response) => setPlaces(response))
        // .then(function () {
        // console.log("places here")
        // console.log(places)
        // })
        .catch((err) => console.error(err))
    } catch (err) {
      console.log(err)
    }
  }

  // const getPlacesData = async () => {
  //   try {
  //     let FS_URL = `https://api.foursquare.com/v3/places/search?query=opticians&ll=${latLng}&categories=17037%2C%2015024&sort=DISTANCE&limit=10&fields=${fields}`
  //     console.log(FS_URL)
  //     fetch(FS_URL, options)
  //       .then((response) => response.json())
  //       .then((response) => setPlaces(response.results))
  //       .then(console.log(places))
  //       .catch((err) => console.error(err))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   console.log("places are:")
  //   console.log(places)
  // }, [places])

  useEffect(() => {
    getPlacesData()
    // console.log("places")
    // console.log(places)
  }, [])

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading Maps"

  return (
    <BrowserRouter basename="/queer-bookshops">
      <CssBaseline />
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MapView places={places} latLng={latLng} setLatLng={setLatLng} />
          }
        ></Route>
        {/* <Route path="/location/:id" element={<LocationView />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
