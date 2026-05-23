"use client";

import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#FAF9F6] border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-[#F0A58F] uppercase block mb-3">
            SKILLS / ความสามารถและเครื่องมือ
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-[#111111]">
            ทักษะความสามารถและเครื่องมือที่เชี่ยวชาญ
          </h2>
          <p className="text-[#4B5563] mt-3 font-light">
            การทำงานผสานระหว่างงานคิดสร้างสรรค์ เทคโนโลยียุคใหม่ และการบริหารงานระบบหลังบ้าน เพื่อขับเคลื่อนยอดขายอย่างยั่งยืน
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-black/10 transition-all duration-300"
            >
              {/* Category Title */}
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-black/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F0A58F]"></span>
                <h3 className="font-heading font-extrabold text-[#111111] text-base tracking-wide uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3.5">
                {category.skills.map((skill, skillIdx) => (
                  <li
                    key={skillIdx}
                    className="flex items-start space-x-2.5 text-sm text-[#4B5563] font-light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4.5 h-4.5 text-[#F0A58F] shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
