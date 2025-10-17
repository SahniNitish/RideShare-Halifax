import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import { halifaxLocations, popularRoutes } from '../data/sampleData'

export default function RiderHome({ user }) {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    passengers: 1
  })

  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/search', { state: searchParams })
  }

  const handlePopularRoute = (route) => {
    navigate('/search', { state: {
      from: route.from,
      to: route.to,
      fromCoords: route.fromCoords,
      toCoords: route.toCoords,
      date: new Date().toISOString().split('T')[0],
      time: '12:00',
      passengers: 1
    }})
  }

  const locationOptions = Object.entries(halifaxLocations).map(([key, loc]) => ({
    value: loc.name,
    label: loc.name,
    coords: loc.coords
  }))

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">RideShare Halifax</h1>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Hi, {user.name.split(' ')[0]}!</span>
            <img
              src={user.profilePic}
              alt={user.name}
              className="w-10 h-10 rounded-full border-2 border-primary"
            />
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Search form */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Find a Ride
          </h2>

          <form onSubmit={handleSearch} className="space-y-4">
            {/* From */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📍 From
              </label>
              <select
                value={searchParams.from}
                onChange={(e) => setSearchParams({...searchParams, from: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                required
              >
                <option value="">Select pickup location</option>
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📍 To
              </label>
              <select
                value={searchParams.to}
                onChange={(e) => setSearchParams({...searchParams, to: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                required
              >
                <option value="">Select destination</option>
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  📅 Date
                </label>
                <input
                  type="date"
                  value={searchParams.date}
                  onChange={(e) => setSearchParams({...searchParams, date: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🕐 Time
                </label>
                <input
                  type="time"
                  value={searchParams.time}
                  onChange={(e) => setSearchParams({...searchParams, time: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Passengers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                👥 Passengers
              </label>
              <select
                value={searchParams.passengers}
                onChange={(e) => setSearchParams({...searchParams, passengers: parseInt(e.target.value)})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                <option value="1">1 passenger</option>
                <option value="2">2 passengers</option>
                <option value="3">3 passengers</option>
                <option value="4">4 passengers</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Search Rides
            </button>
          </form>
        </div>

        {/* Popular Routes */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Popular Routes
          </h3>
          <div className="space-y-3">
            {popularRoutes.map((route, index) => (
              <button
                key={index}
                onClick={() => handlePopularRoute(route)}
                className="w-full bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{route.from}</p>
                    <p className="text-sm text-gray-500">→</p>
                    <p className="font-semibold text-gray-800">{route.to}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">
                      From ${route.startingPrice}
                    </p>
                    <p className="text-xs text-gray-500">per seat</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Info banner */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-1">
            Support Student Volunteers!
          </h4>
          <p className="text-sm text-green-800">
            Many of our drivers are students earning volunteer hours. Help them while saving money!
          </p>
        </div>
      </div>

      <BottomNav userType="rider" />
    </div>
  )
}
