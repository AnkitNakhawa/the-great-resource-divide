"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { underfundedDistricts, UnderfundedSchoolDistrict } from '@/data/underfundedSchools';
import { useEffect, useState } from 'react';

// Fix for default marker icon issue with Next.js
const createCustomIcon = () => {
  return new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// Component to handle map view changes
function MapViewController({ center, zoom }: { center: LatLngExpression; zoom: number }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
}

export default function SchoolMap() {
  const [mounted, setMounted] = useState(false);
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([39.8283, -98.5795]); // USA center
  const [mapZoom, setMapZoom] = useState(4);

  useEffect(() => {
    setMounted(true);
  }, []);

  const focusOnMaryland = () => {
    setMapCenter([38.8, -76.8]); // Center of Maryland
    setMapZoom(8);
  };

  const resetView = () => {
    setMapCenter([39.8283, -98.5795]); // USA center
    setMapZoom(4);
  };

  if (!mounted) {
    return (
      <div className="w-full h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">Loading map...</p>
      </div>
    );
  }

  const marylandDistricts = underfundedDistricts.filter(d => d.state === 'MD');

  return (
    <div>
      {/* Control Buttons */}
      <div className="mb-4 flex gap-3">
        <button
          onClick={focusOnMaryland}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Focus on Maryland ({marylandDistricts.length} districts)
        </button>
        <button
          onClick={resetView}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          View All Districts
        </button>
      </div>

      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        scrollWheelZoom={true}
        className="w-full h-[600px] rounded-lg shadow-lg"
      >
        <MapViewController center={mapCenter} zoom={mapZoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {underfundedDistricts.map((district, index) => (
        <Marker
          key={index}
          position={[district.latitude, district.longitude]}
          icon={createCustomIcon()}
        >
          <Popup className="custom-popup" maxWidth={300}>
            <div className="p-2">
              <h3 className="font-bold text-lg mb-2 text-gray-800">{district.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {district.city}, {district.state}
              </p>

              <div className="space-y-2 text-sm">
                <div className="bg-red-50 p-2 rounded">
                  <p className="font-semibold text-red-700">Funding Gap</p>
                  <p className="text-xl font-bold text-red-600">
                    ${district.fundingGap.toLocaleString()} per pupil
                  </p>
                </div>

                <div className="bg-blue-50 p-2 rounded">
                  <p className="font-semibold text-blue-700">Current Spending</p>
                  <p className="text-lg font-bold text-blue-600">
                    ${district.perPupilSpending.toLocaleString()} per pupil
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-700">Student Population</p>
                  <p className="text-gray-600">{district.studentPopulation.toLocaleString()} students</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-700">Demographics</p>
                  <p className="text-gray-600 text-xs">{district.demographicInfo}</p>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500">
                    Source: <a
                      href={district.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {district.sourceName}
                    </a> ({district.lastUpdated})
                  </p>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
      </MapContainer>
    </div>
  );
}
