import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Upload,
  Image as ImageIcon,
  Plus,
  Trash2,
  Lock,
  Unlock,
  CheckCircle2,
  RefreshCw,
  X,
  ArrowLeft,
  Sparkles,
  Link,
  Save,
  FolderPlus,
  Layers,
  Info,
  ShieldCheck,
  Eye
} from 'lucide-react';
import {
  Project,
  getStoredProjects,
  updateProjectImage,
  saveOrUpdateProject,
  deleteProject,
  resetProjectsToDefault,
  GalleryItem,
  getStoredGallery,
  updateGalleryImage,
  addGalleryItem,
  deleteGalleryItem
} from '../services/projectStorage';

interface AdminPanelProps {
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('mira_admin_authenticated') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  const [activeTab, setActiveTab] = useState<'upload_photos' | 'manage_projects' | 'gallery'>('upload_photos');

  // Projects state
  const [projects, setProjects] = useState<Project[]>(getStoredProjects());
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || '');
  const [newProjectImage, setNewProjectImage] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Gallery state
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(getStoredGallery());
  const [selectedGalleryId, setSelectedGalleryId] = useState<string>(galleryItems[0]?.id || '');
  const [galleryImageInput, setGalleryImageInput] = useState<string>('');

  // New project modal / form state
  const [isAddingNewProject, setIsAddingNewProject] = useState<boolean>(false);
  const [editingProject, setEditingProject] = useState<Partial<Project>>({
    id: `project-${Date.now()}`,
    title: '',
    subtitle: '',
    role: 'Full Stack Developer',
    period: '2026',
    category: 'Full Stack',
    summary: '',
    description: '',
    keyFeatures: [''],
    techStack: ['React', 'Node.js', 'Tailwind CSS'],
    highlights: 'Feature Highlight',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-pink-100 to-rose-200'
  });

  useEffect(() => {
    const currentSelected = projects.find(p => p.id === selectedProjectId);
    if (currentSelected) {
      setNewProjectImage(currentSelected.image);
      setImagePreview(currentSelected.image);
    }
  }, [selectedProjectId, projects]);

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message: msg, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default secret PIN / password
    if (passwordInput.trim() === 'mira2026' || passwordInput.trim() === 'admin123' || passwordInput.trim() === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('mira_admin_authenticated', 'true');
      setAuthError('');
      showToast('Selamat datang, Admin Mira Amelia!');
    } else {
      setAuthError('Kata sandi admin salah! (Gunakan kata sandi: mira2026)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('mira_admin_authenticated');
  };

  // Convert uploaded image file to Base64 Data URL
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, target: 'project' | 'gallery' | 'new_project') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Harap pilih file gambar (JPG, PNG, WebP, GIF)', 'error');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast('Ukuran gambar maksimal 5MB', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Url = event.target?.result as string;
      if (target === 'project') {
        setNewProjectImage(base64Url);
        setImagePreview(base64Url);
      } else if (target === 'gallery') {
        setGalleryImageInput(base64Url);
      } else if (target === 'new_project') {
        setEditingProject(prev => ({ ...prev, image: base64Url }));
      }
      showToast('Gambar berhasil dimuat dari perangkat! Klik Simpan untuk memperbarui.');
    };
    reader.readAsDataURL(file);
  };

  // Save updated project image
  const handleSaveProjectImage = () => {
    if (!selectedProjectId) {
      showToast('Pilih proyek terlebih dahulu', 'error');
      return;
    }
    if (!newProjectImage.trim()) {
      showToast('Link atau file foto tidak boleh kosong', 'error');
      return;
    }

    const updated = updateProjectImage(selectedProjectId, newProjectImage);
    setProjects(updated);
    const projName = updated.find(p => p.id === selectedProjectId)?.title || 'Proyek';
    showToast(`Foto proyek "${projName}" berhasil diperbarui!`);
  };

  // Save new / edited project
  const handleSaveProjectDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject.title || !editingProject.summary) {
      showToast('Judul dan ringkasan proyek wajib diisi!', 'error');
      return;
    }

    const fullProject: Project = {
      id: editingProject.id || `project-${Date.now()}`,
      title: editingProject.title || 'Proyek Baru',
      subtitle: editingProject.subtitle || '',
      role: editingProject.role || 'Full Stack Developer',
      period: editingProject.period || '2026',
      category: (editingProject.category as any) || 'Full Stack',
      summary: editingProject.summary || '',
      description: editingProject.description || editingProject.summary || '',
      keyFeatures: editingProject.keyFeatures?.filter(f => f.trim() !== '') || ['Fitur Utama'],
      techStack: editingProject.techStack || ['React', 'Node.js'],
      highlights: editingProject.highlights || 'Highlight Proyek',
      image: editingProject.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
      accentColor: editingProject.accentColor || 'from-pink-100 to-rose-200'
    };

    const updated = saveOrUpdateProject(fullProject);
    setProjects(updated);
    setIsAddingNewProject(false);
    showToast(`Proyek "${fullProject.title}" berhasil disimpan!`);
  };

  // Delete project
  const handleDeleteProject = (id: string, title: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus proyek "${title}"?`)) {
      const updated = deleteProject(id);
      setProjects(updated);
      if (selectedProjectId === id) {
        setSelectedProjectId(updated[0]?.id || '');
      }
      showToast(`Proyek "${title}" telah dihapus.`);
    }
  };

  // Reset to default
  const handleResetDefaults = () => {
    if (confirm('Apakah Anda yakin ingin mengembalikan seluruh foto dan proyek ke data default bawaan?')) {
      const resetP = resetProjectsToDefault();
      setProjects(resetP);
      setSelectedProjectId(resetP[0]?.id || '');
      setGalleryItems(getStoredGallery());
      showToast('Data portofolio telah di-reset ke versi awal.');
    }
  };

  // Save gallery photo update
  const handleSaveGalleryImage = () => {
    if (!selectedGalleryId || !galleryImageInput) {
      showToast('Pilih artefak dan isi link/file foto', 'error');
      return;
    }
    const updated = updateGalleryImage(selectedGalleryId, galleryImageInput);
    setGalleryItems(updated);
    showToast('Foto artefak galeri berhasil diperbarui!');
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A4E69]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#E9E9ED] relative text-[#4A4E69]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#FAFAFA] hover:bg-[#EFEFF2] text-[#4A4E69] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#E9E9ED] text-[#4A4E69] flex items-center justify-center mx-auto mb-3 shadow-xs">
              <Lock className="w-7 h-7 text-[#8B8B95]" />
            </div>
            <h2 className="text-2xl font-bold font-serif italic text-[#4A4E69]">Portal Akses Admin</h2>
            <p className="text-xs text-[#8B8B95] mt-1 font-light">
              Khusus pengelolaan foto proyek & artefak portofolio Mira Amelia.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-1">
                Kata Sandi Admin
              </label>
              <input
                type="password"
                placeholder="Masukkan kata sandi admin (mira2026)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFA] border border-[#E9E9ED] focus:border-[#8B8B95] focus:bg-white text-xs outline-none transition-all font-mono"
                autoFocus
              />
              <p className="text-[11px] text-[#8B8B95] mt-1 italic">
                * Default PIN sandi: <code className="font-bold text-[#4A4E69]">mira2026</code>
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-2xl bg-[#8B8B95] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <Unlock className="w-4 h-4" />
              <span>Masuk Portal Admin</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#E9E9ED] text-center">
            <button
              onClick={onClose}
              className="text-xs text-[#8B8B95] hover:text-[#4A4E69] font-medium transition-colors flex items-center justify-center gap-1 mx-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Portofolio Publik</span>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#FAFAFA] text-[#4A4E69] overflow-y-auto font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 border ${
              notification.type === 'error'
                ? 'bg-rose-600 text-white border-rose-700'
                : 'bg-[#4A4E69] text-[#D4D4DB] border-[#8B8B95]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Admin Header Bar */}
      <header className="bg-[#4A4E69] text-white py-4 px-6 sticky top-0 z-40 border-b border-[#8B8B95]/30 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D4D4DB] flex items-center justify-center text-[#4A4E69] font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold font-serif italic">Dashboard Admin Upload Proyek</h1>
                <span className="px-2 py-0.5 rounded-full bg-[#D4D4DB] text-[#4A4E69] text-[10px] font-bold uppercase">
                  Akses Luar / Khusus
                </span>
              </div>
              <p className="text-[11px] text-[#E9E9ED] font-light">
                Kelola & upload foto karya tanpa menampilkan tombol admin di navigasi publik
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetDefaults}
              title="Reset data proyek ke default"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-rose-500/80 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Default</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-2xl bg-[#D4D4DB] hover:bg-white text-[#4A4E69] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Lihat Portofolio</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-rose-600 text-white transition-colors cursor-pointer"
              title="Keluar Admin"
            >
              <Lock className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Info Banner on how to access */}
        <div className="mb-8 p-4 rounded-3xl bg-white border-l-4 border-[#D4D4DB] border-y border-r border-[#E9E9ED] shadow-xs flex items-start gap-3">
          <Info className="w-5 h-5 text-[#8B8B95] shrink-0 mt-0.5" />
          <div className="text-xs text-[#4A4E69]">
            <span className="font-bold text-[#4A4E69] uppercase tracking-wider block mb-0.5">
              💡 Panduan Akses Portal Admin dari Luar:
            </span>
            <p className="font-light leading-relaxed">
              Sesuai permintaan Anda, portal admin ini <strong>tidak ditampilkan di menu navigasi utama publik</strong>. Untuk mengaksesnya dari browser kapan pun, cukup tambahkan tag <code className="bg-[#FAFAFA] px-1.5 py-0.5 rounded border border-[#E9E9ED] font-mono font-bold text-[#4A4E69]">/#admin</code> atau parameter <code className="bg-[#FAFAFA] px-1.5 py-0.5 rounded border border-[#E9E9ED] font-mono font-bold text-[#4A4E69]">?admin=true</code> di akhir URL browser Anda.
            </p>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#E9E9ED] pb-4 mb-8 overflow-x-auto">
          <button
            onClick={() => { setActiveTab('upload_photos'); setIsAddingNewProject(false); }}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'upload_photos' && !isAddingNewProject
                ? 'bg-[#8B8B95] text-white shadow-xs'
                : 'bg-white text-[#4A4E69] hover:bg-[#E9E9ED] border border-[#E9E9ED]'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>📸 Upload Foto Proyek</span>
          </button>

          <button
            onClick={() => { setActiveTab('manage_projects'); setIsAddingNewProject(false); }}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'manage_projects' && !isAddingNewProject
                ? 'bg-[#8B8B95] text-white shadow-xs'
                : 'bg-white text-[#4A4E69] hover:bg-[#E9E9ED] border border-[#E9E9ED]'
            }`}
          >
            <FolderPlus className="w-4 h-4" />
            <span>⚙️ Kelola & Tambah Proyek</span>
          </button>

          <button
            onClick={() => { setActiveTab('gallery'); setIsAddingNewProject(false); }}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'gallery' && !isAddingNewProject
                ? 'bg-[#8B8B95] text-white shadow-xs'
                : 'bg-white text-[#4A4E69] hover:bg-[#E9E9ED] border border-[#E9E9ED]'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>🖼️ Foto Artefak Galeri</span>
          </button>
        </div>

        {/* TAB 1: UPLOAD FOTO PROYEK */}
        {activeTab === 'upload_photos' && !isAddingNewProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Project Selector List */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E9E9ED] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E9E9ED]">
                <h2 className="text-base font-bold font-serif italic text-[#4A4E69]">Pilih Proyek ({projects.length})</h2>
                <span className="text-[10px] font-bold text-[#8B8B95] uppercase tracking-wider">Pilih untuk ganti foto</span>
              </div>

              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {projects.map((proj) => {
                  const isSelected = proj.id === selectedProjectId;
                  return (
                    <div
                      key={proj.id}
                      onClick={() => {
                        setSelectedProjectId(proj.id);
                        setNewProjectImage(proj.image);
                        setImagePreview(proj.image);
                      }}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#8B8B95] bg-[#FAFAFA] shadow-xs'
                          : 'border-[#E9E9ED] bg-white hover:border-[#D4D4DB] hover:bg-[#FAFAFA]/50'
                      }`}
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-14 h-14 object-cover rounded-xl shrink-0 border border-[#E9E9ED]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-[#8B8B95] uppercase tracking-wider mb-0.5">
                          {proj.category}
                        </div>
                        <h3 className="text-xs font-bold text-[#4A4E69] truncate font-serif italic">
                          {proj.title}
                        </h3>
                        <p className="text-[11px] text-[#8B8B95] truncate font-light">
                          {proj.role}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-[#8B8B95] text-white flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Upload Controls & Image Preview */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E9E9ED] shadow-sm space-y-6">
              <div className="pb-3 border-b border-[#E9E9ED]">
                <h2 className="text-lg font-bold font-serif italic text-[#4A4E69]">
                  Upload & Perbarui Foto Karya
                </h2>
                <p className="text-xs text-[#8B8B95] font-light mt-0.5">
                  Proyek Terpilih: <strong className="text-[#4A4E69]">{projects.find(p => p.id === selectedProjectId)?.title}</strong>
                </p>
              </div>

              {/* Upload Dropzone / File Picker */}
              <div>
                <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-2">
                  Metode 1: Upload File Gambar Dari Perangkat Anda (HP / Laptop)
                </label>
                <div className="border-2 border-dashed border-[#D4D4DB] hover:border-[#8B8B95] bg-[#FAFAFA] rounded-3xl p-6 text-center transition-all relative cursor-pointer group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'project')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="w-12 h-12 rounded-2xl bg-[#E9E9ED] text-[#4A4E69] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6 text-[#8B8B95]" />
                  </div>
                  <p className="text-xs font-bold text-[#4A4E69]">
                    Klik atau Seret (Drag) File Gambar Ke Sini
                  </p>
                  <p className="text-[11px] text-[#8B8B95] mt-1 font-light">
                    Mendukung format JPG, PNG, WebP (Maksimal 5MB)
                  </p>
                </div>
              </div>

              {/* Or Paste Image URL */}
              <div>
                <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-1">
                  Metode 2: Tempelkan (Paste) URL Gambar Langsung
                </label>
                <div className="relative">
                  <Link className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B8B95]" />
                  <input
                    type="text"
                    value={newProjectImage}
                    onChange={(e) => {
                      setNewProjectImage(e.target.value);
                      setImagePreview(e.target.value);
                    }}
                    placeholder="https://images.unsplash.com/photo-... atau URL foto publik"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FAFAFA] border border-[#E9E9ED] focus:border-[#8B8B95] text-xs outline-none font-mono"
                  />
                </div>
              </div>

              {/* Image Preview Box */}
              <div>
                <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-2">
                  Pratinjau (Preview) Tampilan Card Karya
                </label>
                <div className="relative rounded-2xl overflow-hidden border border-[#E9E9ED] bg-[#FAFAFA] h-56 sm:h-64 shadow-xs">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={() => showToast('URL gambar tidak valid atau gagal dimuat', 'error')}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-[#8B8B95] text-xs">
                      <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                      <span>Belum ada pratinjau gambar</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 text-[#4A4E69] text-[10px] font-bold uppercase shadow-xs">
                    Tampilan di Portofolio
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSaveProjectImage}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#8B8B95] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Foto Proyek Ini</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: KELOLA & TAMBAH PROYEK BARU */}
        {activeTab === 'manage_projects' && (
          <div className="space-y-6">
            {!isAddingNewProject ? (
              <div className="bg-white p-6 rounded-3xl border border-[#E9E9ED] shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E9E9ED] mb-6">
                  <div>
                    <h2 className="text-lg font-bold font-serif italic text-[#4A4E69]">Daftar Proyek Terdaftar</h2>
                    <p className="text-xs text-[#8B8B95] font-light mt-0.5">
                      Anda dapat mengubah urutan, menambah proyek baru, atau mengedit detail lengkap karya.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingProject({
                        id: `project-${Date.now()}`,
                        title: '',
                        subtitle: '',
                        role: 'Full Stack Developer',
                        period: '2026',
                        category: 'Full Stack',
                        summary: '',
                        description: '',
                        keyFeatures: [''],
                        techStack: ['React', 'Node.js', 'Tailwind CSS'],
                        highlights: 'Highlight Proyek',
                        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
                        accentColor: 'from-pink-100 to-rose-200'
                      });
                      setIsAddingNewProject(true);
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-[#8B8B95] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Proyek Baru</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-5 rounded-2xl border border-[#E9E9ED] bg-[#FAFAFA] flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-20 h-20 object-cover rounded-xl shrink-0 border border-[#E9E9ED]"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#E9E9ED] text-[#4A4E69] text-[10px] font-bold uppercase">
                            {proj.category}
                          </span>
                          <h3 className="text-base font-bold font-serif italic text-[#4A4E69] mt-1 truncate">
                            {proj.title}
                          </h3>
                          <p className="text-xs text-[#8B8B95] font-light line-clamp-2 mt-1">
                            {proj.summary}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#E9E9ED] flex items-center justify-between">
                        <button
                          onClick={() => {
                            setEditingProject(proj);
                            setIsAddingNewProject(true);
                          }}
                          className="text-xs font-bold text-[#4A4E69] hover:text-[#8B8B95] uppercase tracking-wider"
                        >
                          Edit Detail
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj.id, proj.title)}
                          className="p-1.5 rounded-xl bg-white text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
                          title="Hapus Proyek"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Add/Edit Project Form */
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9E9ED] shadow-sm max-w-3xl mx-auto">
                <div className="flex items-center justify-between pb-4 border-b border-[#E9E9ED] mb-6">
                  <h2 className="text-lg font-bold font-serif italic text-[#4A4E69]">
                    {editingProject.id && projects.some(p => p.id === editingProject.id) ? 'Edit Detail Proyek' : 'Form Tambah Proyek Baru'}
                  </h2>
                  <button
                    onClick={() => setIsAddingNewProject(false)}
                    className="px-3 py-1.5 rounded-xl bg-[#FAFAFA] text-[#4A4E69] text-xs font-bold uppercase tracking-wider hover:bg-[#E9E9ED]"
                  >
                    Batal
                  </button>
                </div>

                <form onSubmit={handleSaveProjectDetails} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-1">
                        Judul Proyek *
                      </label>
                      <input
                        type="text"
                        required
                        value={editingProject.title || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                        placeholder="Misal: EduMetric"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9ED] text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-1">
                        Kategori *
                      </label>
                      <select
                        value={editingProject.category || 'Full Stack'}
                        onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9ED] text-xs"
                      >
                        <option value="Full Stack">Full Stack</option>
                        <option value="AI & ML">AI & ML</option>
                        <option value="QA & Web">QA & Web</option>
                        <option value="Community">Community</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-1">
                        Peran (Role) *
                      </label>
                      <input
                        type="text"
                        value={editingProject.role || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, role: e.target.value })}
                        placeholder="Misal: Project Lead & Full Stack Developer"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9ED] text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-1">
                        Periode *
                      </label>
                      <input
                        type="text"
                        value={editingProject.period || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, period: e.target.value })}
                        placeholder="Misal: 04/2026 - 07/2026"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9ED] text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-1">
                      Ringkasan Singkat (Summary) *
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={editingProject.summary || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, summary: e.target.value })}
                      placeholder="Ringkasan 1-2 kalimat untuk kartu depan"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9ED] text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-1">
                      Upload Foto Proyek
                    </label>
                    <div className="flex gap-2 items-center mb-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'new_project')}
                        className="text-xs file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#E9E9ED] file:text-[#4A4E69] cursor-pointer"
                      />
                    </div>
                    <input
                      type="text"
                      value={editingProject.image || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                      placeholder="Atau tempelkan URL Gambar"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9ED] text-xs font-mono"
                    />
                  </div>

                  <div className="pt-4 border-t border-[#E9E9ED] flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAddingNewProject(false)}
                      className="px-5 py-2.5 rounded-2xl bg-[#FAFAFA] text-[#4A4E69] text-xs font-bold uppercase tracking-wider"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-2xl bg-[#8B8B95] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-wider shadow-xs"
                    >
                      Simpan Proyek
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: UPLOAD FOTO GALERI ARTEFAK */}
        {activeTab === 'gallery' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9E9ED] shadow-sm max-w-4xl mx-auto space-y-6">
            <div className="pb-4 border-b border-[#E9E9ED]">
              <h2 className="text-lg font-bold font-serif italic text-[#4A4E69]">Kelola Foto Artefak Galeri</h2>
              <p className="text-xs text-[#8B8B95] font-light mt-0.5">
                Ganti atau upload foto dokumentasi visual antarmuka & sertifikat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-2">
                  Pilih Item Galeri
                </label>
                <select
                  value={selectedGalleryId}
                  onChange={(e) => {
                    setSelectedGalleryId(e.target.value);
                    const found = galleryItems.find(g => g.id === e.target.value);
                    if (found) setGalleryImageInput(found.image);
                  }}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAFAFA] border border-[#E9E9ED] text-xs font-serif italic"
                >
                  {galleryItems.map(g => (
                    <option key={g.id} value={g.id}>{g.title} ({g.category})</option>
                  ))}
                </select>

                <div className="mt-4">
                  <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-1">
                    Upload Foto Baru
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'gallery')}
                    className="w-full text-xs file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#E9E9ED] file:text-[#4A4E69] cursor-pointer mb-2"
                  />
                  <input
                    type="text"
                    value={galleryImageInput}
                    onChange={(e) => setGalleryImageInput(e.target.value)}
                    placeholder="Atau tempelkan URL Foto"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9ED] text-xs font-mono"
                  />
                </div>

                <button
                  onClick={handleSaveGalleryImage}
                  className="w-full mt-4 py-3 rounded-2xl bg-[#8B8B95] hover:bg-[#4A4E69] text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xs"
                >
                  Simpan Foto Artefak Galeri
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A4E69] uppercase tracking-wider mb-2">
                  Pratinjau Foto Artefak
                </label>
                <div className="rounded-2xl overflow-hidden border border-[#E9E9ED] bg-[#FAFAFA] h-52 relative">
                  {galleryImageInput ? (
                    <img src={galleryImageInput} alt="Gallery Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#8B8B95] text-xs">
                      Pilih foto untuk pratinjau
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
