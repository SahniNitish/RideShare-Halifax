import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ActiveRide({ user }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const [progress, setProgress] = useState(30)

  // Simulate ride progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Map area */}
      <div className="flex-1 bg-gradient-to-br from-blue-100 to-blue-200 relative">
        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">Arriving in</p>
          <p className="text-xl font-bold text-primary">15 minutes</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">🚗</div>
            <p className="text-gray-700 font-semibold">Ride in progress...</p>
          </div>
        </div>
      </div>

      {/* Driver card */}
      <div className="bg-white rounded-t-3xl shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://i.pravatar.cc/150?img=45"
            alt="Driver"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-800">Sarah Williams</h3>
            <p className="text-sm text-gray-600">2020 Honda Civic, Blue</p>
            <p className="text-sm text-gray-600">ABC 123</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center">
              📞
            </button>
            <button className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
              💬
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className={progress >= 33 ? "text-primary font-semibold" : "text-gray-500"}>
              ✅ Picked up
            </span>
            <span className={progress >= 66 ? "text-primary font-semibold" : "text-gray-500"}>
              {progress >= 66 ? "🔵" : "⚪"} In progress
            </span>
            <span className={progress >= 100 ? "text-primary font-semibold" : "text-gray-500"}>
              {progress >= 100 ? "✅" : "⚪"} Drop off
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <button className="w-full bg-red-50 text-red-600 py-3 rounded-lg font-semibold border border-red-200">
          I have a problem
        </button>
      </div>
    </div>
  )
}
