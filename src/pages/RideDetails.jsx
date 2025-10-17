import { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { sampleDrivers, calculateDistance, calculateDuration, calculateTaxiPrice } from '../data/sampleData'

export default function RideDetails({ user, onBook }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()
  const ride = location.state?.ride || sampleDrivers.find(r => r.id === parseInt(id))
  const [seats, setSeats] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)

  if (!ride) {
    return <div className="p-4">Ride not found</div>
  }

  const distance = calculateDistance(ride.from.coords, ride.to.coords)
  const duration = calculateDuration(distance)
  const serviceFee = 0.50
  const totalPrice = (ride.price * seats) + serviceFee
  const taxiPrice = calculateTaxiPrice(ride.price)
  const savings = taxiPrice - ride.price

  const handleBook = () => {
    onBook({ ...ride, seats, totalPrice })
    setShowConfirmation(true)
  }

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Ride Request Sent!
          </h2>
          <p className="text-gray-600 mb-6">
            We've sent your request to {ride.name}. You'll be notified when they confirm.
          </p>
          <button
            onClick={() => navigate('/my-rides')}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
          >
            Go to My Rides
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800 font-semibold"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 pb-32">
        {/* Driver Profile */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <div className="flex items-start space-x-4">
            <img
              src={ride.profilePic}
              alt={ride.name}
              className="w-20 h-20 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h2 className="text-xl font-bold text-gray-800">
                  {ride.name}, {ride.age}
                </h2>
                {ride.type === 'student' && (
                  <span className="bg-green-100 text-student-green text-xs px-2 py-1 rounded-full font-semibold">
                    🎓 Student
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2">Member since {ride.memberSince}</p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-yellow-500 font-semibold">⭐ {ride.rating}</span>
                <span className="text-gray-600">{ride.totalRides} rides</span>
              </div>
            </div>
          </div>

          {/* Verification badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {ride.verified.email && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓ Email</span>}
            {ride.verified.phone && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓ Phone</span>}
            {ride.verified.id && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓ ID</span>}
            {ride.verified.student && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓ Student ID</span>}
          </div>
        </div>

        {/* Trip Details */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h3 className="font-bold text-gray-800 mb-4">Trip Details</h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-0.5 h-16 bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1 space-y-16">
                <div>
                  <p className="font-semibold text-gray-800">{ride.from.name}</p>
                  <p className="text-sm text-gray-600">{ride.from.address}</p>
                  <p className="text-sm text-primary font-semibold mt-1">{ride.departureTime}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{ride.to.name}</p>
                  <p className="text-sm text-gray-600">{ride.to.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm text-gray-600">
            <span>📏 Distance: {distance} km</span>
            <span>⏱️ Duration: ~{duration} min</span>
          </div>
        </div>

        {/* Price */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h3 className="font-bold text-gray-800 mb-4">Price Breakdown</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Price per seat</span>
              <span className="font-semibold">${ride.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service fee</span>
              <span className="font-semibold">${serviceFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="font-bold text-gray-800">Total</span>
              <span className="font-bold text-primary text-lg">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-3 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-student-green font-semibold">
              💰 Save ${savings} compared to a taxi!
            </p>
          </div>
        </div>

        {/* Car Details */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h3 className="font-bold text-gray-800 mb-4">Vehicle</h3>
          <div className="flex items-center space-x-3">
            <div className="text-4xl">🚗</div>
            <div>
              <p className="font-semibold text-gray-800">
                {ride.car.year} {ride.car.make} {ride.car.model}
              </p>
              <p className="text-sm text-gray-600">{ride.car.color}</p>
              <p className="text-sm text-gray-500">Plate: {ride.car.plate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Booking Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center space-x-4 mb-4">
            <label className="text-sm font-semibold text-gray-700">Seats:</label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4].map(num => (
                <button
                  key={num}
                  onClick={() => setSeats(num)}
                  disabled={num > ride.seatsAvailable}
                  className={`w-10 h-10 rounded-lg font-semibold ${
                    seats === num
                      ? 'bg-primary text-white'
                      : num <= ride.seatsAvailable
                      ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleBook}
            className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Book This Ride - ${totalPrice.toFixed(2)}
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            You won't be charged until the driver confirms
          </p>
        </div>
      </div>
    </div>
  )
}
