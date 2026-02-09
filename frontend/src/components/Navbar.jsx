import healexLogo from "../assets/healex_logo_text.jpeg";
import logoIcon from "../assets/healex_logo.jpeg";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-4">
          <img
            src={logoIcon}
            alt="Healex Logo"
            className="h-16 w-16"
          />

          <div className="leading-tight">
            <h1 className="text-4xl font-bold tracking-wide">
              Healex
            </h1>
            <p className="text-xs tracking-widest opacity-90">
              YOUR HEALTH INSURANCE EXPERT
            </p>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="space-x-6 hidden md:flex text-xl">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#services" className="hover:text-gray-200">Services</a>
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#contact-form" className="hover:text-gray-200">Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/917356245467"
            className="bg-white text-primary font-semibold px-4 py-2 rounded-lg hidden md:block"
          >
            WhatsApp
          </a>

          {/* HAMBURGER (Mobile) */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-primary px-6 pb-6 space-y-4 text-lg">
          <a href="#" className="block" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" className="block" onClick={() => setMenuOpen(false)}>Plans</a>
          <a href="#about" className="block" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact-form" className="block" onClick={() => setMenuOpen(false)}>Contact</a>

          <a
            href="https://wa.me/917356245467"
            className="inline-block bg-white text-primary font-semibold px-4 py-2 rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}