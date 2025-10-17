import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function MyRides({ user, bookings }) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingRides = bookings.filter(b => b.status === 'confirmed')
  const pastRides = bookings.filter(b => b.status === 'completed')

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-white shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">My Rides</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        {/* Tabs */}
        <div className="flex bg-white border-b border-gray-200">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-3 font-semibold ${
              activeTab === 'upcoming' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-3 font-semibold ${
              activeTab === 'past' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'
            }`}
          >
            Past
          </button>
        </div>

        <div className="px-4 py-4">
          {activeTab === 'upcoming' && (
            upcomingRides.length > 0 ? (
              <div className="space-y-4">
                {upcomingRides.map((ride) => (
                  <div key={ride.bookingId} className="bg-white rounded-xl shadow-md p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-600">{ride.departureTime}</span>
                      <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                        ✓ Confirmed
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <img src={ride.profilePic} alt={ride.name} className="w-12 h-12 rounded-full" />
                      <div>
                        <p className="font-semibold text-gray-800">{ride.name}</p>
                        <p className="text-sm text-gray-600">{ride.from.name} → {ride.to.name}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-primary text-white py-2 rounded-lg font-semibold">
                        Contact Driver
                      </button>
                      <button
                        onClick={() => navigate(`/ride/${ride.id}`)}
                        className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <p className="text-gray-600 mb-4">No upcoming rides</p>
                <button
                  onClick={() => navigate('/home')}
                  className="bg-primary text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Find a Ride
                </button>
              </div>
            )
          )}

          {activeTab === 'past' && (
            pastRides.length > 0 ? (
              <div className="space-y-4">
                {pastRides.map((ride) => (
                  <div key={ride.bookingId} className="bg-white rounded-xl shadow-md p-4">
                    <p className="text-sm text-gray-600 mb-2">{ride.departureTime}</p>
                    <p className="font-semibold text-gray-800 mb-2">
                      {ride.from.name} → {ride.to.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-800">${ride.totalPrice}</span>
                      <button className="text-primary font-semibold">Rate Driver</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <p className="text-gray-600">No past rides</p>
              </div>
            )
          )}
        </div>
      </div>

      <BottomNav userType={user.type === 'rider' ? 'rider' : 'driver'} />
    </div>
  )
}
