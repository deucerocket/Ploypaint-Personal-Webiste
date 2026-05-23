"use client";

import { useState } from "react";
import { videoProjects, VideoProject } from "../data/portfolio";

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Group tags for filtering
  const categories = [
    { label: "ทั้งหมด", id: "all" },
    { label: "TikTok Content", id: "tiktok" },
    { label: "Livestream Selling", id: "livestream" },
    { label: "Product & Sales", id: "product" },
    { label: "Creative & AI Editing", id: "creative" },
  ];

  const filteredProjects = activeCategory === "all"
    ? videoProjects
    : videoProjects.filter((project) => project.category === activeCategory);

  const handlePlay = (id: string) => {
    setPlayingVideoId(id);
    const videoElements = document.querySelectorAll("video");
    videoElements.forEach((video) => {
      const currentProject = videoProjects.find((p) => p.id === id);
      if (currentProject && !video.src.includes(currentProject.src)) {
        video.pause();
      }
    });
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#F0A58F] uppercase block mb-3">
              PORTFOLIO / ผลงานเด่น
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-[#111111]">
              ผลงานวิดีโอ & คอนเทนต์สร้างสรรค์
            </h2>
            <p className="text-[#4B5563] mt-3 font-light">
              รวบรวมคลิปวิดีโอสั้น TikTok งานไลฟ์สด และวิดีโอเล่าเรื่องสินค้าที่ช่วยกระตุ้นยอดขายและดึงดูดผู้ชมได้อย่างมีประสิทธิภาพ
            </p>
          </div>

          {/* Quick Notice for Video format compatibility */}
          <div className="bg-[#F0A58F]/5 border border-[#F0A58F]/10 rounded-xl p-3 text-xs text-[#4B5563] font-light max-w-xs md:text-right">
            💡 <strong>คำแนะนำ:</strong> วิดีโอเล่นได้โดยตรงบนเว็บนี้ รองรับไฟล์ MP4 และ MOV (สำหรับเบราว์เซอร์ที่รองรับตัวแปลงสัญญาณ)
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-black/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setPlayingVideoId(null); // Stop active player overlay on filter change
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#111111] text-[#FAF9F6] shadow-sm"
                  : "bg-[#FAF9F6] text-[#4B5563] border border-black/5 hover:border-black/15 hover:text-[#111111]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Video Player Container */}
              <div className="relative aspect-[9/16] bg-black/90 w-full overflow-hidden flex items-center justify-center">
                <video
                  src={project.src}
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  onPlay={() => handlePlay(project.id)}
                />
                
                {/* Visual Cover Overlay when NOT playing (optional styling cue) */}
                {playingVideoId !== project.id && (
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] text-[#FAF9F6] font-semibold uppercase tracking-wider pointer-events-none z-10">
                    {project.category}
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-[#111111] text-base group-hover:text-[#F0A58F] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2.5 py-1 bg-white border border-black/5 rounded-md text-[10px] text-[#4B5563] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#FAF9F6] rounded-2xl border border-dashed border-black/10">
            <p className="text-[#4B5563] font-light text-sm">ไม่พบผลงานในหมวดหมู่นี้</p>
          </div>
        )}
      </div>
    </section>
  );
}
