"use client";

import { useState } from 'react';
import { stateRepresentatives, statesList } from '@/data/representativesData';

export default function ContactRepresentatives() {
  const [selectedState, setSelectedState] = useState<string>('');

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  const selectedStateData = stateRepresentatives.find(
    sr => sr.state === selectedState
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Your Representatives</h2>
      <p className="text-gray-600 mb-6">
        Let your local, state, and federal representatives know that equitable school funding
        is a priority for you and your community. Select your state to find contact information.
      </p>

      <div className="mb-6">
        <label htmlFor="state-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Your State
        </label>
        <select
          id="state-select"
          value={selectedState}
          onChange={handleStateChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
        >
          <option value="">-- Choose a State --</option>
          {statesList.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {selectedStateData && (
        <div className="space-y-6">
          {/* U.S. Senators */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b-2 border-blue-500 pb-2">
              U.S. Senators
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {selectedStateData.senators.map((senator, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg border border-blue-200"
                >
                  <h4 className="font-bold text-lg text-gray-900">{senator.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {senator.position} ({senator.party})
                  </p>
                  {senator.phone && (
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Phone:</span>{' '}
                      <a href={`tel:${senator.phone}`} className="text-blue-600 hover:underline">
                        {senator.phone}
                      </a>
                    </p>
                  )}
                  {senator.email && (
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Email:</span>{' '}
                      <a href={`mailto:${senator.email}`} className="text-blue-600 hover:underline">
                        {senator.email}
                      </a>
                    </p>
                  )}
                  <p className="text-sm text-gray-700 mt-2">
                    <a
                      href={senator.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Visit Website →
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* U.S. Representatives */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b-2 border-green-500 pb-2">
              U.S. Representatives
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {selectedStateData.representatives.map((rep, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-4 rounded-lg border border-green-200"
                >
                  <h4 className="font-bold text-lg text-gray-900">{rep.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {rep.position} ({rep.party})
                  </p>
                  {rep.phone && (
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Phone:</span>{' '}
                      <a href={`tel:${rep.phone}`} className="text-green-600 hover:underline">
                        {rep.phone}
                      </a>
                    </p>
                  )}
                  {rep.email && (
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Email:</span>{' '}
                      <a href={`mailto:${rep.email}`} className="text-green-600 hover:underline">
                        {rep.email}
                      </a>
                    </p>
                  )}
                  <p className="text-sm text-gray-700 mt-2">
                    <a
                      href={rep.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline font-semibold"
                    >
                      {rep.name === 'Contact your local representative'
                        ? 'Find Your Representative →'
                        : 'Visit Website →'}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Message Template */}
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Sample Message Template</h3>
            <div className="bg-white p-4 rounded border border-gray-300 text-sm text-gray-700 leading-relaxed">
              <p className="mb-3">
                <strong>Subject:</strong> Support Equitable School Funding Reform
              </p>
              <p className="mb-2">Dear [Representative Name],</p>
              <p className="mb-3">
                As your constituent, I am writing to urge you to prioritize equitable school funding
                reform. Students in under-resourced communities receive significantly less funding
                than their peers in wealthier areas, creating vast disparities in educational
                opportunities and outcomes.
              </p>
              <p className="mb-3">
                I ask that you support policies that ensure all students have access to quality
                education, including weighted student funding formulas, increased transparency in
                school spending, and greater state and federal investment in underfunded districts.
              </p>
              <p className="mb-3">
                Every child deserves the opportunity to succeed, regardless of their zip code.
                I hope I can count on your leadership to address this critical issue.
              </p>
              <p>Sincerely,<br />[Your Name]</p>
            </div>
          </div>
        </div>
      )}

      {!selectedState && (
        <div className="text-center py-8 text-gray-500">
          <p>Select your state above to view your representatives and their contact information.</p>
        </div>
      )}
    </div>
  );
}
