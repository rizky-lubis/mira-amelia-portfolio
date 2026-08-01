import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Sparkles, GraduationCap, Award, Briefcase, FileText, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA, PROJECTS, CERTIFICATES } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#4A4E69]/70 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col relative my-auto border border-[#E2ECE9] overflow-hidden"
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-5 bg-[#4A4E69] text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C9E4DE] flex items-center justify-center text-[#4A4E69]">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold font-serif italic leading-none">
                  Curriculum Vitae — {PROFILE_DATA.name}
                </h3>
                <span className="text-[11px] text-[#C9E4DE] font-mono">
                  Software Engineer • IPK 3.89 / 4.00
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#C9E4DE] hover:text-[#4A4E69] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cetak / Simpan PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/10 hover:bg-[#FDE2E4] hover:text-[#4A4E69] text-white transition-colors cursor-pointer"
                aria-label="Close CV preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Document Content */}
          <div className="p-6 sm:p-10 overflow-y-auto font-sans text-[#4A4E69] text-xs sm:text-sm leading-relaxed space-y-6 print:p-0 print:overflow-visible">
            
            {/* Header / Name Section */}
            <div className="border-b border-[#E2ECE9] pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#4A4E69] font-serif italic">
                  {PROFILE_DATA.name}
                </h1>
                <p className="text-xs font-bold text-[#9A8C98] tracking-widest uppercase mt-0.5">
                  {PROFILE_DATA.role}
                </p>
                <p className="text-xs text-[#9A8C98] mt-1 font-light">
                  {PROFILE_DATA.university} — Bachelor of Informatics (IPK 3.89/4.00)
                </p>
              </div>

              <div className="text-xs text-[#4A4E69] space-y-1 font-mono sm:text-right">
                <div>📞 {PROFILE_DATA.phoneFormatted}</div>
                <div>✉️ {PROFILE_DATA.email}</div>
                <div>🌐 {PROFILE_DATA.linkedIn}</div>
                <div>📍 {PROFILE_DATA.location}</div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#4A4E69] border-b-2 border-[#C9E4DE] pb-1 mb-2 font-mono">
                SUMMARY
              </h2>
              <p className="text-[#4A4E69]/90 leading-relaxed font-light">
                {PROFILE_DATA.summary}
              </p>
            </div>

            {/* Academic Experience & Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#4A4E69] border-b-2 border-[#C9E4DE] pb-1 mb-3 font-mono">
                PROJECT EXPERIENCE
              </h2>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-2xl bg-[#FCF8F4] border border-[#E2ECE9]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-[#4A4E69]">
                      <span className="font-serif italic">{proj.title} — <span className="text-[#9A8C98] font-normal">{proj.role}</span></span>
                      <span className="text-xs text-[#9A8C98] font-mono font-normal">{proj.period}</span>
                    </div>
                    <div className="text-xs text-[#9A8C98] font-medium mb-1.5">{proj.subtitle}</div>
                    <ul className="list-disc list-inside space-y-1 text-[#4A4E69] text-xs font-light">
                      {proj.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#4A4E69] border-b-2 border-[#C9E4DE] pb-1 mb-2 font-mono">
                EDUCATION
              </h2>
              <div className="flex justify-between items-center font-bold text-[#4A4E69]">
                <div>
                  <div className="font-serif italic">{PROFILE_DATA.university} — {PROFILE_DATA.degree}</div>
                  <div className="text-xs text-[#9A8C98] font-semibold">IPK: {PROFILE_DATA.gpa}</div>
                </div>
                <div className="text-xs text-[#9A8C98] font-mono font-normal">2023 - Present</div>
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#4A4E69] border-b-2 border-[#C9E4DE] pb-1 mb-2 font-mono">
                LICENSES & CERTIFICATIONS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CERTIFICATES.map((cert) => (
                  <div key={cert.id} className="p-2.5 rounded-xl border border-[#E2ECE9] bg-[#FCF8F4] text-xs">
                    <strong className="block text-[#4A4E69] font-serif italic">{cert.title}</strong>
                    <span className="text-[#9A8C98] font-medium">{cert.issuer}</span> ({cert.issueDate})
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#4A4E69] border-b-2 border-[#C9E4DE] pb-1 mb-2 font-mono">
                SKILLS & TOOLS
              </h2>
              <div className="text-xs text-[#4A4E69] space-y-1 font-light">
                <div><strong className="font-semibold text-[#4A4E69]">Programming:</strong> PHP, Python, Java, JavaScript, Dart, HTML, CSS</div>
                <div><strong className="font-semibold text-[#4A4E69]">Frameworks:</strong> Laravel, Flask, Flutter, Tailwind CSS, React</div>
                <div><strong className="font-semibold text-[#4A4E69]">Database & BaaS:</strong> MySQL, Supabase, PocketBase</div>
                <div><strong className="font-semibold text-[#4A4E69]">Networking & Security:</strong> Cisco Networking (VLAN, OSPF, NAT), MTCNA</div>
                <div><strong className="font-semibold text-[#4A4E69]">Dev Tools:</strong> Git/GitHub, Postman, Visual Studio Code, Laragon, XAMPP, Cisco Packet Tracer</div>
              </div>
            </div>

          </div>

          {/* Footer Close */}
          <div className="p-4 bg-[#FCF8F4] border-t border-[#E2ECE9] flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-2xl bg-[#9A8C98] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Tutup Modal
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
