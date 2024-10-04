import React from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LandingPage from "../Components/LandingPage";

function AppRoutes() {
  return (
    <Routes>
         <Route path="*" element={<Navigate to="/landingPage" />} />
         <Route path='/landingPage' element={<LandingPage />} />
    </Routes>
  )
}

export default AppRoutes