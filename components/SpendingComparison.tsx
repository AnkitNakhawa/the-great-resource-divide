"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { aggregateData } from '@/data/schoolData';

export default function SpendingComparison() {
  const data = [
    {
      category: 'Wealthy Schools',
      spending: aggregateData.wealthy.avgPerPupilSpending,
    },
    {
      category: 'Under-resourced Schools',
      spending: aggregateData.underResourced.avgPerPupilSpending,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Per-Pupil Spending Comparison</h2>
      <p className="text-gray-600 mb-6">
        Wealthy schools receive more than 2.5x the funding per student compared to under-resourced schools.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="spending" fill="#3b82f6" name="Annual Per-Pupil Spending ($)" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded">
          <p className="text-sm text-gray-600">Wealthy Schools</p>
          <p className="text-2xl font-bold text-blue-600">${aggregateData.wealthy.avgPerPupilSpending.toLocaleString()}</p>
        </div>
        <div className="bg-red-50 p-4 rounded">
          <p className="text-sm text-gray-600">Under-resourced Schools</p>
          <p className="text-2xl font-bold text-red-600">${aggregateData.underResourced.avgPerPupilSpending.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
