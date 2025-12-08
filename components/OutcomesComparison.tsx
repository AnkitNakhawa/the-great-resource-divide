"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { aggregateData } from '@/data/schoolData';

export default function OutcomesComparison() {
  const graduationData = [
    {
      category: 'Wealthy Schools',
      rate: aggregateData.wealthy.avgGraduationRate,
    },
    {
      category: 'Under-resourced Schools',
      rate: aggregateData.underResourced.avgGraduationRate,
    },
  ];

  const ratioData = [
    {
      category: 'Wealthy Schools',
      ratio: aggregateData.wealthy.avgStudentTeacherRatio,
    },
    {
      category: 'Under-resourced Schools',
      ratio: aggregateData.underResourced.avgStudentTeacherRatio,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Student Outcomes & Class Sizes</h2>
      <p className="text-gray-600 mb-6">
        Funding disparities directly impact graduation rates and class sizes.
      </p>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Graduation Rates</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={graduationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis domain={[0, 100]} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Bar dataKey="rate" fill="#f59e0b" name="Graduation Rate (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Student-Teacher Ratio</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ratioData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip formatter={(value) => `${value}:1`} />
            <Legend />
            <Bar dataKey="ratio" fill="#ef4444" name="Students per Teacher" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
        <p className="text-sm text-gray-700">
          <strong>Impact:</strong> Under-resourced schools have class sizes 2.5x larger and graduation rates 28% lower than wealthy schools.
        </p>
      </div>
    </div>
  );
}
