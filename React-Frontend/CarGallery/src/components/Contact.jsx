import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios';
import { Await } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleData = async (e) => {
    e.preventDefault();
    console.log("Emp deets are: ", { name }, { email }, { contact });

    //create an object with form data
    const data = {
      "username" : name,
      "contact" : contact,
      "email" : email
    }

    try{
      const response = await axios.post("http://localhost:8080/saveUser", data);
      console.log(response);

      if(!response.data)
      {
        alert("Data couldn't be saved :(")
      }
      else{
        alert("Data saved successfully ;)");
      }
    }
    catch(e)
    {
      console.log("Error found" + e);
    }


  }

  return (
    <>

      <div className="contactDetails">
        <div className='header'>
          <h1>Contact Us</h1>
          <p>Fill in the form to contact us for any queries</p>
        </div>
        <form className='contactForm' onSubmit={handleData} >
          <div className="formElements">
            <div className='elementStyling'>
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} required/>
            </div>

            <div className='elementStyling'>
              <label htmlFor="number">Contact:</label>
              <input type="number" id="number" placeholder='Enter Contact' onChange={(e) => setContact(e.target.value)} required/>
            </div>

            <div className='elementStyling'>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            <div className="buttonStyling">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact