"use client";

import { profileData } from "../data/portfolio";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#FDFCF7] to-[#FAF9F6]">
      {/* Editorial Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] border-x border-black/10 max-w-6xl mx-auto flex justify-between">
        <div className="w-[1px] bg-black h-full"></div>
        <div className="w-[1px] bg-black h-full hidden md:block"></div>
        <div className="w-[1px] bg-black h-full hidden md:block"></div>
        <div className="w-[1px] bg-black h-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-black/5 bg-white/60 backdrop-blur-sm text-xs font-semibold text-[#4B5563]">
            <span className="w-2 h-2 rounded-full bg-[#F0A58F] animate-pulse"></span>
            <span>พร้อมเริ่มงานทันที</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-[#111111] leading-[1.15]">
              {profileData.name}
              <br />
              <span className="text-[#F0A58F]">({profileData.nickname})</span>
            </h1>
            <p className="text-xl md:text-2xl font-heading font-bold text-[#4B5563] tracking-wide mt-2">
              {profileData.positioning}
            </p>
          </div>

          <p className="text-base md:text-lg text-[#4B5563] max-w-xl leading-relaxed font-light">
            {profileData.intro.th}
          </p>

          <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#portfolio"
              className="flex-1 sm:flex-initial text-center px-8 py-4 bg-[#111111] text-[#FAF9F6] font-semibold text-sm rounded-xl hover:bg-[#F0A58F] hover:text-[#111111] transition-all duration-300 shadow-md shadow-black/5 hover:shadow-lg hover:shadow-black/10 transform hover:-translate-y-0.5"
            >
              ดูผลงานวิดีโอ
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-initial text-center px-8 py-4 bg-transparent border border-black/10 text-[#111111] font-semibold text-sm rounded-xl hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              ติดต่อฉัน
            </a>
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] md:w-96 md:h-[460px] group">
            {/* Visual Frame Border */}
            <div className="absolute -inset-2 border border-black/5 rounded-2xl -rotate-3 group-hover:rotate-1 transition-transform duration-500 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[#F0A58F]/10 rounded-2xl rotate-2 group-hover:-rotate-2 transition-transform duration-500 pointer-events-none"></div>

            {/* Main Picture Block */}
            <div className="absolute inset-0 bg-white border border-black/10 rounded-2xl overflow-hidden shadow-xl shadow-black/5">
              {!imgError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src="/images/profile.jpg"
                  alt={profileData.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Fallback layout if profile picture is not provided yet */
                <div className="w-full h-full bg-gradient-to-tr from-[#FAF9F6] to-[#F7EFE5] flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-[#F0A58F]/20 flex items-center justify-center text-[#F0A58F]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-[#111111] text-lg">
                      {profileData.name}
                    </h3>
                    <p className="text-xs text-[#4B5563] mt-1">
                      {profileData.nickname}
                    </p>
                  </div>
                  <p className="text-xs text-[#9CA3AF] max-w-xs leading-relaxed italic border-t border-black/5 pt-4">
                    เพื่อเปลี่ยนรูปภาพนี้: นำไฟล์รูปถ่ายของคุณชื่อ <strong>profile.jpg</strong> ไปวางในโฟลเดอร์ <strong>/public/images/</strong>
                  </p>
                </div>
              )}
            </div>

            {/* floating badges */}
            <div className="absolute -bottom-4 -left-4 bg-[#111111] text-[#FAF9F6] px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase shadow-lg border border-white/10 hidden sm:block">
              Marketing Generalist
            </div>
            <div className="absolute -top-4 -right-4 bg-white border border-black/10 px-4 py-2 rounded-xl text-xs font-bold tracking-wider text-[#111111] shadow-lg hidden sm:block">
              Content Creator ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
