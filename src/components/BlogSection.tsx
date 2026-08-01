import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, BookOpen, Clock, Calendar, ArrowRight, Tag, X, Share2, MessageCircle } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/portfolioData';

export const BlogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = [
    'Semua',
    'AI & Engineering',
    'QA & Copyright',
    'Machine Learning',
    'Backend & Database',
    'Networking'
  ];

  // Filtering logic
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 relative bg-[#FCF8F4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E2ECE9] text-[#4A4E69] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#C9E4DE]">
            <BookOpen className="w-3.5 h-3.5 text-[#9A8C98]" />
            <span>Mini Blog & Opini Teknis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4E69] font-display">
            Catatan Opini & <span className="font-serif italic text-[#9A8C98] font-normal border-b-2 border-[#FDE2E4]">Pemikiran</span>
          </h2>
          <p className="text-[#9A8C98] text-sm sm:text-base mt-2 font-light">
            Eksplorasi ide, pengalaman akademik, tantangan rekayasa lunak, serta pembelajaran di industri teknologi.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#9A8C98]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari opini, topik AI, HKI, Machine Learning, atau kueri database..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-[#E2ECE9] focus:border-[#9A8C98] text-[#4A4E69] text-xs placeholder-[#9A8C98]/60 transition-all shadow-xs outline-none uppercase tracking-wider"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#9A8C98] hover:text-[#4A4E69] rounded-full hover:bg-[#FCF8F4] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#9A8C98] text-white shadow-xs'
                    : 'bg-white text-[#4A4E69] hover:bg-[#FCF8F4] border border-[#E2ECE9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#E2ECE9] hover:border-[#C9E4DE] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Article Cover Image */}
                  <div className="relative h-48 overflow-hidden bg-[#FCF8F4] border-b border-[#E2ECE9]">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-[#4A4E69] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[10px] text-[#9A8C98] mb-2 font-mono uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#9A8C98]" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#9A8C98]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-serif italic text-[#4A4E69] group-hover:text-[#9A8C98] transition-colors line-clamp-2 mb-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-[#4A4E69]/80 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActivePost(post)}
                    className="w-full py-2.5 px-4 rounded-2xl bg-[#E2ECE9] hover:bg-[#C9E4DE] text-[#4A4E69] text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer border border-[#C9E4DE]"
                  >
                    <span>Baca Artikel Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-3xl bg-white border border-[#E2ECE9] max-w-md mx-auto">
            <BookOpen className="w-10 h-10 text-[#9A8C98] mx-auto mb-3" />
            <h3 className="text-base font-bold font-serif text-[#4A4E69]">Tidak ada artikel ditemukan</h3>
            <p className="text-xs text-[#9A8C98] mt-1 font-light">
              Coba gunakan kata kunci lain atau pilih kategori "Semua".
            </p>
          </div>
        )}

      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A4E69]/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl border border-[#E2ECE9] shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#FCF8F4] hover:bg-[#FDE2E4] text-[#4A4E69] transition-colors cursor-pointer"
                aria-label="Close post reader"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category & Date Header */}
              <div className="mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#E2ECE9] text-[#4A4E69] text-xs font-bold uppercase tracking-wider inline-block mb-3">
                  {activePost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif italic text-[#4A4E69] mb-3 leading-tight">
                  {activePost.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-[#9A8C98] font-mono">
                  <span>Ditulis oleh: <strong>Mira Amelia Prayitno</strong></span>
                  <span>•</span>
                  <span>{activePost.date}</span>
                  <span>•</span>
                  <span>{activePost.readTime}</span>
                </div>
              </div>

              {/* Cover Banner */}
              <div className="rounded-2xl overflow-hidden mb-6 h-64 bg-[#FCF8F4] border border-[#E2ECE9]">
                <img
                  src={activePost.coverImage}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main Content Body */}
              <div className="prose max-w-none text-[#4A4E69] text-sm sm:text-base leading-relaxed space-y-4 mb-8 font-light">
                {activePost.content.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={pIdx} className="text-lg font-bold font-serif italic text-[#4A4E69] pt-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('> ')) {
                    return (
                      <blockquote key={pIdx} className="p-4 rounded-2xl bg-[#FCF8F4] border-l-4 border-[#C9E4DE] text-[#4A4E69] italic text-sm my-4 font-serif">
                        {paragraph.replace('> ', '')}
                      </blockquote>
                    );
                  }
                  if (paragraph.startsWith('```')) {
                    const lines = paragraph.split('\n');
                    const codeContent = lines.slice(1, -1).join('\n');
                    return (
                      <pre key={pIdx} className="p-4 rounded-2xl bg-[#4A4E69] text-[#C9E4DE] text-xs font-mono overflow-x-auto my-4">
                        <code>{codeContent}</code>
                      </pre>
                    );
                  }
                  return <p key={pIdx}>{paragraph}</p>;
                })}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-[#E2ECE9] flex flex-wrap items-center gap-2 mb-6">
                <Tag className="w-4 h-4 text-[#9A8C98]" />
                {activePost.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-[#FCF8F4] border border-[#E2ECE9] text-[#4A4E69] text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer Modal Action */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E2ECE9]">
                <span className="text-xs text-[#9A8C98] font-mono">Terima kasih telah membaca opini ini!</span>
                <button
                  onClick={() => setActivePost(null)}
                  className="px-5 py-2.5 rounded-2xl bg-[#9A8C98] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Tutup Opini
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
