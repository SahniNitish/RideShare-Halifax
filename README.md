# 🚗 RideShare Halifax

A professional ride-sharing mobile web application for Halifax, Nova Scotia, featuring affordable rides with regular drivers and student volunteers earning volunteer hours.

## ✨ Features

### For Riders
- **Search & Book Rides**: Find rides from real Halifax locations
- **Real-Time Pricing**: Save 50-70% compared to taxis
- **Support Students**: Ride with student volunteers earning volunteer hours
- **Trip Tracking**: View upcoming and past rides
- **In-App Messaging**: Communicate with drivers
- **Safe & Verified**: All drivers are verified (email, phone, ID)

### For Drivers & Student Volunteers
- **Post Rides**: Share your commute and earn money or volunteer hours
- **Flexible Pricing**: Set your own prices (students: $2-7, regular: $3-15)
- **Passenger Management**: Accept/decline ride requests
- **Earnings/Hours Tracking**: Track your income or volunteer hours
- **Certificates**: Students can download volunteer hour certificates

## 🎯 Demo Accounts

The app comes with three pre-configured demo accounts:

| Type | Email | Password | Description |
|------|-------|----------|-------------|
| **Rider** | rider@test.com | password | Search and book rides |
| **Driver** | driver@test.com | password | Post rides and earn money |
| **Student Volunteer** | student@dal.ca | password | Post rides and earn volunteer hours |

## 🗺️ Real Halifax Data

The app uses authentic Halifax locations:
- Dalhousie University
- Saint Mary's University
- NSCC Waterfront Campus
- Downtown Halifax
- Downtown Dartmouth
- Bedford Place Mall
- Halifax Shopping Centre
- IWK Health Centre
- Burnside Industrial Park
- Halifax Stanfield Airport
- And more...

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd rideshare-halifax
```

2. Dependencies are already installed. If you need to reinstall:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📱 Using the App

### As a Rider

1. **Login** with `rider@test.com` / `password`
2. **Search for a ride**:
   - Select "From" location (e.g., Dartmouth)
   - Select "To" location (e.g., Downtown Halifax)
   - Choose date, time, and number of passengers
   - Click "Search Rides"
3. **Browse results**: See available rides with student volunteers (green badge) and top-rated drivers (blue badge)
4. **Book a ride**:
   - Click on a ride card
   - Review driver details, trip info, and pricing
   - Select number of seats
   - Click "Book This Ride"
5. **View your bookings**: Go to "My Rides" to see upcoming and past trips
6. **Message drivers**: Use the Messages tab to communicate

### As a Driver or Student Volunteer

1. **Login** with `driver@test.com` or `student@dal.ca` / `password`
2. **View your dashboard**: See total rides, earnings/hours, and ratings
3. **Post a new ride**:
   - Click "Post a New Ride"
   - Select from/to locations
   - Set date, time, available seats
   - Choose price per seat (slider shows taxi comparison)
   - Click "Publish Ride"
4. **Manage requests**: Accept or decline passenger requests
5. **Track performance**: View stats and earnings/volunteer hours

### Student Volunteer Features

- See green "🎓 Student Volunteer" badges throughout the app
- Earn volunteer hours for each ride
- Download professional volunteer hour certificates
- Charge lower prices ($2-7 per seat) to help students save money

## 🎨 Design

The app follows a clean, Poparide-inspired design:
- **Primary Blue**: #0066CC
- **Student Green**: #10B981
- **White backgrounds** with **subtle shadows**
- **Card-based layout**
- **Mobile-first responsive design**
- **Bottom navigation** for easy thumb access

## 🛠️ Technology Stack

- **React 18** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Real Halifax data** - Authentic locations and addresses

## 📂 Project Structure

```
rideshare-halifax/
├── src/
│   ├── components/          # Reusable components
│   │   └── BottomNav.jsx
│   ├── pages/               # Page components
│   │   ├── Login.jsx
│   │   ├── RiderHome.jsx
│   │   ├── SearchResults.jsx
│   │   ├── RideDetails.jsx
│   │   ├── MyRides.jsx
│   │   ├── ActiveRide.jsx
│   │   ├── DriverHome.jsx
│   │   ├── PostRide.jsx
│   │   ├── Profile.jsx
│   │   └── Messages.jsx
│   ├── data/                # Sample data
│   │   └── sampleData.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🌟 Key Features Implemented

### Core Functionality
- ✅ User authentication with role-based access (rider/driver/student)
- ✅ Ride search with real Halifax locations
- ✅ Ride booking system
- ✅ Real-time price comparison with taxis
- ✅ Driver/passenger matching
- ✅ In-app messaging
- ✅ Profile management
- ✅ Ride history tracking

### Student Volunteer System
- ✅ Special student badges and pricing
- ✅ Volunteer hours tracking
- ✅ Certificate generation feature
- ✅ School verification badges
- ✅ Lower price ranges for students

### Safety & Trust
- ✅ Verification badges (email, phone, ID, student ID)
- ✅ Driver ratings and reviews
- ✅ Trip details and vehicle information
- ✅ Emergency contact features

### User Experience
- ✅ Clean, intuitive interface
- ✅ Mobile-first responsive design
- ✅ Bottom navigation for easy access
- ✅ Loading states and smooth transitions
- ✅ Color-coded user types (green for students)

## 🚧 Future Enhancements

Potential features for production:
- Real-time GPS tracking with Mapbox integration
- Payment processing (Stripe)
- Push notifications
- Backend API with database
- Advanced search filters
- Review and rating system
- In-app calls
- Multi-language support

## 📝 Notes

- This is a **demo/prototype** built for a hackathon
- Uses **hardcoded sample data** (10 drivers, real Halifax locations)
- **No backend** - all state management is in-memory
- Perfect for **presentations and demos**
- Ready to **scale** with a proper backend

## 🤝 Contributing

This is a hackathon project. To extend it:
1. Add backend API (Node.js/Express, Flask, or Firebase)
2. Integrate real map APIs (Mapbox/Google Maps)
3. Add payment processing
4. Implement real-time features with WebSockets
5. Add comprehensive testing

## 📄 License

MIT License - feel free to use this project for learning and development

## 👥 Team

Built for the Halifax hackathon to solve real transportation challenges for students and residents.

---

**Made with ❤️ for Halifax**

🎓 Support student volunteers • 💰 Save money • 🌍 Reduce carbon footprint
# RideShare-Halifax
