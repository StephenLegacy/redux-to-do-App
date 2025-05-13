import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import './styles/glassmorphic.css'

const App = () => {
  const { user, isGuest } = useSelector(state => state.auth)

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 pb-8">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={user || isGuest ? <Home /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/login" 
            element={!user && !isGuest ? <Login /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App