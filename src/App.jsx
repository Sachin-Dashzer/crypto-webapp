
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import './app.scss'

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import About from "./Components/About/About"
import Currencies from "./Components/Currencies/Currencies"
import Home from "./Components/Home/Home"
import Contact from "./Components/Contact/Contact"
import Exchange from "./Components/Exchange/Exchange"


function App() {





  return (

    <Router>

      <Header />

      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/contact" element={<Contact   />} />

      </Routes>

      <Footer />

    </Router>

    
  )
}

export default App
