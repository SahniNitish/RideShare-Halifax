import { useState, useEffect } from 'react'
import Map, { Marker, Source, Layer, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// You need to get a free Mapbox token from https://www.mapbox.com/
// Add it to a .env file as VITE_MAPBOX_TOKEN
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example'

export default function RideMap({
  start,
  end,
  currentLocation = null,
  showRoute = true,
  height = '400px'
}) {
  const [viewport, setViewport] = useState({
    longitude: start ? start[1] : -63.5752,
    latitude: start ? start[0] : 44.6488,
    zoom: 12
  })

  const [routeGeoJSON, setRouteGeoJSON] = useState(null)

  // Update viewport when start location changes
  useEffect(() => {
    if (start && end) {
      // Calculate center point between start and end
      const centerLng = (start[1] + end[1]) / 2
      const centerLat = (start[0] + end[0]) / 2
      setViewport({
        longitude: centerLng,
        latitude: centerLat,
        zoom: 11
      })
    }
  }, [start, end])

  // Fetch route from Mapbox Directions API
  useEffect(() => {
    if (start && end && showRoute) {
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[1]},${start[0]};${end[1]},${end[0]}?geometries=geojson&access_token=${MAPBOX_TOKEN}`

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.routes && data.routes[0]) {
            setRouteGeoJSON({
              type: 'Feature',
              properties: {},
              geometry: data.routes[0].geometry
            })
          }
        })
        .catch(err => console.error('Error fetching route:', err))
    }
  }, [start, end, showRoute])

  const routeLayerStyle = {
    id: 'route',
    type: 'line',
    paint: {
      'line-color': '#2563eb',
      'line-width': 4,
      'line-opacity': 0.8
    }
  }

  return (
    <div style={{ height, width: '100%', position: 'relative' }}>
      <Map
        {...viewport}
        onMove={evt => setViewport(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="top-right" />

        {/* Start marker */}
        {start && (
          <Marker longitude={start[1]} latitude={start[0]}>
            <div className="text-3xl">📍</div>
          </Marker>
        )}

        {/* End marker */}
        {end && (
          <Marker longitude={end[1]} latitude={end[0]}>
            <div className="text-3xl">🎯</div>
          </Marker>
        )}

        {/* Current location marker (e.g., driver's current position) */}
        {currentLocation && (
          <Marker longitude={currentLocation[1]} latitude={currentLocation[0]}>
            <div className="text-3xl animate-pulse">🚗</div>
          </Marker>
        )}

        {/* Route line */}
        {routeGeoJSON && showRoute && (
          <Source id="route" type="geojson" data={routeGeoJSON}>
            <Layer {...routeLayerStyle} />
          </Source>
        )}
      </Map>
    </div>
  )
}
