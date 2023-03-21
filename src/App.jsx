import { useState, useEffect } from 'react'
import './App.css'
import APIForm from './Components/APIform';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;


function App() {


  return (
    <div className="App">
      <div className="whole-page">
        <h1>Trippin' on Cats</h1>
        <h3>Discover cats from your wildest dreams!</h3>
        <br></br>
        <div className="discover-container">
          <br></br>

        </div>
      </div>

      <APIForm 
      />

      <div className="sideNav">
        <h2>Ban List</h2>
        <h4>Select an attribute in your listing to ban it</h4>


      </div>
    </div>
  )
}

export default App
