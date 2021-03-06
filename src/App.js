import React, {useState} from "react"
import { NavbarComponent } from "./components/Navbar.js";
import { IntroComponent } from "./components/Intro.js";
import { PortfolioComponent } from "./components/Portfolio.js";
import { CvComponent } from "./components/Cv.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {ModalComponent} from "./components/Modal.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

export const App = () => {
  const [backgroundColor, setBackground] = useState("bg-dark")
  const [textColor, setTextColor] = useState("text-light")

  const changeBackground = () => {
    if (backgroundColor === "bg-dark") {
      setBackground("bg-light")
      setTextColor("text-dark")
    }
    else {
      setBackground("bg-dark")
      setTextColor("text-light")
    }
  }

  return (
    <div className={backgroundColor} id="app">
      <Router>
        <NavbarComponent onclick={changeBackground} />
          <Routes>
            <Route path="/" element={<IntroComponent background={backgroundColor} text={textColor}/>} />
            <Route path="/cv" element={<CvComponent background={backgroundColor} text={textColor}/>} />
            <Route path="/portfolio" element={<PortfolioComponent background={backgroundColor} text={textColor}/>} />
          </Routes>
      </Router>
      <ModalComponent/>
    </div>
  )
}
