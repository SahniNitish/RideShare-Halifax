import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { halifaxLocations } from '../data/sampleData'
import BottomNav from '../components/BottomNav'

export default function PostRide({ user }) {
  const navigate = useNavigate()
  const isStudent = user.type === 'student'
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    seats: 2,
    price: isStudent ? 3 : 8
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Ride posted successfully!')
    navigate('/driver')
  }

  const locationOptions = Object.entries(halifaxLocations).map(([key, loc]) => ({
    value: loc.name,
    label: loc.name
  }))

  const estimatedTaxiPrice = Math.round(formData.price * 2.5)

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-white shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="text-gray-600 font-semibold">
            ← Back
          </button>
          <h1 className="text-xl font-bold text-gray-800">Post a New Ride</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Where are you going?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📍 From
              </label>
              <select
                value={formData.from}
                onChange={(e) => setFormData({...formData, from: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                required
              >
                <option value="">Select starting location</option>
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📍 To
              </label>
              <select
                value={formData.to}
                onChange={(e) => setFormData({...formData, to: e.target.value})}
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  📅 Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
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
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                💺 Available Seats
              </label>
              <select
                value={formData.seats}
                onChange={(e) => setFormData({...formData, seats: parseInt(e.target.value)})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                <option value="1">1 seat</option>
                <option value="2">2 seats</option>
                <option value="3">3 seats</option>
                <option value="4">4 seats</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                💵 Price per Seat: ${formData.price}
              </label>
              <input
                type="range"
                min={isStudent ? 2 : 3}
                max={isStudent ? 7 : 15}
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>${isStudent ? 2 : 3}</span>
                <span>${isStudent ? 7 : 15}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Taxi would cost ~${estimatedTaxiPrice}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Publish Ride
            </button>
          </form>
        </div>
      </div>

      <BottomNav userType="driver" />
    </div>
  )
}
