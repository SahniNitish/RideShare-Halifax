import { useNavigate, useLocation } from 'react-router-dom'
import { sampleDrivers, calculateDistance, calculateTaxiPrice, halifaxLocations } from '../data/sampleData'
import BottomNav from '../components/BottomNav'
import RideMap from '../components/Map'

export default function SearchResults({ user }) {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = location.state || {}

  // Filter rides based on search (for demo, showing all)
  const rides = sampleDrivers.slice(0, 5)

  const handleRideClick = (ride) => {
    navigate(`/ride/${ride.id}`, { state: { ride, searchParams } })
  }

  // Get coordinates for map
  const getCoords = (locationName) => {
    const location = Object.values(halifaxLocations).find(loc => loc.name === locationName)
    return location ? location.coords : null
  }

  const fromCoords = searchParams.fromCoords || getCoords(searchParams.from) || halifaxLocations.dartmouth.coords
  const toCoords = searchParams.toCoords || getCoords(searchParams.to) || halifaxLocations.downtown.coords

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/home')}
            className="text-gray-600 hover:text-gray-800"
          >
            ← Back
          </button>
          <h1 className="text-lg font-bold text-gray-800">
            {rides.length} rides found
          </h1>
          <button className="text-primary font-semibold">
            Filter
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-4">
        {/* Map */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
          <RideMap
            start={fromCoords}
            end={toCoords}
            showRoute={true}
            height="250px"
          />
        </div>

        {/* Ride cards */}
        <div className="space-y-4">
          {rides.map((ride) => {
            const distance = calculateDistance(ride.from.coords, ride.to.coords)
            const taxiPrice = calculateTaxiPrice(ride.price)
            const savings = taxiPrice - ride.price

            return (
              <div
                key={ride.id}
                onClick={() => handleRideClick(ride)}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
              >
                <div className="p-4">
                  {/* Driver info */}
                  <div className="flex items-start space-x-3 mb-3">
                    <img
                      src={ride.profilePic}
                      alt={ride.name}
                      className="w-14 h-14 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-gray-800">
                          {ride.name}, {ride.age}
                        </h3>
                        {ride.type === 'student' && (
                          <span className="bg-green-100 text-student-green text-xs px-2 py-1 rounded-full font-semibold">
                            🎓 Student
                          </span>
                        )}
                        {ride.type === 'regular' && ride.rating >= 4.8 && (
                          <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full font-semibold">
                            ⭐ Top Rated
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 mt-1 text-sm text-gray-600">
                        <span>⭐ {ride.rating} ({ride.totalRides} rides)</span>
                      </div>
                      {ride.type === 'student' && (
                        <p className="text-xs text-student-green mt-1">
                          Earning volunteer hours
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Car and time */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span>🚗 {ride.car.year} {ride.car.make} {ride.car.model}, {ride.car.color}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span>🕐 {ride.departureTime}</span>
                    <span>💺 {ride.seatsAvailable} seats available</span>
                  </div>

                  {/* Route */}
                  <div className="border-t border-gray-200 pt-3 mb-3">
                    <div className="text-sm">
                      <div className="flex items-start space-x-2 mb-1">
                        <span className="text-primary font-bold">●</span>
                        <span className="text-gray-800">{ride.from.name}</span>
                      </div>
                      <div className="ml-2 border-l-2 border-gray-300 h-4"></div>
                      <div className="flex items-start space-x-2">
                        <span className="text-primary font-bold">●</span>
                        <span className="text-gray-800">{ride.to.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and savings */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                    <div>
                      <p className="text-2xl font-bold text-gray-800">
                        ${ride.price}
                        <span className="text-sm font-normal text-gray-500"> per seat</span>
                      </p>
                      <p className="text-sm text-student-green font-semibold">
                        Save ${savings} vs taxi!
                      </p>
                    </div>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty state if no results */}
        {rides.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600 mb-4">No rides found for your search.</p>
            <button
              onClick={() => navigate('/home')}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold"
            >
              Try Different Search
            </button>
          </div>
        )}
      </div>

      <BottomNav userType="rider" />
    </div>
  )
}
