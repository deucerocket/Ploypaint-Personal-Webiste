"use client";

import { useState, useEffect } from "react";
import { profileData } from "../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "เกี่ยวกับ", href: "#about" },
    { label: "ทักษะ", href: "#skills" },
    { label: "ผลงานวิดีโอ", href: "#portfolio" },
    { label: "ประสบการณ์", href: "#experience" },
    { label: "โปรเจกต์", href: "#projects" },
    { label: "ติดต่อ", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F6]/85 backdrop-blur-md border-b border-black/5 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a
          href="#"
          className="text-lg font-heading font-extrabold tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
        >
          {profileData.name}
          <span className="text-[#F0A58F] font-normal ml-2 text-sm hidden sm:inline">
            ({profileData.nickname})
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#4B5563] hover:text-[#111111] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#F0A58F] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profileData.contact.resumeDownloadUrl}
            download
            className="text-xs font-semibold px-4 py-2 bg-[#111111] text-[#FAF9F6] rounded-full hover:bg-[#F0A58F] hover:text-[#111111] transition-all duration-300"
          >
            ดาวน์โหลด Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-[2px] bg-[#111111] transform transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-[#111111] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-[#111111] transform transition-transform duration-300 ${
              isOpen ? "-rotate-45 translate-y-[-8px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-[#FAF9F6] z-40 transition-transform duration-300 md:hidden flex flex-col justify-start pt-12 px-8 border-t border-black/5 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-[#111111] hover:text-[#F0A58F] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6 border-t border-black/5">
            <a
              href={profileData.contact.resumeDownloadUrl}
              download
              onClick={() => setIsOpen(false)}
              className="inline-block text-center text-sm font-semibold w-full py-3 bg-[#111111] text-[#FAF9F6] rounded-xl hover:bg-[#F0A58F] hover:text-[#111111] transition-colors"
            >
              ดาวน์โหลด Resume (PDF/Word)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
