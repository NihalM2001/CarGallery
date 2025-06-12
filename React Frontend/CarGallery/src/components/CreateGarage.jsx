import React, { useEffect } from 'react'
import './CreateGarage.css' 
import { Link, useNavigate } from 'react-router-dom'

const CreateGarage = () => {
  
  const navigate = useNavigate('');

  const addCarClick = ()=>{
    navigate("/addCar");
  }

  const viewCarClick = ()=>{
    navigate("/viewGarage");
  }
  
  return (
    <div className="mainContent">
      <div className="addCarButton poppins-medium" onClick={addCarClick}><h2>Add Car</h2></div>
      <div className="viewGarageButton poppins-medium" onClick={viewCarClick}><h2>View my Garage</h2></div>
    </div>
  )
}

export default CreateGarage