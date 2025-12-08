"use client";

import dynamic from 'next/dynamic';
import { dataSources, underfundedDistricts } from '@/data/underfundedSchools';

// Import the map component dynamically to avoid SSR issues with Leaflet
const SchoolMap = dynamic(() => import('@/components/SchoolMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
      <p className="text-gray-600">Loading map...</p>
    </div>
  ),
});

export default function MapPage() {
  const totalStudentsAffected = underfundedDistricts.reduce(
    (sum, district) => sum + district.studentPopulation,
    0
  );

  const averageFundingGap = Math.round(
    underfundedDistricts.reduce((sum, district) => sum + district.fundingGap, 0) /
      underfundedDistricts.length
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Underfunded Schools Map
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive map showing school districts across America with abnormally low funding.
            Click on any marker to see detailed information and sources.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Districts Tracked</h3>
            <p className="text-4xl font-bold text-blue-600">{underfundedDistricts.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Students Affected</h3>
            <p className="text-4xl font-bold text-red-600">{totalStudentsAffected.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Avg. Funding Gap</h3>
            <p className="text-4xl font-bold text-orange-600">${averageFundingGap.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">per pupil</p>
          </div>
        </div>

        {/* Map */}
        <div className="mb-8">
          <SchoolMap />
        </div>

        {/* Information Panel */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding the Data</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              The <strong>funding gap</strong> represents the difference between what a school district
              currently receives per pupil and what research suggests it needs to provide an adequate education.
              This gap is calculated based on factors including:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Local cost of living and wage variations</li>
              <li>Student poverty rates and special needs</li>
              <li>English Language Learner (ELL) populations</li>
              <li>Regional education cost differences</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="font-semibold text-gray-800 mb-2">Key Findings:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  The three districts with the largest gaps—<strong>La Joya ($18,398)</strong>,{' '}
                  <strong>Pharr-San Juan-Alamo ($14,104)</strong>, and <strong>Brownsville ($14,008)</strong>
                  —are all located in Texas and serve predominantly Latinx populations.
                </li>
                <li>
                  About 60% of students in chronically underfunded districts are in just 10 states:
                  Alabama, Arkansas, Florida, Georgia, Louisiana, Mississippi, Nevada, New Mexico,
                  North Carolina, and Texas.
                </li>
                <li>
                  Connecticut has some of the strongest spending disparities in the nation, with
                  wealthy districts spending $8,000-$9,000 more per pupil than cities like
                  Bridgeport and Waterbury.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Sources */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Sources</h2>
          <p className="text-gray-700 mb-6">
            All data on this map comes from authoritative sources committed to education equity
            and transparency. Click on any source to learn more:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataSources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors border border-blue-200"
              >
                <h3 className="font-bold text-blue-900 mb-1">{source.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{source.description}</p>
                <p className="text-xs text-blue-600">
                  {source.url.replace('https://', '').substring(0, 50)}... →
                </p>
                <p className="text-xs text-gray-500 mt-1">Data Year: {source.year}</p>
              </a>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Methodology:</strong> The funding gaps shown are calculated using adequacy
              models that account for regional cost differences, student needs, and educational
              outcome expectations. For detailed methodology, please refer to the individual source
              reports.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">What You Can Do</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Advocate for Change</h3>
              <ul className="space-y-2 text-sm">
                <li>• Contact your state legislators about school funding reform</li>
                <li>• Support weighted student funding formulas</li>
                <li>• Attend school board meetings in your district</li>
                <li>• Share this data with your community</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • Visit{' '}
                  <a
                    href="https://edlawcenter.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-200"
                  >
                    Education Law Center
                  </a>{' '}
                  for state-by-state analysis
                </li>
                <li>
                  • Explore{' '}
                  <a
                    href="https://stateofeducationfunding.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-200"
                  >
                    The Education Trust
                  </a>
                  's interactive data tool
                </li>
                <li>
                  • Check your local district's funding at{' '}
                  <a
                    href="https://nces.ed.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-200"
                  >
                    NCES
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            ← Back to Main Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
