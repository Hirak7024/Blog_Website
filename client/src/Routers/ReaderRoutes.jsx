import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Navbar from '../Components/Navbar'

export default function ReaderRoutes() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
      </Routes>
    </div>
  )
}
