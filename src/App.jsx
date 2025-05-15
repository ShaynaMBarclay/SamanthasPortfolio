import React from 'react'
import "./styles/App.css";

import Portfolio from "./Portfolio.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>

    <div className="page-container">
      <Navbar/>
      <Portfolio/>
    </div>
    </>
  )
}

export default App