// Real Halifax locations
export const halifaxLocations = {
  dal: {
    name: "Dalhousie University",
    address: "6136 University Avenue, Halifax, NS",
    coords: [44.6369, -63.5903]
  },
  downtown: {
    name: "Downtown Halifax",
    address: "1234 Barrington Street, Halifax, NS",
    coords: [44.6488, -63.5752]
  },
  dartmouth: {
    name: "Downtown Dartmouth",
    address: "567 Portland Street, Dartmouth, NS",
    coords: [44.6698, -63.5664]
  },
  bedford: {
    name: "Bedford Place Mall",
    address: "890 Bedford Highway, Bedford, NS",
    coords: [44.7384, -63.6784]
  },
  shoppingCentre: {
    name: "Halifax Shopping Centre",
    address: "7001 Mumford Road, Halifax, NS",
    coords: [44.6533, -63.6301]
  },
  iwk: {
    name: "IWK Health Centre",
    address: "5980 University Avenue, Halifax, NS",
    coords: [44.6375, -63.5880]
  },
  burnside: {
    name: "Burnside Industrial Park",
    address: "45 Akerley Boulevard, Dartmouth, NS",
    coords: [44.7057, -63.5735]
  },
  airport: {
    name: "Halifax Stanfield Airport",
    address: "1 Bell Boulevard, Enfield, NS",
    coords: [44.8807, -63.5086]
  },
  smu: {
    name: "Saint Mary's University",
    address: "923 Robie Street, Halifax, NS",
    coords: [44.6304, -63.5824]
  },
  nscc: {
    name: "NSCC Waterfront Campus",
    address: "80 Mawiomi Place, Dartmouth, NS",
    coords: [44.6653, -63.5721]
  },
  micMac: {
    name: "Mic Mac Mall",
    address: "21 Micmac Boulevard, Dartmouth, NS",
    coords: [44.6888, -63.5684]
  },
  dartmouthCrossing: {
    name: "Dartmouth Crossing",
    address: "200 Susie Lake Crescent, Dartmouth, NS",
    coords: [44.7145, -63.6156]
  }
};

// Demo user accounts
export const demoAccounts = {
  rider: {
    email: "rider@test.com",
    password: "password",
    type: "rider",
    name: "John Smith",
    profilePic: "https://i.pravatar.cc/150?img=12"
  },
  driver: {
    email: "driver@test.com",
    password: "password",
    type: "driver",
    name: "Mike Johnson",
    profilePic: "https://i.pravatar.cc/150?img=33"
  },
  student: {
    email: "student@dal.ca",
    password: "password",
    type: "student",
    name: "Sarah Williams",
    profilePic: "https://i.pravatar.cc/150?img=45",
    school: "Dalhousie University",
    volunteerHours: 47.5
  }
};

// Sample drivers with real Halifax routes
export const sampleDrivers = [
  {
    id: 1,
    name: "Sarah",
    age: 21,
    type: "student",
    school: "Dalhousie University",
    rating: 4.9,
    totalRides: 45,
    profilePic: "https://i.pravatar.cc/150?img=45",
    car: {
      make: "Honda",
      model: "Civic",
      year: 2020,
      color: "Blue",
      plate: "ABC ***"
    },
    from: halifaxLocations.dartmouth,
    to: halifaxLocations.downtown,
    departureTime: "Today 3:00 PM",
    price: 3,
    seatsAvailable: 2,
    verified: {
      email: true,
      phone: true,
      id: true,
      student: true
    },
    volunteerHours: 45,
    memberSince: "Oct 2023"
  },
  {
    id: 2,
    name: "Mike",
    age: 34,
    type: "regular",
    rating: 4.8,
    totalRides: 156,
    profilePic: "https://i.pravatar.cc/150?img=33",
    car: {
      make: "Toyota",
      model: "Camry",
      year: 2019,
      color: "Silver",
      plate: "DEF ***"
    },
    from: halifaxLocations.dartmouth,
    to: halifaxLocations.downtown,
    departureTime: "Today 3:15 PM",
    price: 8,
    seatsAvailable: 3,
    verified: {
      email: true,
      phone: true,
      id: true
    },
    earnings: 1240,
    memberSince: "Feb 2022"
  },
  {
    id: 3,
    name: "Emma",
    age: 19,
    type: "student",
    school: "Saint Mary's University",
    rating: 5.0,
    totalRides: 23,
    profilePic: "https://i.pravatar.cc/150?img=47",
    car: {
      make: "Mazda",
      model: "3",
      year: 2021,
      color: "Red",
      plate: "GHI ***"
    },
    from: halifaxLocations.bedford,
    to: halifaxLocations.dal,
    departureTime: "Today 4:00 PM",
    price: 4,
    seatsAvailable: 1,
    verified: {
      email: true,
      phone: true,
      id: true,
      student: true
    },
    volunteerHours: 23,
    memberSince: "Sep 2023"
  },
  {
    id: 4,
    name: "John",
    age: 42,
    type: "regular",
    rating: 4.7,
    totalRides: 98,
    profilePic: "https://i.pravatar.cc/150?img=13",
    car: {
      make: "Nissan",
      model: "Altima",
      year: 2020,
      color: "Black",
      plate: "JKL ***"
    },
    from: halifaxLocations.airport,
    to: halifaxLocations.downtown,
    departureTime: "Today 5:00 PM",
    price: 15,
    seatsAvailable: 2,
    verified: {
      email: true,
      phone: true,
      id: true
    },
    earnings: 1450,
    memberSince: "May 2022"
  },
  {
    id: 5,
    name: "Lisa",
    age: 20,
    type: "student",
    school: "Dalhousie University",
    rating: 4.9,
    totalRides: 34,
    profilePic: "https://i.pravatar.cc/150?img=48",
    car: {
      make: "Ford",
      model: "Focus",
      year: 2018,
      color: "White",
      plate: "MNO ***"
    },
    from: halifaxLocations.smu,
    to: halifaxLocations.shoppingCentre,
    departureTime: "Today 2:00 PM",
    price: 3,
    seatsAvailable: 3,
    verified: {
      email: true,
      phone: true,
      id: true,
      student: true
    },
    volunteerHours: 34,
    memberSince: "Jan 2023"
  },
  {
    id: 6,
    name: "Tom",
    age: 38,
    type: "regular",
    rating: 4.6,
    totalRides: 123,
    profilePic: "https://i.pravatar.cc/150?img=14",
    car: {
      make: "Chevrolet",
      model: "Cruze",
      year: 2019,
      color: "Gray",
      plate: "PQR ***"
    },
    from: halifaxLocations.burnside,
    to: halifaxLocations.downtown,
    departureTime: "Tomorrow 8:00 AM",
    price: 7,
    seatsAvailable: 2,
    verified: {
      email: true,
      phone: true,
      id: true
    },
    earnings: 980,
    memberSince: "Aug 2021"
  },
  {
    id: 7,
    name: "Maria",
    age: 22,
    type: "student",
    school: "NSCC",
    rating: 4.8,
    totalRides: 41,
    profilePic: "https://i.pravatar.cc/150?img=49",
    car: {
      make: "Hyundai",
      model: "Elantra",
      year: 2020,
      color: "Blue",
      plate: "STU ***"
    },
    from: halifaxLocations.nscc,
    to: halifaxLocations.downtown,
    departureTime: "Tomorrow 9:00 AM",
    price: 4,
    seatsAvailable: 2,
    verified: {
      email: true,
      phone: true,
      id: true,
      student: true
    },
    volunteerHours: 41,
    memberSince: "Mar 2023"
  },
  {
    id: 8,
    name: "David",
    age: 45,
    type: "regular",
    rating: 4.9,
    totalRides: 201,
    profilePic: "https://i.pravatar.cc/150?img=15",
    car: {
      make: "Honda",
      model: "Accord",
      year: 2021,
      color: "Black",
      plate: "VWX ***"
    },
    from: halifaxLocations.dartmouth,
    to: halifaxLocations.airport,
    departureTime: "Tomorrow 6:00 PM",
    price: 12,
    seatsAvailable: 3,
    verified: {
      email: true,
      phone: true,
      id: true
    },
    earnings: 2340,
    memberSince: "Jan 2021"
  },
  {
    id: 9,
    name: "Sophie",
    age: 21,
    type: "student",
    school: "Dalhousie University",
    rating: 5.0,
    totalRides: 28,
    profilePic: "https://i.pravatar.cc/150?img=44",
    car: {
      make: "Volkswagen",
      model: "Jetta",
      year: 2019,
      color: "Silver",
      plate: "YZA ***"
    },
    from: halifaxLocations.downtown,
    to: halifaxLocations.bedford,
    departureTime: "Tomorrow 7:00 PM",
    price: 5,
    seatsAvailable: 2,
    verified: {
      email: true,
      phone: true,
      id: true,
      student: true
    },
    volunteerHours: 28,
    memberSince: "Nov 2023"
  },
  {
    id: 10,
    name: "Alex",
    age: 31,
    type: "regular",
    rating: 4.7,
    totalRides: 87,
    profilePic: "https://i.pravatar.cc/150?img=17",
    car: {
      make: "Kia",
      model: "Forte",
      year: 2020,
      color: "Red",
      plate: "BCD ***"
    },
    from: halifaxLocations.downtown,
    to: halifaxLocations.dartmouth,
    departureTime: "Tomorrow 10:00 AM",
    price: 6,
    seatsAvailable: 3,
    verified: {
      email: true,
      phone: true,
      id: true
    },
    earnings: 780,
    memberSince: "Jun 2022"
  }
];

// Popular routes
export const popularRoutes = [
  {
    from: halifaxLocations.dartmouth.name,
    to: halifaxLocations.downtown.name,
    fromCoords: halifaxLocations.dartmouth.coords,
    toCoords: halifaxLocations.downtown.coords,
    startingPrice: 5
  },
  {
    from: halifaxLocations.bedford.name,
    to: halifaxLocations.downtown.name,
    fromCoords: halifaxLocations.bedford.coords,
    toCoords: halifaxLocations.downtown.coords,
    startingPrice: 6
  },
  {
    from: halifaxLocations.burnside.name,
    to: halifaxLocations.downtown.name,
    fromCoords: halifaxLocations.burnside.coords,
    toCoords: halifaxLocations.downtown.coords,
    startingPrice: 7
  }
];

// Helper function to calculate distance (simplified)
export const calculateDistance = (coords1, coords2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (coords2[0] - coords1[0]) * Math.PI / 180;
  const dLon = (coords2[1] - coords1[1]) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(coords1[0] * Math.PI / 180) * Math.cos(coords2[0] * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return (R * c).toFixed(1);
};

// Helper function to calculate duration (approximate)
export const calculateDuration = (distance) => {
  const avgSpeed = 40; // km/h average in city
  return Math.round((distance / avgSpeed) * 60); // returns minutes
};

// Helper function to calculate taxi price (1.8x ride price)
export const calculateTaxiPrice = (ridePrice) => {
  return Math.round(ridePrice * 2.5);
};
