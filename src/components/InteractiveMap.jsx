import { useRef, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, ZoomControl } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const CITIES = [
  { name: 'Bédoin',                  note: 'Porte du Ventoux',          lat: 44.123, lng: 5.179 },
  { name: 'Malaucène',               note: 'Versant nord',              lat: 44.172, lng: 5.130 },
  { name: 'Mazan',                   note: 'Village de caractère',      lat: 44.057, lng: 5.133 },
  { name: 'Caromb',                  note: 'Fontaine légendaire',       lat: 44.113, lng: 5.107 },
  { name: 'Mormoiron',               note: 'Vignoble & collines',       lat: 44.055, lng: 5.188 },
  { name: 'Villes-sur-Auzon',        note: 'Gorges de la Nesque',       lat: 44.054, lng: 5.233 },
  { name: 'Venasque',                note: 'Village perché',            lat: 44.055, lng: 5.157 },
  { name: 'Pernes-les-Fontaines',    note: 'Cité des fontaines',        lat: 43.997, lng: 5.060 },
  { name: 'Carpentras',              note: 'Cœur du Comtat',           lat: 44.056, lng: 5.048 },
  { name: 'Aubignan',                note: 'Pays du Ventoux',           lat: 44.090, lng: 5.052 },
  { name: 'Beaumes-de-Venise',       note: 'Muscat & dentelles',        lat: 44.115, lng: 5.027 },
  { name: 'Crillon-le-Brave',        note: 'Face au sommet',            lat: 44.128, lng: 5.154 },
  { name: 'Saint-Pierre-de-Vassols', note: 'Hameau secret',             lat: 44.077, lng: 5.152 },
  { name: 'Modène',                  note: 'Entre vigne et garrigue',   lat: 44.099, lng: 5.142 },
  { name: 'Saint-Didier',            note: 'Sud Ventoux',               lat: 44.027, lng: 5.096 },
  { name: "L'Isle-sur-la-Sorgue",    note: 'Venise provençale',         lat: 43.918, lng: 5.051 },
  { name: 'Sault',                   note: 'Limite du territoire',      lat: 44.090, lng: 5.408 },
]

const VENTOUX    = [44.174, 5.279]
const CARPENTRAS = [44.056, 5.048]

const cityIcon = L.divIcon({
  className: '',
  html: `<div style="width:10px;height:10px;background:#7D8CFF;border:2px solid white;border-radius:50%;box-shadow:0 0 8px rgba(125,140,255,0.6);cursor:pointer;transition:transform .15s"></div>`,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
  popupAnchor: [0, -8],
})

const ventouxIcon = L.divIcon({
  className: '',
  html: `<div style="width:18px;height:18px;background:#2C3A20;border:3px solid white;border-radius:50%;box-shadow:0 0 14px rgba(44,58,32,0.55);cursor:pointer"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
  popupAnchor: [0, -12],
})

export default function InteractiveMap() {
  return (
    <div
      className="rounded-3xl overflow-hidden border border-cream-deeper shadow-card-hover"
      style={{ height: 420 }}
    >
      <style>{`
        .leaflet-popup-content-wrapper {
          background: #2C3A20;
          color: #F5EFE0;
          border-radius: 12px;
          border: none;
          box-shadow: 0 8px 24px rgba(44,58,32,0.25);
          font-family: 'Nunito', sans-serif;
        }
        .leaflet-popup-tip { background: #2C3A20; }
        .leaflet-popup-content { margin: 10px 14px; font-size: 13px; line-height: 1.5; }
        .leaflet-popup-close-button { color: #F5EFE0 !important; font-size: 18px !important; }
        .leaflet-control-zoom a {
          background: #2C3A20 !important;
          color: #F5EFE0 !important;
          border: none !important;
          font-size: 18px !important;
        }
        .leaflet-control-zoom a:hover { background: #3F5230 !important; }
        .leaflet-container { font-family: 'Nunito', sans-serif; }
        .leaflet-tile-pane { filter: saturate(0.65) sepia(0.18); }
        .map-note { font-size: 11px; color: #7D8CFF; display: block; margin-top: 1px; }
        .map-badge { font-size: 10px; display: inline-block; margin-top: 4px; background: rgba(125,140,255,0.15); color: #7D8CFF; padding: 1px 6px; border-radius: 20px; }
      `}</style>

      <MapContainer
        center={[44.06, 5.22]}
        zoom={10}
        style={{ width: '100%', height: '100%' }}
        zoomControl={false}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <ZoomControl position="bottomright" />

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap &copy; CARTO'
          maxZoom={19}
        />

        {/* Service zone */}
        <Circle
          center={CARPENTRAS}
          radius={30000}
          pathOptions={{
            color: '#7D8CFF',
            fillColor: '#7D8CFF',
            fillOpacity: 0.07,
            weight: 1.5,
            dashArray: '5 8',
          }}
        />

        {/* Mont Ventoux summit */}
        <Marker position={VENTOUX} icon={ventouxIcon}>
          <Popup>
            <strong>Mont Ventoux</strong>
            <span className="map-note">Sommet — 1 909 m</span>
            <span className="map-badge">🏔 Le cœur du territoire</span>
          </Popup>
        </Marker>

        {/* City markers */}
        {CITIES.map((city) => (
          <Marker key={city.name} position={[city.lat, city.lng]} icon={cityIcon}>
            <Popup>
              <strong>{city.name}</strong>
              <span className="map-note">{city.note}</span>
              <span className="map-badge">✓ Zone couverte</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
