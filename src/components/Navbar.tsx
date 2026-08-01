import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Download, FileText, Send } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Karya / Proyek', href: '#projects' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Sertifikasi', href: '#certifications' },
    { name: 'Mini Blog', href: '#blog' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-3 pb-2">
      <div
        className={`max-w-6xl mx-auto rounded-3xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 px-5 border border-[#E2ECE9]'
            : 'bg-white/60 backdrop-blur-md py-4 px-6 border border-[#E2ECE9]/80'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 font-display text-lg font-bold text-[#4A4E69] hover:text-[#9A8C98] transition-colors"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#FDE2E4] via-[#C9E4DE] to-[#DBCDF0] flex items-center justify-center text-[#4A4E69] shadow-inner border border-white group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-[#9A8C98]" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight tracking-tight text-[#4A4E69] font-semibold text-base font-serif italic">
                Mira Amelia.
              </span>
              <span className="text-[10px] text-[#9A8C98] font-mono tracking-widest uppercase font-medium">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#E2ECE9]/50 p-1.5 rounded-full border border-[#E2ECE9]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-white text-[#4A4E69] shadow-xs font-bold border border-[#C9E4DE]'
                      : 'text-[#9A8C98] hover:text-[#4A4E69] hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenCVModal}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-[#4A4E69] bg-white hover:bg-[#FCF8F4] border border-[#E2ECE9] rounded-full shadow-xs hover:border-[#C9E4DE] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#9A8C98]" />
              <span>CV</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-[#9A8C98] hover:bg-[#4A4E69] rounded-full uppercase tracking-widest transition-all shadow-xs"
            >
              <Send className="w-3 h-3" />
              <span>Hubungi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#4A4E69] hover:text-[#9A8C98] rounded-2xl bg-white border border-[#E2ECE9]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-md rounded-3xl border border-[#E2ECE9] shadow-md animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-[#4A4E69] hover:text-[#9A8C98] hover:bg-[#FCF8F4] rounded-2xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E2ECE9] flex flex-col gap-2 mt-1">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#4A4E69] bg-[#E2ECE9] hover:bg-[#C9E4DE] rounded-2xl transition-colors"
              >
                <FileText className="w-4 h-4 text-[#9A8C98]" />
                <span>Lihat / Print CV Complete</span>
              </button>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#9A8C98] hover:bg-[#4A4E69] rounded-2xl uppercase tracking-widest shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Hubungi Saya</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
