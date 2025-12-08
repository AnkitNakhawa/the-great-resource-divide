"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { aggregateData } from '@/data/schoolData';

export default function OpportunitiesComparison() {
  const data = [
    {
      category: 'Wealthy Schools',
      apCourses: aggregateData.wealthy.avgApCourses,
      extracurricular: aggregateData.wealthy.avgExtracurricular,
    },
    {
      category: 'Under-resourced Schools',
      apCourses: aggregateData.underResourced.avgApCourses,
      extracurricular: aggregateData.underResourced.avgExtracurricular,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Educational Opportunities</h2>
      <p className="text-gray-600 mb-6">
        Access to AP courses and extracurricular programs varies dramatically based on school funding.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="apCourses" fill="#8b5cf6" name="AP Courses Available" />
          <Bar dataKey="extracurricular" fill="#ec4899" name="Extracurricular Programs" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-purple-50 p-4 rounded">
          <p className="text-sm text-gray-600 mb-2">AP Courses</p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-xs text-gray-500">Wealthy</p>
              <p className="text-xl font-bold text-purple-600">{aggregateData.wealthy.avgApCourses}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Under-resourced</p>
              <p className="text-xl font-bold text-purple-400">{aggregateData.underResourced.avgApCourses}</p>
            </div>
          </div>
        </div>
        <div className="bg-pink-50 p-4 rounded">
          <p className="text-sm text-gray-600 mb-2">Extracurricular Programs</p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-xs text-gray-500">Wealthy</p>
              <p className="text-xl font-bold text-pink-600">{aggregateData.wealthy.avgExtracurricular}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Under-resourced</p>
              <p className="text-xl font-bold text-pink-400">{aggregateData.underResourced.avgExtracurricular}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
