import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate('');
  const buttonSubmit= ()=>{
    navigate('./gallery');
  }
  return (
    <div className="landingPageContainer">
      <div className="landingHeader">
        <h1>Gresini Garage</h1>
        <p>Your One-stop car garage</p>
        <button onClick={()=>buttonSubmit()}>Open Garage</button>
      </div>
    </div>
  )
}

export default LandingPage