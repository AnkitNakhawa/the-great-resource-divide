import SpendingComparison from '@/components/SpendingComparison';
import TeacherExperience from '@/components/TeacherExperience';
import OpportunitiesComparison from '@/components/OpportunitiesComparison';
import OutcomesComparison from '@/components/OutcomesComparison';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            The Great Resource Divide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A data-driven look at inequitable school funding and resource distribution across America
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">The Problem</h2>
          <p className="text-lg text-gray-700 mb-4">
            In the United States, where you live determines the quality of education you receive.
            Schools in wealthy neighborhoods receive significantly more funding than those in under-resourced areas,
            creating a massive gap in educational opportunities.
          </p>
          <p className="text-lg text-gray-700">
            This funding disparity affects everything from teacher quality to course offerings,
            ultimately impacting student outcomes and perpetuating cycles of inequality.
          </p>
        </div>

        {/* Visualizations */}
        <div className="space-y-8 mb-12">
          <SpendingComparison />
          <TeacherExperience />
          <OpportunitiesComparison />
          <OutcomesComparison />
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Take Action</h2>
          <p className="text-lg mb-6">
            These disparities are not inevitable. We can create a more equitable education system through policy reform.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Support Weighted Student Funding</h3>
              <p className="text-sm">
                Advocate for funding formulas that provide additional resources to schools serving
                students with greater needs, rather than relying solely on local property taxes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Demand Transparency</h3>
              <p className="text-sm">
                Push for public reporting of school-level spending data so communities can see
                exactly how resources are distributed across districts.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Contact Your Representatives</h3>
              <p className="text-sm">
                Let your local, state, and federal representatives know that equitable school
                funding is a priority for you and your community.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Share This Data</h3>
              <p className="text-sm">
                Use these visualizations to educate others about funding inequities and build
                support for reform in your community.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm opacity-90">
              Every student deserves access to quality education, regardless of their zip code.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Data sources: National Center for Education Statistics, EdBuild, Education Trust
          </p>
          <p className="text-sm mt-2">
            Note: Data shown represents averaged examples to illustrate systemic disparities.
          </p>
        </div>
      </div>
    </main>
  );
}
