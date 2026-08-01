import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ExternalLink, ArrowRight, ShieldCheck, Award, Layers, Calendar, CheckCircle2, X, Code2, Cpu } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { getStoredProjects, PROJECTS_UPDATED_EVENT } from '../services/projectStorage';

export const ProjectsSection: React.FC = () => {
  const [projectsList, setProjectsList] = useState<Project[]>(getStoredProjects());
  const [activeTab, setActiveTab] = useState<string>('Semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleProjectsUpdated = () => {
      setProjectsList(getStoredProjects());
    };

    window.addEventListener(PROJECTS_UPDATED_EVENT, handleProjectsUpdated);
    return () => {
      window.removeEventListener(PROJECTS_UPDATED_EVENT, handleProjectsUpdated);
    };
  }, []);

  const categories = ['Semua', 'Full Stack', 'AI & ML', 'QA & Web', 'Community'];

  const filteredProjects = activeTab === 'Semua'
    ? projectsList
    : projectsList.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 relative bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E9ED] text-[#4A4E69] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#D4D4DB]">
            <Sparkles className="w-3.5 h-3.5 text-[#8B8B95]" />
            <span>Karya & Proyek Terpilih</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4E69] font-display">
            Galeri <span className="font-serif italic text-[#8B8B95] font-normal border-b-2 border-[#EFEFF2]">Portofolio Karya</span>
          </h2>
          <p className="text-[#8B8B95] text-sm sm:text-base mt-2 font-light">
            Rangkaian aplikasi full-stack, model machine learning, serta sistem tervalidasi QA dan HKI.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#8B8B95] text-white shadow-xs'
                  : 'bg-white text-[#4A4E69] hover:bg-[#FAFAFA] border border-[#E9E9ED]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#E9E9ED] hover:border-[#D4D4DB] transition-all group flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Project Image Header */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-[#FAFAFA] border-b border-[#E9E9ED]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4E69]/80 via-[#4A4E69]/20 to-transparent" />

                  {/* Top Category Badge & Copyright Badge if exists */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[#4A4E69] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {project.category}
                    </span>
                    {project.copyrightInfo && (
                      <span className="px-3 py-1 rounded-full bg-[#D4D4DB] text-[#4A4E69] text-[10px] font-bold border border-[#E9E9ED] flex items-center gap-1 shadow-xs">
                        <Award className="w-3 h-3 text-[#4A4E69]" />
                        <span>HKI Copyrighted</span>
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-[10px] font-mono text-[#D4D4DB] font-medium flex items-center gap-2 mb-1 tracking-widest uppercase">
                      <Calendar className="w-3 h-3" />
                      <span>{project.period}</span>
                    </div>
                    <h3 className="text-xl font-bold font-serif italic leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Body Info */}
                <div className="p-6">
                  {/* Role Tag */}
                  <div className="text-xs font-semibold text-[#4A4E69] bg-[#E9E9ED] px-3 py-1 rounded-full inline-block mb-3 border border-[#D4D4DB]">
                    Role: {project.role}
                  </div>

                  {/* Subtitle / Short Description */}
                  <p className="text-[#4A4E69]/80 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 font-light">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet */}
                  <div className="p-3 rounded-2xl bg-[#FAFAFA] border-l-4 border-[#D4D4DB] mb-5 text-xs text-[#4A4E69] flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#8B8B95] shrink-0 mt-0.5" />
                    <span><strong>Highlight:</strong> {project.highlights}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#FAFAFA] text-[#4A4E69] border border-[#E9E9ED]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Detail Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-2xl bg-[#8B8B95] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Lihat Detail Proyek & Arsitektur</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A4E69]/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl border border-[#E9E9ED] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#FAFAFA] hover:bg-[#EFEFF2] text-[#4A4E69] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8B8B95] uppercase tracking-widest mb-2">
                  <span>{selectedProject.category}</span>
                  <span>•</span>
                  <span>{selectedProject.period}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif italic text-[#4A4E69] mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-medium text-[#8B8B95]">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Project Modal Banner Image */}
              <div className="rounded-2xl overflow-hidden mb-6 h-56 sm:h-64 relative border border-[#E9E9ED]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {selectedProject.copyrightInfo && (
                  <div className="absolute bottom-3 left-3 bg-[#D4D4DB] text-[#4A4E69] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md border border-white">
                    <Award className="w-4 h-4 text-[#4A4E69]" />
                    <span>{selectedProject.copyrightInfo}</span>
                  </div>
                )}
              </div>

              {/* Role & Summary */}
              <div className="p-4 rounded-2xl bg-[#E9E9ED] border border-[#D4D4DB] mb-6">
                <div className="text-xs text-[#8B8B95] font-bold uppercase tracking-wider mb-1">Peran & Tanggung Jawab:</div>
                <div className="text-sm font-semibold text-[#4A4E69] mb-2">{selectedProject.role}</div>
                <p className="text-xs sm:text-sm text-[#4A4E69] leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#8B8B95] uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B8B95]" />
                  <span>Fitur & Pencapaian Utama</span>
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures.map((feature, fIdx) => (
                    <li key={fIdx} className="text-xs sm:text-sm text-[#4A4E69] flex items-start gap-2.5 bg-[#FAFAFA] p-2.5 rounded-2xl border-l-4 border-[#D4D4DB]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B8B95] mt-2 shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#8B8B95] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#8B8B95]" />
                  <span>Teknologi & Tools Yang Digunakan</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAFAFA] text-[#4A4E69] border border-[#E9E9ED]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-[#E9E9ED] flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-2xl bg-[#FAFAFA] hover:bg-[#E9E9ED] text-[#4A4E69] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
