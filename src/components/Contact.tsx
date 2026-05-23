"use client";

import { profileData } from "../data/portfolio";

export default function Contact() {
  return (
    <footer id="contact" className="py-24 bg-[#111111] text-[#FAF9F6] border-t border-white/5 relative overflow-hidden">
      {/* Decorative subtle visual */}
      <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 bg-[#F0A58F]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: CTA Title */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#F0A58F] uppercase block">
              CONTACT ME / ติดต่อฉัน
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white leading-tight">
              มาร่วมสร้างสรรค์แคมเปญและพัฒนาธุรกิจไปด้วยกัน
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed max-w-md">
              หากคุณกำลังมองหา Marketing Generalist หรือ Content Creator วิดีโอสั้น ที่สามารถช่วยงานขาย ไลฟ์สดขายของ และจัดการงานระบบได้ พลอยเพ้นท์ยินดีร่วมงานค่ะ! สามารถติดต่อพูดคุยรายละเอียดเพิ่มเติมได้ทุกช่องทาง
            </p>

            <div className="pt-4">
              <a
                href={profileData.contact.resumeDownloadUrl}
                download
                className="inline-flex items-center space-x-2 px-5 py-3.5 bg-[#FAF9F6] text-[#111111] hover:bg-[#F0A58F] hover:text-[#111111] transition-all duration-300 rounded-xl text-xs font-bold tracking-wider uppercase"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>ดาวน์โหลด Resume ของพลอยเพ้นท์</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Channels Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Email Card */}
            <a
              href={`mailto:${profileData.contact.email}`}
              className="group bg-zinc-900 border border-white/5 hover:border-[#F0A58F]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center text-[#F0A58F]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-[10px] text-zinc-500 group-hover:text-[#F0A58F] font-bold tracking-wider uppercase transition-colors">
                  ส่งอีเมล &rarr;
                </span>
              </div>
              <div>
                <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Email Address</h3>
                <p className="text-sm font-bold text-white mt-1 break-all">{profileData.contact.email}</p>
              </div>
            </a>

            {/* Line ID Card */}
            <a
              href={profileData.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900 border border-white/5 hover:border-[#F0A58F]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center text-[#F0A58F]">
                  {/* Chat Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.598.598 0 0 1-.755-.685l.89-3.336C4.837 15.694 4 13.934 4 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                </div>
                <span className="text-[10px] text-zinc-500 group-hover:text-[#F0A58F] font-bold tracking-wider uppercase transition-colors">
                  เพิ่มเพื่อน &rarr;
                </span>
              </div>
              <div>
                <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Line ID</h3>
                <p className="text-sm font-bold text-white mt-1">{profileData.contact.lineId}</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${profileData.contact.phone}`}
              className="group bg-zinc-900 border border-white/5 hover:border-[#F0A58F]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center text-[#F0A58F]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.127-4.1-6.93-6.93l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <span className="text-[10px] text-zinc-500 group-hover:text-[#F0A58F] font-bold tracking-wider uppercase transition-colors">
                  โทรเลย &rarr;
                </span>
              </div>
              <div>
                <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Phone Number</h3>
                <p className="text-sm font-bold text-white mt-1">{profileData.contact.phone}</p>
              </div>
            </a>

            {/* TikTok Card */}
            <a
              href={profileData.contact.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900 border border-white/5 hover:border-[#F0A58F]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center text-[#F0A58F]">
                  {/* Share Screen icon or Video icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <span className="text-[10px] text-zinc-500 group-hover:text-[#F0A58F] font-bold tracking-wider uppercase transition-colors">
                  เปิดช่อง &rarr;
                </span>
              </div>
              <div>
                <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">TikTok Channel</h3>
                <p className="text-sm font-bold text-white mt-1 break-all">{profileData.contact.tiktokUsername}</p>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="pt-16 mt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} {profileData.name} ({profileData.nickname}). All rights reserved.</p>
          <p className="font-light">
            Designed for Marketing & Content Creators. Powered by Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
