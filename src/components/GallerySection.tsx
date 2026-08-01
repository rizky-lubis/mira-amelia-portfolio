import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, Eye, Image as ImageIcon } from 'lucide-react';
import { GalleryItem, getStoredGallery, PROJECTS_UPDATED_EVENT } from '../services/projectStorage';

export const GallerySection: React.FC = () => {
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(getStoredGallery());
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleGalleryUpdated = () => {
      setGalleryList(getStoredGallery());
    };

    window.addEventListener(PROJECTS_UPDATED_EVENT, handleGalleryUpdated);
    return () => {
      window.removeEventListener(PROJECTS_UPDATED_EVENT, handleGalleryUpdated);
    };
  }, []);

  return (
    <section id="gallery" className="py-20 relative bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2ECE9] text-[#4A4E69] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#C9E4DE]">
            <Sparkles className="w-3.5 h-3.5 text-[#9A8C98]" />
            <span>Visual & Artefak Karya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4E69] font-display">
            Galeri Foto <span className="font-serif italic text-[#9A8C98] font-normal border-b-2 border-[#FDE2E4]">Karya Artistik</span>
          </h2>
          <p className="text-[#9A8C98] text-sm sm:text-base mt-2 font-light">
            Dokumentasi visual antarmuka sistem, arsitektur data, sertifikat HKI, dan aktivitas kegiatan.
          </p>
        </div>

        {/* Artistic Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-[#E2ECE9] bg-white shadow-sm hover:border-[#C9E4DE] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-[#FCF8F4] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A4E69]/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Category Pill top left */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[#4A4E69] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  {item.category}
                </span>

                {/* Hover Eye Icon top right */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#4A4E69] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                  <Maximize2 className="w-4 h-4 text-[#9A8C98]" />
                </div>

                {/* Title & Description at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-bold font-serif italic group-hover:text-[#C9E4DE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1 mt-0.5 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A4E69]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-[#E2ECE9] shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-[#FDE2E4] text-[#4A4E69] transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 bg-[#4A4E69] flex items-center justify-center min-h-[300px] max-h-[70vh]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-h-[70vh] w-full object-contain"
                  />
                </div>
                <div className="md:col-span-4 p-6 flex flex-col justify-between bg-white">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#E2ECE9] text-[#4A4E69] text-xs font-bold uppercase tracking-wider inline-block mb-3">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-xl font-bold font-serif italic text-[#4A4E69] mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4E69]/80 leading-relaxed mb-4 font-light">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2ECE9] flex items-center justify-between">
                    <span className="text-[10px] text-[#9A8C98] font-mono uppercase tracking-wider">Mira Amelia Portfolio</span>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="px-4 py-2 rounded-2xl bg-[#9A8C98] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
