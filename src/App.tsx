import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GallerySection } from './components/GallerySection';
import { SkillsCertificationsSection } from './components/SkillsCertificationsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { AdminPanel } from './components/AdminPanel';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(() => {
    return window.location.hash === '#admin' || window.location.search.includes('admin=true');
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setIsAdminOpen(true);
      } else {
        setIsAdminOpen(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'gallery', 'skills', 'certifications', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseAdmin = () => {
    setIsAdminOpen(false);
    if (window.location.hash === '#admin') {
      window.location.hash = '';
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF8F4] text-[#4A4E69] font-sans selection:bg-[#FDE2E4] selection:text-[#4A4E69] relative">
      
      {/* Soft Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main>
        <HeroSection onOpenCVModal={() => setIsCVModalOpen(true)} />
        <AboutSection onOpenCVModal={() => setIsCVModalOpen(true)} />
        <ProjectsSection />
        <GallerySection />
        <SkillsCertificationsSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Modal Viewer */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Admin Panel (Hidden/External Route Access) */}
      {isAdminOpen && (
        <AdminPanel
          onClose={handleCloseAdmin}
        />
      )}

    </div>
  );
}
