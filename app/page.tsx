import SpendingComparison from '@/components/SpendingComparison';
import TeacherExperience from '@/components/TeacherExperience';
import OpportunitiesComparison from '@/components/OpportunitiesComparison';
import OutcomesComparison from '@/components/OutcomesComparison';
import ContactRepresentatives from '@/components/ContactRepresentatives';

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

        {/* Project Overview */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-2xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              This project invites you to take what you've learned about educational inequality and turn it into
              public advocacy. It speaks to a real and urgent issue in public education and invites others to care,
              think, and take action.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-lg p-5 space-y-3">
              <div>
                <h3 className="font-bold text-xl mb-2">The Issue & Who Is Affected</h3>
                <p className="text-base">
                  In America, school funding is tied to local property taxes, creating massive inequities between
                  wealthy and under-resourced communities. Students in low-income areas receive significantly less
                  funding per pupil, resulting in overcrowded classrooms, fewer experienced teachers, limited course
                  offerings, and lower graduation rates. This systemic inequality disproportionately affects students
                  of color and those from low-income families, perpetuating cycles of poverty and limiting opportunity.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2">Our Call to Action</h3>
                <p className="text-base">
                  We advocate for weighted student funding formulas that provide additional resources to schools
                  serving students with greater needs, transparency in school spending data, and increased state
                  and federal investment to close funding gaps. These evidence-based solutions can create a more
                  equitable education system where every student has access to quality education, regardless of
                  their zip code.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2">Engage & Take Action</h3>
                <p className="text-base">
                  This platform uses interactive data visualizations, real school district data, and direct access
                  to representative contact information to mobilize audiences. By making educational injustice
                  visible and providing clear pathways for advocacy, we empower communities to demand change and
                  work toward educational justice for all students.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map CTA */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg shadow-xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Explore Real Underfunded Schools</h2>
              <p className="text-sm opacity-90">
                View an interactive map of actual school districts with abnormally low funding across America
              </p>
            </div>
            <a
              href="/map"
              className="bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Map →
            </a>
          </div>
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

        {/* Contact Representatives Section */}
        <div className="mb-12">
          <ContactRepresentatives />
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Take Action</h2>
          <p className="text-lg mb-6">
            These disparities are not inevitable. We can create a more equitable education system through policy reform.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
            Note: Data shown on this page represents averaged examples to illustrate systemic disparities.
          </p>
          <p className="text-sm mt-2">
            For real school-level data with sources, visit the{' '}
            <a href="/map" className="text-blue-600 hover:underline font-semibold">
              Interactive Map
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
