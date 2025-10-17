import { useNavigate, useLocation } from 'react-router-dom'

export default function BottomNav({ userType = 'rider' }) {
  const navigate = useNavigate()
  const location = useLocation()

  const riderNav = [
    { name: 'Search', path: '/home', icon: '🔍' },
    { name: 'My Rides', path: '/my-rides', icon: '📋' },
    { name: 'Messages', path: '/messages', icon: '💬' },
    { name: 'Profile', path: '/profile', icon: '👤' }
  ]

  const driverNav = [
    { name: 'Home', path: '/driver', icon: '🏠' },
    { name: 'My Rides', path: '/my-rides', icon: '📋' },
    { name: 'Post Ride', path: '/post-ride', icon: '➕' },
    { name: 'Profile', path: '/profile', icon: '👤' }
  ]

  const navItems = userType === 'rider' ? riderNav : driverNav

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-lg mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? 'text-primary' : 'text-gray-500'
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
