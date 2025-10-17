import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function DriverHome({ user }) {
  const navigate = useNavigate()
  const isStudent = user.type === 'student'

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-white shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Hi {user.name.split(' ')[0]}! {isStudent && '🎓'}
            </h1>
          </div>
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-12 h-12 rounded-full border-2 border-primary"
          />
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-3xl font-bold text-primary mb-1">
              {isStudent ? '47' : '156'}
            </p>
            <p className="text-sm text-gray-600">Total Rides</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-3xl font-bold text-primary mb-1">
              {isStudent ? '47.5' : '$1,240'}
            </p>
            <p className="text-sm text-gray-600">
              {isStudent ? 'Volunteer Hours' : 'Earned'}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-3xl font-bold text-primary mb-1">4.8 ⭐</p>
            <p className="text-sm text-gray-600">Rating</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-3xl font-bold text-primary mb-1">8</p>
            <p className="text-sm text-gray-600">This Week</p>
          </div>
        </div>

        {/* Student certificate */}
        {isStudent && (
          <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-green-900 mb-2">
              🎓 Your Volunteer Certificate
            </h3>
            <p className="text-green-800 mb-3">47.5 hours completed</p>
            <button className="bg-student-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Download Certificate
            </button>
          </div>
        )}

        {/* Post new ride */}
        <button
          onClick={() => navigate('/post-ride')}
          className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg mb-6 hover:bg-blue-700 transition-colors"
        >
          ➕ Post a New Ride
        </button>

        {/* Upcoming rides */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Your Upcoming Rides</h3>
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-600">Tomorrow 3:00 PM</span>
              <span className="text-sm text-primary font-semibold">1 passenger</span>
            </div>
            <p className="font-semibold text-gray-800 mb-3">
              Dartmouth → Downtown Halifax
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-800">
                You'll {isStudent ? 'log: 0.5 hours' : 'earn: $8'}
              </span>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Ride requests */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">New Ride Requests</h3>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="font-semibold text-gray-800 mb-2">
              John wants to join your ride
            </p>
            <p className="text-sm text-gray-600 mb-4">Dartmouth → Downtown • Tomorrow 3:00 PM</p>
            <div className="flex space-x-3">
              <button className="flex-1 bg-student-green text-white py-2 rounded-lg font-semibold">
                Accept
              </button>
              <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav userType="driver" />
    </div>
  )
}
