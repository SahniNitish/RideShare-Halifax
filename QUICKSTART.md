# 🚀 Quick Start Guide - RideShare Halifax

## Already Running!

The application is **already running** at:
**http://localhost:3000/**

## Demo Accounts (Copy & Paste)

### Rider Account
```
Email: rider@test.com
Password: password
```
**What you can do**: Search for rides, book trips, message drivers, view ride history

### Regular Driver Account
```
Email: driver@test.com
Password: password
```
**What you can do**: Post rides, earn money ($3-15/seat), manage passengers, track earnings

### Student Volunteer Account
```
Email: student@dal.ca
Password: password
```
**What you can do**: Post rides for volunteer hours ($2-7/seat), download certificates, support students

## 5-Minute Demo Flow

### Test the Rider Experience:

1. **Login** as rider (rider@test.com / password)
2. **Search** a ride:
   - From: "Downtown Dartmouth"
   - To: "Downtown Halifax"
   - Pick today's date and any time
   - Click "Search Rides"
3. **Browse** 5 available rides with pricing
4. **Click** on Sarah's ride (student volunteer, $3)
5. **Book** the ride - select 1-4 seats
6. **View** your booking in "My Rides" tab

### Test the Driver Experience:

1. **Logout** and login as student (student@dal.ca / password)
2. **See** your stats: 47 rides, 47.5 volunteer hours, 4.8★ rating
3. **Click** "Post a New Ride"
4. **Fill** the form:
   - From: Dalhousie University
   - To: Halifax Shopping Centre
   - Today's date + time
   - 2-3 seats
   - Price: $4/seat
5. **Publish** and see your dashboard

### Test Other Features:

- **Messages**: Chat with drivers/passengers
- **Profile**: View verification badges and stats
- **My Rides**: See upcoming/past trips with timeline
- **Popular Routes**: Quick search for common trips

## Real Halifax Locations

All locations are authentic Halifax addresses:
- ✅ Dalhousie University
- ✅ Downtown Halifax (Barrington St)
- ✅ Downtown Dartmouth (Portland St)
- ✅ Halifax Shopping Centre
- ✅ Bedford Place Mall
- ✅ IWK Health Centre
- ✅ Burnside Industrial Park
- ✅ Halifax Airport
- And 4 more!

## Key Features to Demo

### 💰 Save Money
- Rides cost $3-15 (vs $18-37 for taxis)
- See "Save $XX vs taxi!" on every ride
- 50-70% savings

### 🎓 Support Students
- Green badges show student volunteers
- Students earn official volunteer hours
- Download professional certificates
- Lower prices for everyone

### ✨ Professional Design
- Clean Poparide-inspired interface
- Mobile-first responsive (try resizing!)
- Bottom navigation for easy access
- Real-time updates and smooth animations

### 🔒 Safety First
- Verification badges (✓ Email ✓ Phone ✓ ID ✓ Student)
- Driver ratings (⭐ 4.8+)
- In-app messaging
- Vehicle information

## Project Structure

```
/home/coder/projects/rideshare-halifax/
├── src/
│   ├── pages/          # 10 complete pages
│   ├── components/     # Reusable UI components
│   ├── data/           # Halifax locations + sample data
│   ├── App.jsx         # Main routing
│   └── index.css       # Tailwind + custom styles
├── README.md           # Full documentation
└── package.json        # Dependencies
```

## Commands

**Stop the server**: `Ctrl + C` in the terminal

**Restart the server**:
```bash
npm run dev
```

**Build for production**:
```bash
npm run build
```

## Next Steps (Optional)

To make this production-ready:

1. **Backend**: Add Node.js/Express or Firebase
2. **Maps**: Integrate Mapbox for real GPS tracking
3. **Payments**: Add Stripe for actual transactions
4. **Database**: PostgreSQL/MongoDB for data persistence
5. **Auth**: JWT tokens or OAuth
6. **Real-time**: WebSockets for live updates

## Troubleshooting

**Port 3000 already in use?**
- Change port in `vite.config.js`
- Or kill the process: `lsof -ti:3000 | xargs kill`

**Missing dependencies?**
```bash
npm install
```

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## Tech Stack

- React 18 (hooks, router)
- Vite (fast dev server)
- Tailwind CSS (styling)
- React Router (navigation)
- Real data (Halifax locations)

## Demo Tips

- **Show mobile view**: Chrome DevTools > Device Toolbar (Cmd+Shift+M)
- **Multiple accounts**: Open in incognito for simultaneous rider/driver views
- **Network simulation**: DevTools > Network > Slow 3G (test loading states)

---

**Questions?** Check README.md for full documentation

**Ready to present?** The app is live at http://localhost:3000/

**Have fun demoing! 🎉**
