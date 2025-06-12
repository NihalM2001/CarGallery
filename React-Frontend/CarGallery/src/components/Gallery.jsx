import React, { useEffect, useState } from 'react'
import './CarGallery.css'

const Gallery = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch("https://api.npoint.io/4ba16be3d78ed6685d14");
        if (!response) throw new Error("Something went wrong!");
        const data = await response.json();
        console.log("Data", data);
        setCarData(data);
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchCarData();
  }, []);
  return (
    <>
      <div className="outerBox">
        <div className="galleryHeader">
          <h1>Car Gallery</h1>
          <p>Browse through our car gallery to explore our complete lineup of available models. Each listing includes key details, high-quality images, and features to help you find the car that best suits your needs. Whether you're looking for something sporty, practical, or luxurious, this page makes it easy to compare and choose the perfect vehicle.</p>
        </div>
        <div className='mainContainer'>
          {carData.map((car) => (
            <>
              <div key={car.id} className='carContainer'>
                <>
                  <img src={car.image} alt={car.name}></img>
                </>
                <div className='carDetails'>
                  <h1>{car.name}</h1>
                  <h5>{car.brand}</h5>
                  <p>{car.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

    </>
  )
}

export default Gallery