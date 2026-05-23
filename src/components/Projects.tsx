"use client";

import { universityProjects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-[#F0A58F] uppercase block mb-3">
            PROJECTS & ACTIVITIES / ผลงานวิชาการและกิจกรรม
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-[#111111]">
            โครงการและกิจกรรมเสริมประสบการณ์
          </h2>
          <p className="text-[#2D3748] mt-3 font-normal">
            บทบาทการทำกิจกรรมระหว่างการเรียน โปรเจกต์วิชาการ และงานเสริมสร้างทักษะการทำงานในสถานการณ์จริง
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {universityProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-black/5 rounded-2xl p-6 flex flex-col justify-between h-full hover:shadow-md hover:border-black/10 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Decorative Icon or Badge */}
                <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#F0A58F] shadow-sm">
                  {index === 0 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.25a.75.75 0 0 1 1.5 0v3.75a.75.75 0 0 1-1.5 0v-3.75ZM13.5 11.25a.75.75 0 0 1 1.5 0v3.75a.75.75 0 0 1-1.5 0v-3.75Z" />
                    </svg>
                  ) : index === 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75a.75.75 0 0 0 .75.75Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-[#111111] text-base leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#F0A58F]">
                    บทบาท: {project.role}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-[#2D3748] font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tag capsules */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-black/5">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="inline-block px-2.5 py-1 bg-white border border-black/5 rounded-md text-[10px] text-[#4B5563] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
