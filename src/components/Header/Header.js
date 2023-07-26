import React, { useState, useEffect } from "react"

// import useStyles from "./styles"

// import { Autocomplete } from "@react-google-maps/api"
// import { AppBar, Toolbar, Typography, Box } from "@material-ui/core"
import { useLocation } from "react-router-dom"

import Logo from "../../icons/logo.svg"
import MenuIcon from "../../icons/menu-icon.svg"
import InfoIcon from "../../icons/info-icon.svg"
import Info from "../Info/Info"
import Menu from "../Menu/Menu"

const Header = () => {
  // const classes = useStyles({})

  const location = useLocation()

  const path = location.pathname
  const [display, setDisplay] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // const goToPreviousPath = (e) => {
  //   e.preventDefault()
  //   window.history.back()
  // }

  useEffect(() => {
    setDisplay(path !== "/" ? true : false)
  }, [])

  const handleInfoPress = () => {
    if (infoOpen) {
      console.log("close info")
      setInfoOpen(!infoOpen)
    } else {
      console.log("open info")
      setInfoOpen(!infoOpen)
    }
  }
  // const handleMenuPress = () => {
  //   if (menuOpen) {
  //     console.log("close menu")
  //     setMenuOpen(!menuOpen)
  //   } else {
  //     console.log("open menu")
  //     setMenuOpen(!menuOpen)
  //   }
  // }

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-item left">
            <button className="header-button" onClick={handleInfoPress}>
              <img src={InfoIcon} className="info-icon" alt="menu" />
              <div className="sr-only">Learn more about this map</div>
            </button>
          </div>
          <div className="header-item center">
            <h1>Reading is Fundamental</h1>
          </div>
          <div className="header-item right"></div>
        </div>
      </header>
      <Info infoOpen={infoOpen} setInfoOpen={setInfoOpen} />
    </>
  )
}

export default Header
