# 🌐 Accessing RideShare Halifax

## ✅ Server is Running!

The Vite development server is now running and configured for your environment.

### Access URLs:

- **Local**: http://localhost:3000/
- **Network**: http://10.104.61.146:3000/
- **IDE Host**: Your IDE should provide a preview URL

### Host Configuration

The app is configured to allow access from:
- `ide-nitish-rbchubhacks.services.oip.virtusa.dev`
- `localhost`
- Any network interface (0.0.0.0:3000)

## 🎯 Quick Demo Access

### Demo Accounts (Just Copy & Paste!)

**Rider Account:**
```
rider@test.com
password
```

**Regular Driver:**
```
driver@test.com
password
```

**Student Volunteer:**
```
student@dal.ca
password
```

## 🚀 What You Can Do

1. **Test Rider Flow:**
   - Login as rider
   - Search: Dartmouth → Downtown Halifax
   - Book a $3 ride with student Sarah
   - View in "My Rides"

2. **Test Driver Flow:**
   - Login as student volunteer
   - See 47.5 volunteer hours
   - Post a new ride
   - Check dashboard stats

3. **Test All Features:**
   - Messages (chat)
   - Profile (badges)
   - Popular routes
   - Price comparisons

## 📱 Mobile View

To test mobile responsiveness:
1. Open Chrome DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Select iPhone or Android device
4. Reload the page

## 🛠️ Server Commands

**Check if server is running:**
```bash
ps aux | grep vite
```

**Restart server:**
```bash
pkill -f vite
npm run dev
```

**View logs:**
```bash
tail -f nohup.out
```

## 🎨 Features to Showcase

- ✨ Clean Poparide-style design
- 📍 Real Halifax locations (12+)
- 🎓 Student volunteer system
- 💰 50-70% savings vs taxis
- 📱 Mobile-first responsive
- ✓ Verification badges
- ⭐ Driver ratings
- 💬 In-app messaging

## 📊 App Statistics

- **Pages**: 10 complete pages
- **Locations**: 12 real Halifax addresses
- **Sample Drivers**: 10 with photos
- **Routes**: 3 popular routes pre-loaded
- **User Types**: 3 (rider, driver, student)

## ⚡ Performance

- **Build Time**: ~1.4 seconds
- **Hot Reload**: Instant
- **Bundle Size**: Optimized with Vite
- **Load Time**: < 1 second

## 🔧 Troubleshooting

**Can't access the app?**
1. Check server is running: `ps aux | grep vite`
2. Try http://localhost:3000/ directly
3. Check your IDE's port forwarding settings
4. Restart: `pkill -f vite && npm run dev`

**Seeing old version?**
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Clear browser cache
- Try incognito/private window

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📁 Project Location

```
/home/coder/projects/rideshare-halifax/
```

## 📖 Documentation

- **README.md** - Full documentation
- **QUICKSTART.md** - 5-minute demo guide
- **ACCESS.md** - This file

## 🎉 Ready to Demo!

The app is fully functional and ready for:
- Live demonstrations
- User testing
- Investor presentations
- Technical showcases
- Hackathon judging

**Happy demoing! 🚀**

---

*Built with React + Vite + Tailwind + Real Halifax Data*
