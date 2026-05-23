// Personal Portfolio Data for ณัฐสินี ชัยหิรัญวาสน์ (พลอยเพ้นท์)
// You can edit the text and details below to update the website's content.

export interface Skill {
  name: string;
  level?: string; // Optional: e.g., 'Advanced', 'Intermediate'
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface VideoProject {
  id: string;
  title: string;
  description: string;
  src: string; // Path to video in public folder, e.g., '/videos/filename.mp4'
  tags: string[];
  category: 'tiktok' | 'livestream' | 'product' | 'creative';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
}

export interface UniversityProject {
  title: string;
  role: string;
  description: string;
  tags: string[];
}

export const profileData = {
  name: "ณัฐสินี ชัยหิรัญวาสน์",
  nickname: "พลอยเพ้นท์",
  englishName: "Nutsinee Chaihirunwas",
  positioning: "Marketing Generalist | Content Creator | Social Media & Sales Support",
  intro: {
    th: "ผู้เชี่ยวชาญด้านการวางแผนคอนเทนต์และสร้างสรรค์วิดีโอสั้น (Short-form Video) ที่มีประสบการณ์ดูแลช่องทางโซเชียลมีเดีย สนับสนุนงานขาย อีคอมเมิร์ซ ไลฟ์สดขายสินค้า และติดต่อสื่อสารประสานงานลูกค้าแบบครบวงจร มีความสามารถในการวิเคราะห์ ออกแบบแคมเปญด้วยเทคโนโลยี AI เพื่อสร้างยอดขายและสร้างตัวตนแบรนด์ที่สม่ำเสมอและน่าจดจำ",
    en: "A creative Marketing Generalist and Content Creator specializing in short-form video production, social media management, livestream sales support, and e-commerce operations. Capable of planning, shooting, editing, and using AI tools to optimize workflow and drive commercial engagement."
  },
  contact: {
    email: "s.ploynutsinee@gmail.com",
    phone: "062-407-4784",
    lineId: "nutsinee2545",
    lineUrl: "https://line.me/ti/p/~nutsinee2545",
    tiktokUrl: "https://tiktok.com/@telewiz_p.k_media",
    tiktokUsername: "@telewiz_p.k_media",
    resumeDownloadUrl: "/resume/nutsinee_general_resume_thai.doc"
  }
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Content Creation & Strategy",
    skills: [
      "Content Planning & Strategy",
      "Short-form Video Production",
      "TikTok Content Creation",
      "Storytelling & Scriptwriting",
      "Livestream Selling & Presenting",
      "Character & Brand Consistency",
      "Visual Quality Control"
    ]
  },
  {
    title: "AI & Digital Marketing",
    skills: [
      "AI-assisted Content Ideation (ChatGPT/Gemini)",
      "AI Visual & Video Concepting (Kling)",
      "Meta Ads Management (Basic)",
      "TikTok Shop & Creator Center",
      "E-commerce Store Management"
    ]
  },
  {
    title: "Sales & Support",
    skills: [
      "Customer Communication (Chat Admin)",
      "Sales Support & Order Management",
      "Product Presentation",
      "Stock Checking & Inventory Coordination",
      "Basic Accounting Support"
    ]
  },
  {
    title: "Tools & Software",
    skills: [
      "CapCut (Advanced Video Editing)",
      "Canva (Graphic Design & Presentations)",
      "Adobe Photoshop (Image Editing)",
      "Microsoft Office / Google Workspace",
      "Nano Banana",
      "Kling AI / Midjourney / ChatGPT"
    ]
  }
];

export const videoProjects: VideoProject[] = [
  {
    id: "video-1",
    title: "AIS Telewiz TikTok Content Showcase",
    description: "ตัวอย่างคอนเทนต์สั้นบน TikTok สำหรับโปรโมทแคมเปญและสินค้า AIS ดึงดูดผู้ชมด้วยการเล่าเรื่องและการนำเสนอที่ชัดเจนและเป็นกันเอง",
    src: "/videos/v14044g50000cs5slpnog65pm4f4p630.mp4",
    tags: ["TikTok", "Short-form Video", "AIS Telewiz", "Product Presentation"],
    category: "tiktok"
  },
  {
    id: "video-2",
    title: "HAAS Livestream Selling Showcase",
    description: "ผลงานการไลฟ์สดนำเสนอเสื้อผ้าแบรนด์ HAAS ผสมผสานบุคลิกที่เป็นมิตร การตอบคำถามลูกค้าแบบเรียลไทม์ และการปิดการขายอย่างมืออาชีพ",
    src: "/videos/7a0b068356f96772b84d4c2345b0b038.mp4",
    tags: ["Livestream Selling", "HAAS", "Interactive", "Sales Support"],
    category: "livestream"
  },
  {
    id: "video-3",
    title: "Short-form Creative Video & Editing",
    description: "การตัดต่อวิดีโอแนวคิดสร้างสรรค์และเน้นจังหวะที่กระชับ เพิ่มความน่าสนใจให้กับการรีวิวสินค้าและการสร้างแบรนด์บนสื่อสังคมออนไลน์",
    src: "/videos/b131956f11d41a7b59a2c9dd16489446.mp4",
    tags: ["CapCut", "Video Editing", "Creative Content", "Storytelling"],
    category: "creative"
  },
  {
    id: "video-4",
    title: "Product Storytelling & Review Content",
    description: "วิดีโอแนะนำประโยชน์และฟังก์ชันการใช้งานของอุปกรณ์อิเล็กทรอนิกส์และไลฟ์สไตล์ เพื่อสร้างความมั่นใจในการตัดสินใจซื้อให้กับลูกค้า",
    src: "/videos/v1c044g50000d1p4cuvog65ob38naegg.MP4",
    tags: ["Product Showcase", "Storytelling", "Short-form Video", "Sales Support"],
    category: "product"
  },
  {
    id: "video-5",
    title: "TikTok Campaign Promotion",
    description: "คอนเทนต์วิดีโอสำหรับแคมเปญส่งเสริมการขายแบบเร่งด่วน โดยใช้เอฟเฟกต์ เสียงเพลงกระแส และการตัดต่อที่กระตุ้นยอดรับชมและคอมเมนต์",
    src: "/videos/copy_0E33F8FA-7497-4BF1-870C-255B504ACB2D (1).MOV",
    tags: ["TikTok", "Social Media Campaign", "Trending Audio", "CapCut"],
    category: "tiktok"
  },
  {
    id: "video-6",
    title: "Creative Storytelling - Brand Concept",
    description: "คลิปวิดีโอเล่าเรื่องแบรนด์ที่ออกแบบร่วมกับการใช้ AI เพื่อช่วยระดมความคิดสร้างสรรค์ นำเสนอภาพที่สม่ำเสมอตามหลักการตลาดแบรนด์",
    src: "/videos/copy_982888DC-BED1-4AE8-808B-3C0C90483958 (1).MOV",
    tags: ["AI-assisted", "Creative Direction", "Character Consistency", "Video Editing"],
    category: "creative"
  }
];

export const experiences: Experience[] = [
  {
    company: "บริษัท มาเจริญไฟฟ้า จำกัด",
    role: "Sales, Marketing & Administrative Support",
    period: "ปัจจุบัน",
    bullets: [
      "ดูแลระบบการขายออนไลน์บนแพลตฟอร์ม E-commerce และตอบรับลูกค้าผ่านแชทแอดมิน (Customer Support)",
      "จัดทำคอนเทนต์โปรโมทสินค้าบนช่องทางโซเชียลมีเดียของบริษัทเพื่อเพิ่มการเข้าถึงและความน่าเชื่อถือ",
      "ช่วยเหลือและดูแลงานเอกสารขาย การออกบิล งานบัญชีเบื้องต้น และเช็คสต็อกสินค้าเพื่อการจัดส่งที่รวดเร็ว",
      "ประสานงานและบริหารจัดการคำสั่งซื้อ (Order Management) ตั้งแต่ต้นจนเสร็จสมบูรณ์"
    ]
  },
  {
    company: "บริษัท ไพบูลย์กิจธนา จำกัด",
    role: "Sales Intern (แบรนด์ Zeberg / Nationnine)",
    period: "ระยะเวลา 3 เดือน",
    bullets: [
      "นำเสนอรายละเอียดทางเทคนิคของอุปกรณ์ไฟฟ้า (Zeberg / Nationnine) ให้กับลูกค้ากลุ่มช่างไฟ ผู้รับเหมา และร้านค้าตัวแทน",
      "ช่วยเหลือทีมขายในการผลักดันเป้าหมายยอดขายและให้บริการตอบคำถามสินค้าอย่างกระตือรือร้น",
      "ร่วมผลักดันและสร้างยอดขายรวมได้มากกว่า 3,000,000+ บาท ภายในระยะเวลาฝึกงาน 3 เดือน"
    ],
    metrics: [
      { label: "ยอดขายรวมผลงานฝึกงาน", value: "3,000,000+ บาท" },
      { label: "ระยะเวลาแคมเปญ", value: "3 เดือน" }
    ]
  },
  {
    company: "AIS / Telewiz (P.K Media)",
    role: "Social Media Content Creator & Video Editor",
    period: "ผลงานแคมเปญ",
    bullets: [
      "วางแผน คอนเซ็ปต์ ถ่ายทำ และตัดต่อคลิปสั้นลงช่องทางหลัก TikTok สำหรับ Telewiz P.K Media",
      "ทำคอนเทนต์ส่งเสริมการขายโปรโมชั่นมือถือ ซิมอินเทอร์เน็ต และการย้ายค่าย เพื่อเพิ่มยอดผู้ชมออร์แกนิก",
      "สร้างยอดผู้เข้าชมวิดีโอ (Views) รวมมากกว่า 100,000+ ครั้ง และกดไลก์กว่า 10,000+ ครั้ง",
      "สนับสนุนยอดคำสั่งซื้อและปิดการขายช่วยสร้างยอดขายรวมกว่า 300,000+ บาท ภายในระยะเวลาเพียง 1 เดือน"
    ],
    metrics: [
      { label: "ยอดชมวิดีโอสะสม (Views)", value: "100,000+" },
      { label: "ยอดไลก์สะสม (Likes)", value: "10,000+" },
      { label: "ยอดขายสร้างขึ้นใน 1 เดือน", value: "300,000+ บาท" }
    ]
  },
  {
    company: "HAAS (แบรนด์เสื้อผ้าแฟชั่น)",
    role: "Social Media Planner & Live-Streamer",
    period: "ผลงานแคมเปญไลฟ์สด",
    bullets: [
      "วางแผนและออกแบบคอนเทนต์รายสัปดาห์สำหรับช่องทาง YouTube และ TikTok เพื่อรักษาปฏิสัมพันธ์ของแบรนด์",
      "ทำหน้าที่เป็นพิธีกรไลฟ์สด (Live-Streamer) นำเสนอคอลเลกชั่นเสื้อผ้า แนะนำสไตล์แต่งตัว และจัดกิจกรรมพิเศษในไลฟ์",
      "สร้างสีสันและรักษาความสม่ำเสมอของตัวตน (Character Consistency) สอดคล้องกับภาพลักษณ์แบรนด์วัยรุ่น ทันสมัย"
    ]
  }
];

export const universityProjects: UniversityProject[] = [
  {
    title: "University Marketing & Product Concept Project",
    role: "Team Leader & Creative Director",
    description: "โปรเจกต์ศึกษาวิเคราะห์การตลาด ค้นหาจุดแข็งของสินค้า และออกแบบผลิตภัณฑ์คอนเซ็ปต์จำลองเพื่อนำเสนอหน้าชั้นเรียน โดยประยุกต์ใช้ AI ในการคิดคำโฆษณาและภาพตัวอย่างสินค้า",
    tags: ["Marketing Strategy", "AI Concepting", "Presentation"]
  },
  {
    title: "Event Booth Sales & Operations",
    role: "Sales Support & Coordinator",
    description: "ร่วมจัดกิจกรรมออกบูธจำหน่ายสินค้าภายในมหาวิทยาลัย รับหน้าที่จัดแต่งบูธ นำเสนอขายสินค้า จัดการสต็อกสินค้าหน้างาน และสรุปบัญชีรายรับ-รายจ่ายประจำวัน",
    tags: ["Event Sales", "Stock Management", "Customer Service"]
  },
  {
    title: "Media & On-Camera Experience",
    role: "Host & Voice Talent",
    description: "ได้รับโอกาสทำหน้าที่พิธีกรดำเนินกิจกรรมของสาขาวิชา และร่วมพากย์เสียงผลิตสื่อวิทยุประชาสัมพันธ์ของทางมหาวิทยาลัย พัฒนาบุคลิกภาพและการควบคุมเสียงอย่างมืออาชีพ",
    tags: ["Hosting", "Public Speaking", "Media Production"]
  }
];
