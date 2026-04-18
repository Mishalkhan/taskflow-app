import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
    <Toaster position="top-right" />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </div>
  )
}

export default App
