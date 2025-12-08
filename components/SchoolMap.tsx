"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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

export default function SchoolMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">Loading map...</p>
      </div>
    );
  }

  const center: LatLngExpression = [39.8283, -98.5795]; // Geographic center of USA

  return (
    <MapContainer
      center={center}
      zoom={4}
      scrollWheelZoom={true}
      className="w-full h-[600px] rounded-lg shadow-lg"
    >
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
  );
}
