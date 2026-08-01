import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Award, Code2, Layers, Database, Cpu, Wrench, Shield, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES, CERTIFICATES } from '../data/portfolioData';

export const SkillsCertificationsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      default: return <Wrench className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Skills */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E9ED] text-[#4A4E69] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#D4D4DB]">
            <Sparkles className="w-3.5 h-3.5 text-[#8B8B95]" />
            <span>Keahlian & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4E69] font-display">
            Tech Stack & <span className="font-serif italic text-[#8B8B95] font-normal border-b-2 border-[#EFEFF2]">Kompetensi</span>
          </h2>
          <p className="text-[#8B8B95] text-sm sm:text-base mt-2 font-light">
            Pilihan bahasa pemrogram, framework, basis data, kecerdasan buatan, hingga infrastruktur jaringan.
          </p>
        </div>

        {/* Skills Category Selector Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-[#8B8B95] text-white shadow-xs'
                  : 'bg-white text-[#4A4E69] hover:bg-[#FAFAFA] border border-[#E9E9ED]'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Display Box */}
        <motion.div
          key={activeCategoryIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9E9ED] shadow-sm max-w-4xl mx-auto mb-24"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E9E9ED]">
            <div className="w-10 h-10 rounded-2xl bg-[#E9E9ED] flex items-center justify-center text-[#4A4E69]">
              {getCategoryIcon(SKILL_CATEGORIES[activeCategoryIndex].iconName)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4A4E69] font-serif italic">
                {SKILL_CATEGORIES[activeCategoryIndex].title}
              </h3>
              <p className="text-xs text-[#8B8B95] font-light">
                Alat dan teknologi yang dikuasai untuk mendukung performa sistem & kualitas kode.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-4 py-2 rounded-2xl text-xs font-semibold bg-[#FAFAFA] text-[#4A4E69] border border-[#E9E9ED] shadow-2xs hover:scale-105 transition-transform cursor-default flex items-center gap-2"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#8B8B95]" />
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Header Certifications */}
        <div id="certifications" className="text-center max-w-2xl mx-auto mb-12 pt-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4D4DB] text-[#4A4E69] text-xs font-semibold uppercase tracking-widest mb-3 border border-white shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#4A4E69]" />
            <span>Lisensi & Sertifikasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4E69] font-display">
            Sertifikasi <span className="font-serif italic text-[#8B8B95] font-normal border-b-2 border-[#EFEFF2]">Kredensial</span>
          </h2>
          <p className="text-[#8B8B95] text-sm sm:text-base mt-2 font-light">
            Pengakuan resmi dari institusi global seperti Cisco, Huawei, DJKI, dan MikroTik.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl border border-[#E9E9ED] hover:border-[#D4D4DB] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl p-2 rounded-2xl bg-[#FAFAFA] border border-[#E9E9ED] inline-block">
                    {cert.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#E9E9ED] text-[#4A4E69] text-[10px] font-mono font-bold uppercase tracking-wider">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-base font-bold font-serif italic text-[#4A4E69] mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-[#8B8B95] mb-3 uppercase tracking-wider">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E9E9ED] flex items-center justify-between text-[11px] text-[#8B8B95]">
                <span>Berlaku: {cert.expiryDate || 'Lifetime'}</span>
                <span className="font-bold text-[#4A4E69] flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#8B8B95]" />
                  <span>Verified</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
