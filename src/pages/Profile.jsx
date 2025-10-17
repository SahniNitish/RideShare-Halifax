import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function Profile({ user, onLogout }) {
  const navigate = useNavigate()
  const isStudent = user.type === 'student'

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-white shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Profile header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-4 text-center">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
          <p className="text-gray-600 mb-2">{user.email}</p>
          <p className="text-sm text-gray-500">Member since Oct 2023</p>
          {isStudent && (
            <div className="mt-3">
              <span className="bg-green-100 text-student-green px-3 py-1 rounded-full font-semibold text-sm">
                🎓 Verified Student
              </span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h3 className="font-bold text-gray-800 mb-4">My Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Rides</span>
              <span className="font-semibold">{isStudent ? 47 : user.type === 'driver' ? 156 : 12}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Rating</span>
              <span className="font-semibold">⭐ {isStudent ? '4.9' : '4.8'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Response Rate</span>
              <span className="font-semibold">98%</span>
            </div>
            {isStudent && (
              <div className="flex justify-between">
                <span className="text-gray-600">Volunteer Hours</span>
                <span className="font-semibold text-student-green">{user.volunteerHours || 47.5}</span>
              </div>
            )}
          </div>
        </div>

        {/* Verification */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h3 className="font-bold text-gray-800 mb-4">Verification</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">Email verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">Phone verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700">ID verified</span>
            </div>
            {isStudent && (
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">Student ID verified - {user.school}</span>
              </div>
            )}
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-4">
          <h3 className="font-bold text-gray-800 mb-4">Settings</h3>
          <div className="space-y-3">
            <button className="w-full text-left text-gray-700 hover:text-primary py-2">
              Notifications →
            </button>
            <button className="w-full text-left text-gray-700 hover:text-primary py-2">
              Payment Methods →
            </button>
            <button className="w-full text-left text-gray-700 hover:text-primary py-2">
              Help & Support →
            </button>
            <button className="w-full text-left text-gray-700 hover:text-primary py-2">
              About RideShare Halifax →
            </button>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full bg-red-50 text-red-600 py-3 rounded-lg font-semibold border border-red-200 hover:bg-red-100 transition-colors"
        >
          Log Out
        </button>
      </div>

      <BottomNav userType={user.type === 'rider' ? 'rider' : 'driver'} />
    </div>
  )
}
