"use client";

import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#FAF9F6] border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-[#F0A58F] uppercase block mb-3">
            EXPERIENCE / ประสบการณ์ทำงาน
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-[#111111]">
            เส้นทางการทำงานและผลงานสร้างสรรค์
          </h2>
          <p className="text-[#4B5563] mt-3 font-light">
            ประสบการณ์การทำงานในด้านการขาย การตลาดออนไลน์ การจัดทำสื่อสร้างสรรค์ และการติดต่อลูกค้าแบบครบวงจร
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-12 max-w-4xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white border border-black/5 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-black/10 transition-all duration-300"
            >
              {/* Top Row: Title, Company, Period */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-black/5 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-heading font-black text-[#111111] tracking-wide">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-[#F0A58F] mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-block px-3.5 py-1.5 bg-[#FAF9F6] border border-black/5 rounded-full text-xs font-semibold text-[#4B5563]">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Grid: Bullets & Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Bullets Column */}
                <div className={`lg:col-span-${exp.metrics ? "8" : "12"} space-y-3`}>
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm md:text-base text-[#4B5563] font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0A58F] shrink-0 mt-2.5"></span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Cards Column (if present) */}
                {exp.metrics && (
                  <div className="lg:col-span-4 grid grid-cols-1 gap-4 w-full">
                    {exp.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FAF9F6] border border-[#F0A58F]/25 rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-inner"
                      >
                        <span className="text-2xl font-heading font-black text-[#111111] tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-[#4B5563] mt-1 tracking-wider">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
