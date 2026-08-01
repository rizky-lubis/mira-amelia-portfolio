import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, CheckCircle, Sparkles, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  const [isCopiedPhone, setIsCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setIsCopiedEmail(true);
      setTimeout(() => setIsCopiedEmail(false), 2000);
    } else {
      setIsCopiedPhone(true);
      setTimeout(() => setIsCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E9ED] text-[#4A4E69] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#D4D4DB]">
            <Sparkles className="w-3.5 h-3.5 text-[#8B8B95]" />
            <span>Mari Terhubung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4E69] font-display">
            Hubungi <span className="font-serif italic text-[#8B8B95] font-normal border-b-2 border-[#EFEFF2]">Mira Amelia</span>
          </h2>
          <p className="text-[#8B8B95] text-sm sm:text-base mt-2 font-light">
            Tertarik untuk berkolaborasi, mendiskusikan peluang karir, atau bertanya seputar proyek? Kirim pesan secara langsung di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="p-5 rounded-3xl border border-[#E9E9ED] bg-white shadow-sm hover:border-[#D4D4DB] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E9E9ED] flex items-center justify-center text-[#4A4E69]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(PROFILE_DATA.email, 'email')}
                  className="px-3 py-1 rounded-full bg-[#FAFAFA] hover:bg-[#E9E9ED] text-[#4A4E69] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer border border-[#E9E9ED]"
                >
                  <Copy className="w-3 h-3 text-[#8B8B95]" />
                  <span>{isCopiedEmail ? 'Tersalin!' : 'Salin Email'}</span>
                </button>
              </div>
              <div className="text-[10px] font-bold text-[#8B8B95] uppercase tracking-widest">Email Utama</div>
              <a href={`mailto:${PROFILE_DATA.email}`} className="text-sm font-bold text-[#4A4E69] hover:text-[#8B8B95] transition-colors font-mono">
                {PROFILE_DATA.email}
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-3xl border border-[#E9E9ED] bg-white shadow-sm hover:border-[#D4D4DB] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#D4D4DB] flex items-center justify-center text-[#4A4E69]">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href={PROFILE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-full bg-[#E9E9ED] hover:bg-[#D4D4DB] text-[#4A4E69] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3 h-3 text-[#4A4E69]" />
                  <span>Chat WA</span>
                </a>
              </div>
              <div className="text-[10px] font-bold text-[#8B8B95] uppercase tracking-widest">Telepon & WhatsApp</div>
              <a href={PROFILE_DATA.whatsappUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#4A4E69] hover:text-[#8B8B95] transition-colors font-mono">
                {PROFILE_DATA.phoneFormatted}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-3xl border border-[#E9E9ED] bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EFEFF2] flex items-center justify-center text-[#4A4E69] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#8B8B95] uppercase tracking-widest">Domisili Utama</div>
                  <div className="text-sm font-bold text-[#4A4E69]">{PROFILE_DATA.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="p-5 rounded-3xl bg-[#4A4E69] text-white shadow-sm flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[#D4D4DB] font-mono uppercase tracking-widest">Social Profiles</div>
                <div className="text-sm font-bold font-serif italic">LinkedIn & GitHub</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE_DATA.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Aesthetic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E9E9ED] shadow-sm relative"
          >
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#D4D4DB] text-[#4A4E69] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif italic text-[#4A4E69]">
                  Pesan Anda Berhasil Terkirim! ✨
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4E69]/80 max-w-md mx-auto leading-relaxed font-light">
                  Terima kasih, <strong>{formData.name}</strong>. Pesan Anda telah diterima. Mira akan segera membalas email ke <span className="text-[#8B8B95] font-bold">{formData.email}</span>.
                </p>
                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-2xl bg-[#FAFAFA] text-[#4A4E69] text-xs font-bold uppercase tracking-wider hover:bg-[#E9E9ED] transition-colors cursor-pointer border border-[#E9E9ED]"
                  >
                    Kirim Pesan Lain
                  </button>
                  <a
                    href={`https://wa.me/6283806698751?text=Halo%20Mira,%20saya%20${encodeURIComponent(formData.name)}%20sudah%20mengirim%20pesan%20lewat%20web%20portofolio!`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-2xl bg-[#8B8B95] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4A4E69] transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Lanjutkan di WA</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold font-serif italic text-[#4A4E69] mb-2">
                  Formulir Kontak Responsif
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#4A4E69] mb-1 uppercase tracking-wider">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFA] border border-[#E9E9ED] focus:border-[#8B8B95] focus:bg-white text-[#4A4E69] text-xs outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#4A4E69] mb-1 uppercase tracking-wider">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFA] border border-[#E9E9ED] focus:border-[#8B8B95] focus:bg-white text-[#4A4E69] text-xs outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A4E69] mb-1 uppercase tracking-wider">
                    Subjek / Topik *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Diskusi Proyek Web / Penawaran Karir"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFA] border border-[#E9E9ED] focus:border-[#8B8B95] focus:bg-white text-[#4A4E69] text-xs outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A4E69] mb-1 uppercase tracking-wider">
                    Pesan Anda *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan detail pesan, pertanyaan, atau penawaran Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFA] border border-[#E9E9ED] focus:border-[#8B8B95] focus:bg-white text-[#4A4E69] text-xs outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#8B8B95] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
