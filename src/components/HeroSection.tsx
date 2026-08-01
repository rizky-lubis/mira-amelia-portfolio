import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown, Download, Award, GraduationCap, Github, Linkedin, Mail, Shield, CheckCircle2, MessageSquare } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCVModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCVModal }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center">
      {/* Background soft ambient pastel glowing blobs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#FDE2E4]/50 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#DBCDF0]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#E2ECE9]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2ECE9] border border-[#C9E4DE] text-[#4A4E69] text-xs font-medium mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9A8C98] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9A8C98]"></span>
              </span>
              <span className="tracking-wide">Open for Software Engineer Opportunities</span>
              <Sparkles className="w-3.5 h-3.5 text-[#9A8C98] ml-0.5" />
            </div>

            {/* Main Greeting Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A4E69] tracking-tight leading-tight mb-4">
              Halo, Saya <span className="font-serif italic font-normal text-[#9A8C98] border-b-2 border-[#FDE2E4]">Mira Amelia</span>
            </h1>

            {/* Sub-Title */}
            <p className="text-lg sm:text-xl font-medium text-[#4A4E69] mb-4 flex items-center gap-2 flex-wrap">
              <span>{PROFILE_DATA.role}</span>
              <span className="text-[#C9E4DE]">•</span>
              <span className="text-[#9A8C98] font-semibold">{PROFILE_DATA.subRole}</span>
            </p>

            {/* Description */}
            <p className="text-[#4A4E69]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-light">
              Lulusan Informatika <strong className="text-[#4A4E69] font-semibold">Universitas Nusa Mandiri (IPK {PROFILE_DATA.gpa})</strong> dengan spesialisasi <span className="bg-[#E2ECE9] text-[#4A4E69] px-2 py-0.5 rounded-md font-medium border-l-2 border-[#C9E4DE]">Full Stack Web Development</span>, <span className="bg-[#FDE2E4] text-[#4A4E69] px-2 py-0.5 rounded-md font-medium border-l-2 border-[#F2C6DE]">Software Testing (QA)</span>, dan <span className="bg-[#DBCDF0]/60 text-[#4A4E69] px-2 py-0.5 rounded-md font-medium border-l-2 border-[#9A8C98]">Artificial Intelligence (AI & ML)</span>. Pengembang aplikasi bersertifikat resmi HKI, Cisco & Huawei.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#9A8C98] hover:bg-[#4A4E69] text-white font-medium text-sm shadow-sm transition-all transform hover:-translate-y-0.5 uppercase tracking-wider text-xs"
              >
                <span>Jelajahi Karya ✧</span>
              </a>

              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-[#FCF8F4] text-[#4A4E69] font-medium text-xs uppercase tracking-wider border border-[#E2ECE9] shadow-xs hover:border-[#C9E4DE] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#9A8C98]" />
                <span>Download CV (PDF)</span>
              </button>

              <a
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#E2ECE9] hover:bg-[#C9E4DE] text-[#4A4E69] font-medium text-xs uppercase tracking-wider border border-[#C9E4DE] transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#4A4E69]" />
                <span>Chat WhatsApp</span>
              </a>
            </div>

            {/* Quick Links & Info */}
            <div className="flex items-center gap-6 pt-6 border-t border-[#E2ECE9] w-full">
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#E2ECE9] flex items-center justify-center text-[#4A4E69] hover:text-[#9A8C98] hover:border-[#C9E4DE] hover:bg-[#FCF8F4] transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE_DATA.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#E2ECE9] flex items-center justify-center text-[#4A4E69] hover:text-[#9A8C98] hover:border-[#C9E4DE] hover:bg-[#FCF8F4] transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="w-9 h-9 rounded-full bg-white border border-[#E2ECE9] flex items-center justify-center text-[#4A4E69] hover:text-[#9A8C98] hover:border-[#C9E4DE] hover:bg-[#FCF8F4] transition-all"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-[#E2ECE9]" />

              <div className="flex items-center gap-1.5 text-xs text-[#9A8C98] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#C9E4DE]"></span>
                <span>{PROFILE_DATA.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Aesthetic Photo Card with Floating Soft Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Pastel Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#FDE2E4] via-[#C9E4DE] to-[#DBCDF0] blur-md opacity-80" />

              {/* Main Avatar Card */}
              <div className="relative rounded-3xl bg-white p-4 border border-[#FDE2E4] shadow-sm">
                
                {/* Photo Frame Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#FCF8F4] flex items-center justify-center border border-[#E2ECE9]">
                  
                  {/* High quality aesthetic portrait illustration / photo */}
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Mira Amelia Prayitno - Software Engineer"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                  />

                  {/* Soft Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4E69]/80 via-transparent to-transparent" />

                  {/* Text on Image bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-[#C9E4DE] font-semibold mb-0.5">
                      Universitas Nusa Mandiri
                    </p>
                    <h3 className="text-lg font-serif italic">Mira Amelia Prayitno</h3>
                    <p className="text-xs text-slate-200 font-light">S1 Teknik Informatika • Software Engineer</p>
                  </div>
                </div>

                {/* Floating Badge 1: High GPA */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 -right-2 sm:-right-4 p-3 rounded-2xl shadow-sm border border-[#E2ECE9] flex items-center gap-3 bg-white"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FDE2E4] flex items-center justify-center text-[#4A4E69] font-bold text-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#9A8C98] uppercase tracking-wider">IPK Kumulatif</div>
                    <div className="text-base font-bold text-[#4A4E69]">3.89 <span className="text-xs text-[#9A8C98] font-medium">/ 4.00</span></div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Hak Cipta HKI */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-4 -left-2 sm:-left-4 p-3 rounded-2xl shadow-sm border border-[#E2ECE9] flex items-center gap-3 bg-white"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9E4DE] flex items-center justify-center text-[#4A4E69]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#9A8C98] uppercase tracking-wider">Hak Cipta (HKI) Resmi</div>
                    <div className="text-xs font-bold text-[#4A4E69]">DJKI Kemenkumham RI</div>
                  </div>
                </motion.div>

                {/* Floating Badge 3: MTCNA Certified */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1/2 -left-6 hidden sm:flex px-3 py-2 rounded-xl shadow-xs border border-[#E2ECE9] items-center gap-2 bg-white"
                >
                  <Shield className="w-4 h-4 text-[#9A8C98]" />
                  <span className="text-xs font-semibold text-[#4A4E69]">MTCNA Certified</span>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
