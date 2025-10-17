import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function Messages({ user }) {
  const navigate = useNavigate()
  const [selectedChat, setSelectedChat] = useState(null)
  const [message, setMessage] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'Sarah Williams',
      avatar: 'https://i.pravatar.cc/150?img=45',
      lastMessage: "I'm on my way!",
      time: '2m ago',
      unread: true
    },
    {
      id: 2,
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?img=33',
      lastMessage: 'See you at 3 PM',
      time: '1h ago',
      unread: false
    }
  ]

  const quickReplies = [
    "I'm on my way",
    "Running 5 min late",
    "Where should I pick you up?",
    "Thanks!"
  ]

  if (selectedChat) {
    const chat = conversations.find(c => c.id === selectedChat)
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Chat header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-lg mx-auto px-4 py-4 flex items-center space-x-3">
            <button onClick={() => setSelectedChat(null)} className="text-gray-600">
              ←
            </button>
            <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full" />
            <h2 className="font-bold text-gray-800">{chat.name}</h2>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 max-w-lg mx-auto w-full px-4 py-4 space-y-4">
          <div className="flex justify-end">
            <div className="bg-primary text-white px-4 py-2 rounded-lg max-w-xs">
              Hi! Excited for tomorrow's ride
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white px-4 py-2 rounded-lg max-w-xs shadow-sm">
              {chat.lastMessage}
            </div>
          </div>
        </div>

        {/* Quick replies */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-lg mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                >
                  {reply}
                </button>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-white shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-4">
        {conversations.length > 0 ? (
          <div className="space-y-3">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-3 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={conv.avatar}
                    alt={conv.name}
                    className="w-14 h-14 rounded-full"
                  />
                  {conv.unread && (
                    <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-800">{conv.name}</h3>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className={`text-sm ${conv.unread ? 'text-gray-800 font-semibold' : 'text-gray-600'}`}>
                    {conv.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600">No messages yet</p>
          </div>
        )}
      </div>

      <BottomNav userType={user.type === 'rider' ? 'rider' : 'driver'} />
    </div>
  )
}
