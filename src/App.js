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

//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [places, setPlaces] = useState()

  const [latLng, setLatLng] = useState("")

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  })

  const API_URL = `${process.env.REACT_APP_API_URL}/wp-json/wp/v2/bookshops/?_embed&per_page=100`

  console.log(API_URL)

  //first page data for testing
  const getPlacesData = async () => {
    try {
      axios
        .get(API_URL)
        .then((res) => setPlaces(res.data))
        .catch((err) => console.error(err))
    } catch (err) {
      console.log(`error fetching places: ${err}`)
    }
  }

  useEffect(() => {
    getPlacesData()
  }, [])

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading Maps"

  return (
    <BrowserRouter basename="/">
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
