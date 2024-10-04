import React from 'react'
import HomePage from './HomePage'
import NavBar from './NavBar'
import HowItWorks from './HowItWorks'
import Destinations from './Destinations'
import TopCountries from './TopCountries'
import TopAsia from './TopAsia'
import TripAnyWhere from './TripAnyWhere'
import PlaneTrip from './PlaneTrip'
import PlaneWith from './PlaneWith'
import FeedBack from './FeedBack'
import Footer from './Footer'

function LandingPage() {
  return (
   <div>
    <NavBar />
    <HomePage />
    <HowItWorks />
    <Destinations />
    <TopCountries />
    <TopAsia />
    <TripAnyWhere />
    <PlaneTrip />
    <PlaneWith />
    <FeedBack />
    <Footer />
   </div>
  )
}

export default LandingPage