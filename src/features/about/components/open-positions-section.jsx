import React, { useState } from 'react';
import aboutData from '@data/about.json';

function OpenPositionsSection() {
  const [showContent, setShowContent] = useState(false);
  const [active, setActive] = useState('all');

  if (!aboutData) {
    return null;
  }

  const jobs = aboutData.jobs;
  const jobCategories = aboutData.jobCategories;

  const filteredJobs = active === 'all'
    ? jobs
    : jobs.filter(job => job.category === active);

  const displayedJobs = showContent ? filteredJobs : filteredJobs.slice(0, 5);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="md:max-w-4xl text-center mx-auto">
          <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Junte-se a nós</span>
          <h2 className="font-heading mb-12 text-4xl md:text-8xl text-white tracking-7xl lg:tracking-8xl">Vagas abertas</h2>
          <div className="flex flex-wrap justify-center mb-12">
            {jobCategories.map((category) => (
              <div key={category.id} className="w-auto p-1">
                <a
                  className={`inline-block py-3 px-6 md:py-5 md:px-8 font-medium border-2 rounded-full transition duration-200 ${active === category.id ? 'text-green-400 border-green-400' : 'text-gray-300 border-transparent hover:border-gray-800'
                    }`}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setActive(category.id); }}
                >
                  {category.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block w-full overflow-x-auto overflow-y-hidden mb-20">
          <div className="flex">
            <div className="flex-1">
              <div className="flex flex-wrap">
                <div className="flex items-center w-full h-16 px-8 py-5 border-b border-gray-900">
                  <p className="min-w-max text-sm text-gray-300 font-medium">Cargo</p>
                </div>
                {displayedJobs.map((job, index) => (
                  <div key={index} className="flex items-center w-full h-20 px-8 py-5 border-b border-gray-900">
                    <a className="mr-3.5 text-2xl min-w-max text-white tracking-2xl hover:underline" href="#">{job.position}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap">
                <div className="flex items-center w-full h-16 px-8 py-6 border-b border-gray-900">
                  <p className="min-w-max text-sm text-gray-300 font-medium">Departamento</p>
                </div>
                {displayedJobs.map((job, index) => (
                  <div key={index} className="flex items-center w-full h-20 px-8 py-5 border-b border-gray-900">
                    <a className="inline-block py-3 px-4 text-xs text-green-400 hover:text-black font-medium hover:bg-green-400 border-2 border-green-400 rounded-full transition duration-300 capitalize" href="#">{job.department}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap">
                <div className="flex items-center w-full h-16 px-8 py-6 border-b border-gray-900">
                  <p className="min-w-max text-sm text-gray-300 font-medium">Jornada</p>
                </div>
                {displayedJobs.map((job, index) => (
                  <div key={index} className="flex items-center w-full h-20 px-8 py-5 border-b border-gray-900">
                    <p className="text-gray-300">{job.commitment}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap">
                <div className="flex items-center w-full h-16 px-8 py-6 border-b border-gray-900">
                  <p className="min-w-max text-sm text-gray-300 font-medium">Localização</p>
                </div>
                {displayedJobs.map((job, index) => (
                  <div key={index} className="flex items-center w-full h-20 px-8 py-5 border-b border-gray-900">
                    <p className="text-gray-300">{job.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile List View */}
        <div className="md:hidden mb-12">
          {displayedJobs.map((job, index) => (
            <div key={index} className="p-6 mb-4 bg-gray-900/30 border border-gray-800 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl text-white font-medium">{job.position}</h3>
                <span className="inline-block py-1 px-3 text-[10px] text-green-400 border border-green-400 rounded-full capitalize">
                  {job.department}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {job.commitment}
                </div>
                <div className="flex items-center">
                  <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14S3 9.5 3 5.5A5 5 0 1 1 13 5.5C13 9.5 8 14 8 14Z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="8" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  {job.location}
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredJobs.length > 5 && (
          <div className="text-center">
            <button
              className="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
              onClick={() => setShowContent(!showContent)}
            >
              {showContent ? 'Mostrar menos' : 'Mostrar mais'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default OpenPositionsSection;