import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import CreateGarage from './components/CreateGarage'
import AddCar from './components/AddCar'
import ViewGarage from './components/ViewGarage'

function AppContext(){
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return(
    <>
      { !isLandingPage && <Navbar /> }
      <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/create' element={<CreateGarage/>}/>
          <Route path='/addCar' element={<AddCar/>}/>
          <Route path='/viewGarage' element={<ViewGarage/>}/>
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <>
        <BrowserRouter>
          <AppContext/>
        </BrowserRouter>
    </>    
  )
}

export default App