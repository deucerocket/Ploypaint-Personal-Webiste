"use client";

import { profileData } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF9F6] border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Big Statement / Title */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#F0A58F] uppercase block">
                ABOUT ME / เกี่ยวกับฉัน
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-[#111111] leading-tight">
                ขับเคลื่อนแบรนด์ด้วยการผสานความคิดสร้างสรรค์และระบบสนับสนุนงานขาย
              </h2>
            </div>
            
            <div className="border-l-2 border-[#F0A58F] pl-6 py-2 italic text-lg text-[#2D3748] font-normal hidden lg:block">
              &ldquo;ความสำเร็จของการทำคอนเทนต์ ไม่ใช่แค่จำนวนคนดูที่มาก แต่คือความเข้าใจลูกค้า ความต่อเนื่องของตัวตนแบรนด์ และการสนับสนุนเป้าหมายยอดขายได้จริง&rdquo;
            </div>
          </div>

          {/* Right Column: Detailed Bio */}
          <div className="lg:col-span-7 space-y-6 text-[#2D3748] leading-relaxed font-normal text-base md:text-lg">
            <p>
              สวัสดีค่ะ พลอยเพ้นท์ นะคะ ยินดีที่ได้รู้จักค่ะ! พลอยเพ้นท์ทำงานในบทบาท{" "}
              <strong className="text-[#111111] font-semibold">Marketing Generalist</strong> และ{" "}
              <strong className="text-[#111111] font-semibold">Content Creator</strong> ที่มุ่งเน้นการสร้างผลลัพธ์การตลาดในโลกยุคดิจิทัล 
              ด้วยการคิดวิเคราะห์อย่างเป็นระบบ ควบคู่ไปกับความคิดสร้างสรรค์ที่เข้าถึงง่าย
            </p>
            
            <p>
              พลอยเพ้นท์มีประสบการณ์รอบด้านในการสร้างสรรค์วิดีโอสั้น (Short-form Video) สำหรับแพลตฟอร์มยอดนิยมอย่าง TikTok 
              โดยดูแลรับผิดชอบตั้งแต่ขั้นตอนแรกของการวางแผนเนื้อหา เขียนสคริปต์ ถ่ายทำ ไปจนถึงการตัดต่อด้วยตัวเอง รวมถึงการนำเสนอหน้ากล้องและการไลฟ์สดขายสินค้า (Livestream Selling)
            </p>

            <p>
              ความโดดเด่นของพลอยเพ้นท์คือความสามารถในการปรับตัวและเรียนรู้งานที่หลากหลาย ไม่เพียงแต่มีความคิดสร้างสรรค์ในการทำคอนเทนต์ 
              แต่ยังมีประสบการณ์ที่แข็งแกร่งในระบบงานสนับสนุนการขาย เช่น การประสานงานออร์เดอร์ เช็คสต็อกสินค้า ตอบแชทดูแลลูกค้า (Chat Admin) 
              และจัดการบัญชีเบื้องต้น ทำให้เข้าใจหัวใจสำคัญของกระบวนการขายแบบ E-commerce เป็นอย่างดี
            </p>

            <p>
              นอกจากนี้ พลอยเพ้นท์ยังประยุกต์ใช้เครื่องมือ AI ในยุคปัจจุบัน (เช่น ChatGPT, Gemini และ Kling AI) ในการระดมความคิด (Ideation) 
              วางโครงเรื่อง และจำลองภาพแคมเปญ เพื่อเพิ่มประสิทธิภาพในการทำงานให้รวดเร็วและตอบโจทย์เทรนด์การตลาดใหม่ๆ อยู่เสมอ
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-black/5">
              <div>
                <span className="block text-3xl font-heading font-black text-[#111111]">
                  100k+
                </span>
                <span className="text-xs text-[#9CA3AF]">TikTok Video Views</span>
              </div>
              <div>
                <span className="block text-3xl font-heading font-black text-[#111111]">
                  3M+
                </span>
                <span className="text-xs text-[#9CA3AF]">Sales Intern Contribution</span>
              </div>
              <div>
                <span className="block text-3xl font-heading font-black text-[#111111]">
                  100%
                </span>
                <span className="text-xs text-[#9CA3AF]">Character & Quality Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
