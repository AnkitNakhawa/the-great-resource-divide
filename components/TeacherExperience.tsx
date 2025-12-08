"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { aggregateData } from '@/data/schoolData';

export default function TeacherExperience() {
  const data = [
    {
      category: 'Wealthy Schools',
      experience: aggregateData.wealthy.avgTeacherExperience,
    },
    {
      category: 'Under-resourced Schools',
      experience: aggregateData.underResourced.avgTeacherExperience,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Teacher Experience Levels</h2>
      <p className="text-gray-600 mb-6">
        Wealthy schools attract and retain teachers with significantly more experience.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip formatter={(value) => `${value} years`} />
          <Legend />
          <Bar dataKey="experience" fill="#10b981" name="Average Years of Experience" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded">
          <p className="text-sm text-gray-600">Wealthy Schools</p>
          <p className="text-2xl font-bold text-green-600">{aggregateData.wealthy.avgTeacherExperience} years</p>
        </div>
        <div className="bg-orange-50 p-4 rounded">
          <p className="text-sm text-gray-600">Under-resourced Schools</p>
          <p className="text-2xl font-bold text-orange-600">{aggregateData.underResourced.avgTeacherExperience} years</p>
        </div>
      </div>
    </div>
  );
}
