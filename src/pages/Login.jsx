import { useState } from 'react'
import { demoAccounts } from '../data/sampleData'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showSignUp, setShowSignUp] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    // Check demo accounts
    const account = Object.values(demoAccounts).find(
      acc => acc.email === email && acc.password === password
    )

    if (account) {
      onLogin(account)
    } else {
      setError('Invalid email or password. Try demo accounts.')
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and tagline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            🚗 RideShare Halifax
          </h1>
          <p className="text-gray-600">Affordable rides across Halifax</p>
        </div>

        {/* Login card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {showSignUp ? 'Sign Up' : 'Sign In'}
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {showSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            {showSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setShowSignUp(!showSignUp)}
              className="text-primary font-semibold hover:underline"
            >
              {showSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>

        {/* Demo accounts info */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">Demo Accounts:</p>
          <div className="space-y-1 text-sm text-blue-800">
            <p><strong>Rider:</strong> rider@test.com / password</p>
            <p><strong>Driver:</strong> driver@test.com / password</p>
            <p><strong>Student:</strong> student@dal.ca / password</p>
          </div>
        </div>
      </div>
    </div>
  )
}
