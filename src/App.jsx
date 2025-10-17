import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import RiderHome from './pages/RiderHome'
import SearchResults from './pages/SearchResults'
import RideDetails from './pages/RideDetails'
import MyRides from './pages/MyRides'
import ActiveRide from './pages/ActiveRide'
import DriverHome from './pages/DriverHome'
import PostRide from './pages/PostRide'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import './index.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [bookings, setBookings] = useState([])

  const handleLogin = (user) => {
    setCurrentUser(user)
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setBookings([])
  }

  const handleBooking = (ride) => {
    const newBooking = {
      ...ride,
      bookingId: Date.now(),
      status: 'confirmed',
      bookingDate: new Date().toISOString()
    }
    setBookings([...bookings, newBooking])
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            currentUser ?
            <Navigate to={currentUser.type === 'rider' ? '/home' : '/driver'} /> :
            <Login onLogin={handleLogin} />
          }
        />

        <Route
          path="/home"
          element={
            currentUser && currentUser.type === 'rider' ?
            <RiderHome user={currentUser} onLogout={handleLogout} /> :
            <Navigate to="/login" />
          }
        />

        <Route
          path="/search"
          element={
            currentUser ?
            <SearchResults user={currentUser} onLogout={handleLogout} /> :
            <Navigate to="/login" />
          }
        />

        <Route
          path="/ride/:id"
          element={
            currentUser ?
            <RideDetails user={currentUser} onBook={handleBooking} onLogout={handleLogout} /> :
            <Navigate to="/login" />
          }
        />

        <Route
          path="/my-rides"
          element={
            currentUser ?
            <MyRides user={currentUser} bookings={bookings} onLogout={handleLogout} /> :
            <Navigate to="/login" />
          }
        />

        <Route
          path="/active-ride/:id"
          element={
            currentUser ?
            <ActiveRide user={currentUser} onLogout={handleLogout} /> :
            <Navigate to="/login" />
          }
        />

        <Route
          path="/driver"
          element={
            currentUser && (currentUser.type === 'driver' || currentUser.type === 'student') ?
            <DriverHome user={currentUser} onLogout={handleLogout} /> :
            <Navigate to="/login" />
          }
        />

        <Route
          path="/post-ride"
          element={
            currentUser && (currentUser.type === 'driver' || currentUser.type === 'student') ?
            <PostRide user={currentUser} onLogout={handleLogout} /> :
            <Navigate to="/login" />
          }
        />

        <Route
          path="/profile"
          element={
            currentUser ?
            <Profile user={currentUser} onLogout={handleLogout} /> :
            <Navigate to="/login" />
          }
        />

        <Route
          path="/messages"
          element={
            currentUser ?
            <Messages user={currentUser} onLogout={handleLogout} /> :
            <Navigate to="/login" />
          }
        />

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
