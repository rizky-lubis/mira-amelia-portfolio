import React from 'react';
import { Sparkles, Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A4E69] text-[#FAFAFA] pt-16 pb-12 border-t border-[#8B8B95]/30 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4D4DB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#8B8B95]/40">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 font-serif italic text-xl font-bold text-white">
              <div className="w-8 h-8 rounded-full bg-[#D4D4DB] flex items-center justify-center text-[#4A4E69]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>{PROFILE_DATA.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#E9E9ED] max-w-md leading-relaxed font-light">
              {PROFILE_DATA.tagline}
            </p>
            <div className="text-xs text-[#D4D4DB] font-mono tracking-wider">
              Universitas Nusa Mandiri • IPK {PROFILE_DATA.gpa}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-widest mb-2 font-mono">Navigasi</div>
            <div className="flex flex-col gap-2 text-xs font-light">
              <a href="#about" className="hover:text-[#D4D4DB] transition-colors">Tentang Profil</a>
              <a href="#projects" className="hover:text-[#D4D4DB] transition-colors">Proyek & Karya</a>
              <a href="#gallery" className="hover:text-[#D4D4DB] transition-colors">Galeri Foto Karya</a>
              <a href="#skills" className="hover:text-[#D4D4DB] transition-colors">Keahlian & Sertifikasi</a>
              <a href="#blog" className="hover:text-[#D4D4DB] transition-colors">Mini Blog & Opini</a>
              <a href="#contact" className="hover:text-[#D4D4DB] transition-colors">Kontak Kami</a>
            </div>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-widest mb-2 font-mono">Terhubung</div>
            <div className="flex items-center gap-2">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-[#D4D4DB] text-white hover:text-[#4A4E69] flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-[#D4D4DB] text-white hover:text-[#4A4E69] flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-[#D4D4DB] text-white hover:text-[#4A4E69] flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="text-xs text-[#E9E9ED] pt-2 font-light">
              {PROFILE_DATA.location}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9E9ED]">
          <div className="flex items-center gap-2 font-light">
            <span>© 2026 Mira Amelia Prayitno. Geometric Balance Theme</span>
            <Heart className="w-3.5 h-3.5 text-[#EFEFF2] fill-[#EFEFF2]" />
            <a
              href="#admin"
              className="text-white/30 hover:text-white/80 transition-colors ml-2"
              title="Portal Admin (Akses Khusus #admin)"
            >
              • Admin
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-[#D4D4DB] text-[#FAFAFA] hover:text-[#4A4E69] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
