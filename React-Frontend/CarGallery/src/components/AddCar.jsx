import React, { useState } from 'react'
import './AddCar.css'
import axios from 'axios'

const AddCar = () => {

  const [manufacturer, setManufacturer] = useState("");
  const [modelName, setModelName] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const formSubmit = async(e) => {
    e.preventDefault();

    const formData = {
      "manufacturer" : manufacturer,
      "modelName" : modelName,
      "fuelType" : fuelType,
      "displacement" : displacement,
      "description" : description,
      "price" : price
    }

      try{
        const response = await axios.post("http://localhost:8080/saveCar",formData);
        
        console.log(response);
        console.log("Form submitted");
        if(!response.status === 200)
        {
          alert("Car couldn't be entered :(")
        }
        else{
          alert("Car entered successfully ;)");
        }
      }
      catch(e)
      {
        console.log("Exception Caught : " + e);
      }
  }

  return (
    <div className="addCarContainer">
      <div className="mainImage">

      <div className="formArea">
        <h1>Add your Car</h1>
        <p>Enter the details of the Car here</p>
        <form onSubmit={formSubmit}>

          <div className="formElementStyle">
            <label htmlFor="manufacturer">Manufacturer</label>
            <input type="text" name="manufacturer" id="manufacturer" onChange={(e)=>setManufacturer(e.target.value)} required/>
          </div>

          <div className="formElementStyle">
            <label htmlFor="modelName">Model Name</label>
            <input type="text" name="modelName" id="modelName"  onChange={(e)=>setModelName(e.target.value)} required/>
          </div>

          <div className="formElementStyle">
            <label htmlFor="fuelType">Fuel Type</label>
            <input type="text" name="fuelType" id="fuelType"  onChange={(e)=>setFuelType(e.target.value)} required/>
          </div>

          <div className="formElementStyle">
            <label htmlFor="displacement">Displacement(cc)</label>
            <input type="text" name="displacement" id="displacement" onChange={(e)=>setDisplacement(e.target.value)} required />
          </div>

          <div className="formElementStyle">
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" onChange={(e)=>setDescription(e.target.value)} required />
          </div>

          <div className="formElementStyle">
            <label htmlFor="price">Price</label>
            <input type="text" name="price" id="price"  onChange={(e)=>setPrice(e.target.value)} required/>
          </div>

          <div className="formElementStyle">
            <input type="submit" id="formButtonStyle" required/>
          </div>

        </form>
      </div>
      
      </div>
    </div>
  )
}

export default AddCar