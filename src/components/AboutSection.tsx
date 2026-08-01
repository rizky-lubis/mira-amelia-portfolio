import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Code, CheckCircle, FileText, Sparkles, UserCheck, BookOpen, Layers } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCVModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCVModal }) => {
  return (
    <section id="about" className="py-20 relative bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2ECE9] text-[#4A4E69] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#C9E4DE]">
            <Sparkles className="w-3.5 h-3.5 text-[#9A8C98]" />
            <span>Profil Lengkap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4E69] font-display">
            Tentang <span className="font-serif italic text-[#9A8C98] font-normal border-b-2 border-[#FDE2E4]">Mira Amelia</span>
          </h2>
          <p className="text-[#9A8C98] text-sm sm:text-base mt-2 font-light">
            Perjalanan akademik, latar belakang teknis, dan passion dalam dunia rekayasa perangkat lunak.
          </p>
        </div>

        {/* Top Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PROFILE_DATA.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-5 rounded-3xl border border-[#E2ECE9] text-center hover:border-[#C9E4DE] transition-all shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#4A4E69] font-display mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#4A4E69] uppercase tracking-wider">{stat.label}</div>
              <div className="text-[11px] text-[#9A8C98] mt-0.5 font-light">{stat.subtitle}</div>
            </motion.div>
          ))}
        </div>

        {/* Grid Layout: Left Bio & Right Academic/Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Summary & Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E2ECE9] shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#4A4E69] mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#9A8C98]" />
              <span>Ringkasan Profesional</span>
            </h3>

            <p className="text-[#4A4E69] text-sm sm:text-base leading-relaxed mb-4 font-light">
              {PROFILE_DATA.summary}
            </p>

            <p className="text-[#4A4E69]/80 text-sm leading-relaxed mb-6 font-light">
              Selama menempuh studi di Universitas Nusa Mandiri, saya aktif memimpin dan berkontribusi dalam berbagai proyek full stack web, pengembangan kecerdasan buatan, hingga pengujian perangkat lunak yang berhasil mengantongi Hak Cipta resmi dari DJKI Kemenkumham RI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-[#FCF8F4] border-l-4 border-[#C9E4DE] flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#9A8C98] shrink-0 mt-0.5" />
                <div className="text-xs text-[#4A4E69]">
                  <strong className="block text-[#4A4E69] font-semibold mb-0.5">Problem-Solving & Detail Oriented</strong>
                  Terbiasa menganalisis struktur data dan alur sistem secara teliti.
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FCF8F4] border-l-4 border-[#FDE2E4] flex items-start gap-2.5">
                <UserCheck className="w-4 h-4 text-[#9A8C98] shrink-0 mt-0.5" />
                <div className="text-xs text-[#4A4E69]">
                  <strong className="block text-[#4A4E69] font-semibold mb-0.5">Team Leadership & Collaboration</strong>
                  Pengalaman memimpin tim pengembang dan berkolaborasi secara remote.
                </div>
              </div>
            </div>

            <button
              onClick={onOpenCVModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#9A8C98] hover:bg-[#4A4E69] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>Buka Kurikulum Vitae (CV) Lengkap</span>
            </button>
          </motion.div>

          {/* Right Column: Education & Highlight Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Education Card */}
            <div className="bg-[#E2ECE9] p-6 rounded-3xl border border-[#C9E4DE] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#4A4E69]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-[#4A4E69] text-xs font-bold uppercase tracking-wider">
                  2023 - Present
                </span>
              </div>

              <h4 className="text-lg font-bold text-[#4A4E69] font-display">
                {PROFILE_DATA.university}
              </h4>
              <p className="text-xs font-medium text-[#9A8C98] mb-3">
                {PROFILE_DATA.degree}
              </p>

              <div className="p-3.5 rounded-2xl bg-white border border-[#C9E4DE] flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] text-[#9A8C98] uppercase tracking-wider font-bold block">IPK Kumulatif</span>
                  <span className="text-lg font-extrabold text-[#4A4E69] font-display">3.89 <span className="text-xs text-[#9A8C98] font-normal">/ 4.00</span></span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#C9E4DE] text-[#4A4E69] text-xs font-bold">
                  Cum Laude Potential
                </div>
              </div>
            </div>

            {/* Core Competency Highlights */}
            <div className="bg-white p-6 rounded-3xl border border-[#E2ECE9] shadow-sm">
              <h4 className="text-xs font-bold text-[#9A8C98] uppercase tracking-widest mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#9A8C98]" />
                <span>Pilar Keahlian Utama</span>
              </h4>

              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-[#FCF8F4] border border-[#E2ECE9] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#4A4E69]">Full Stack Web (Laravel, React, PHP, MySQL)</span>
                  <span className="text-[10px] font-bold text-[#4A4E69] bg-[#C9E4DE] px-2.5 py-1 rounded-full">Expert</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FCF8F4] border border-[#E2ECE9] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#4A4E69]">Software QA & Technical Documentation</span>
                  <span className="text-[10px] font-bold text-[#4A4E69] bg-[#FDE2E4] px-2.5 py-1 rounded-full">Experienced</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FCF8F4] border border-[#E2ECE9] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#4A4E69]">Machine Learning & AI Integration</span>
                  <span className="text-[10px] font-bold text-[#4A4E69] bg-[#DBCDF0] px-2.5 py-1 rounded-full">Advanced</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FCF8F4] border border-[#E2ECE9] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#4A4E69]">Networking & Security (Cisco, MTCNA)</span>
                  <span className="text-[10px] font-bold text-[#4A4E69] bg-[#E2ECE9] px-2.5 py-1 rounded-full">Certified</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
