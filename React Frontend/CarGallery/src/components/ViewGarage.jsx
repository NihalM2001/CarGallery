import React, { useEffect, useState } from 'react'
import './viewGarage.css'
import axios from 'axios';

const ViewGarage = () => {

  const [carDetails, setCarDetails] = useState([]);


  const fetchCarData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/listCar")
        .then(response => {
          setCarDetails(response.data);
        })
    }
    catch (e) {
      console.log("Exception Caught: " + e)
    }
  }
  useEffect(() => {
    fetchCarData();
  }, []);

  const onButtonClick = async (sNo) => {
    console.log(sNo);
    try {
      const redirect = await axios.get(`http://localhost:8080/deleteCar/${sNo}`)
      if (redirect.status === 200) {
        alert("Car deleted Successfully");
        fetchCarData();
      }
      else {
        alert("Error deleteing Car");
      }
    }
    catch (e) {
      console.error("Exception Caught: " + error);
      alert("Error deleteing Car Exception");
    }
  }

  return (
    <>
      <div className="mainBox">
        <div className="galleryHeader">
          <h1>My Garage</h1>
          <p>Your collection, at a glance.
Here’s where all your chosen cars come together — neatly listed, beautifully displayed. Whether you're admiring your growing gallery, making updates, or just taking a joyride through your picks, this page gives you a clear and organized view of everything you’ve added to your dream garage.</p>
        </div>
        <div className='myGarageContainer'>
          {carDetails.map((car) => (
            <div key={car.sNo} className='myCarContainer'>
              {/* <>
                    <img src={carDetails.image} alt={carDetails.name}></img>
                  </> */}
              <div className='myCarDetails'>
                <div className="mainCarDetails">
                  <div className='details'>
                    <h3>{car.modelName}</h3>
                    <h5>{car.manufacturer}</h5>
                    <p>{car.description}</p>
                  </div>
                  <div className='deleteButton'>
                    <button onClick={() => { onButtonClick(car.sNo) }}><span></span></button>
                  </div>
                </div>
                <div className="miscDetails">
                  <p className='carDisplacement'>{car.displacement}</p> |
                  <p className='carfuelType'>{car.fuelType}</p> |
                  <p className='carPrice'>{car.price}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default ViewGarage