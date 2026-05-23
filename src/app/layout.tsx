import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Prompt } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ณัฐสินี ชัยหิรัญวาสน์ (พลอยเพ้นท์) | Marketing & Content Creator Portfolio",
  description: "Portfolio of ณัฐสินี ชัยหิรัญวาสน์ (พลอยเพ้นท์) - Marketing Generalist, Content Creator, Social Media & Sales Support. View projects, experience, and short-form video work.",
  keywords: ["ณัฐสินี ชัยหิรัญวาสน์", "พลอยเพ้นท์", "Ploypaint", "Marketing Generalist", "Content Creator", "TikTok Creator", "Social Media Support", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${plusJakartaSans.variable} ${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

