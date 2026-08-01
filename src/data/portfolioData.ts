export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  category: 'Full Stack' | 'AI & ML' | 'QA & Web' | 'Community';
  summary: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  highlights: string;
  image: string;
  accentColor: string;
  copyrightInfo?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  badge: string;
  category: 'Security' | 'AI' | 'Copyright' | 'Network';
  credentialUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'AI & Engineering' | 'QA & Copyright' | 'Machine Learning' | 'Backend & Database' | 'Networking';
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: string; badgeColor: string }[];
}

export const PROFILE_DATA = {
  name: 'Mira Amelia Prayitno',
  shortName: 'Mira Amelia',
  role: 'Software Engineer',
  subRole: 'Full Stack & AI/ML Enthusiast',
  location: 'Jakarta, Indonesia',
  email: 'mira59487@gmail.com',
  phone: '+6283806698751',
  phoneFormatted: '+62 838-0669-8751',
  linkedIn: 'https://linkedin.com/in/mira-amelia-prayitno',
  github: 'https://github.com/mira-amelia',
  whatsappUrl: 'https://wa.me/6283806698751?text=Halo%20Mira,%20saya%20tertarik%20dengan%20portofolio%20Anda!',
  university: 'Universitas Nusa Mandiri',
  degree: 'Bachelor of Informatics (S1 Teknik Informatika)',
  gpa: '3.89 / 4.00',
  summary: `Informatics undergraduate at Universitas Nusa Mandiri with hands-on experience in full-stack web development, software testing, and AI-powered application development through academic and collaborative projects. Skilled in designing scalable web applications, developing backend logic, creating intuitive user interfaces, and producing technical documentation. Passionate about continuous learning, problem-solving, and building tech solutions that create real-world impact.`,
  tagline: 'Crafting thoughtful digital experiences through scalable web architecture, AI innovations & aesthetic design.',
  stats: [
    { label: 'Cumulative GPA / IPK', value: '3.89', subtitle: 'Out of 4.00' },
    { label: 'Featured Projects', value: '5+', subtitle: 'Full Stack, AI & QA' },
    { label: 'Certifications & HKI', value: '5', subtitle: 'Cisco, Huawei, DJKI' },
    { label: 'Code & Tech Stack', value: '15+', subtitle: 'Languages & Tools' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'edumetric',
    title: 'EduMetric',
    subtitle: 'AI-Powered School Assessment Management System',
    role: 'Project Lead & Full Stack Developer',
    period: '04/2026 - 07/2026',
    category: 'Full Stack',
    summary: 'Sistem manajemen penilaian sekolah berbasis web terintegrasi Computer-Based Testing (CBT) dan modul pembuatan soal otomatis berbasis AI.',
    description: `EduMetric ditujukan untuk mengdigitalisasi seluruh proses evaluasi akademik di sekolah. Sistem ini mencakup Computer-Based Testing (CBT) dengan penilaian otomatis, pelacakan performa siswa secara real-time, serta prototype generator soal berbasis AI yang mempermudah pembuatan bank soal guru.`,
    keyFeatures: [
      'Digitalization of examination & academic evaluation workflows',
      'Computer-Based Testing (CBT) system with automated grading & analytics',
      'Multi-role RBAC for Administrators, Principals, Teachers, & Students',
      'AI-powered question generation module prototype for automated test creation'
    ],
    techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MySQL', 'AI Generation Module'],
    highlights: 'Multi-role RBAC & AI Question Generator Prototype',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-pink-100 to-rose-200'
  },
  {
    id: 'stunting-clinic',
    title: 'Stunting Clinic Web Application',
    subtitle: 'Public Health Tracking & Copyrighted Web Software',
    role: 'Quality Assurance & Technical Documentation',
    period: '03/2026 - 07/2026',
    category: 'QA & Web',
    summary: 'Aplikasi web klinis pencegahan stunting yang tervalidasi QA menyeluruh dan telah resmi mengantongi Hak Cipta (HKI) dari DJKI Kemenkumham RI.',
    description: `Bertanggung jawab penuh atas pengujian fungsionalitas aplikasi kesehatan stunting, pembuatan skenario pengujian (test cases), verifikasi bug, serta dokumentasi teknis lengkap (workflow diagram, user guide). Proyek ini telah sukses memperoleh Sertifikat Hak Cipta resmi dari DJKI RI.`,
    keyFeatures: [
      'Comprehensive QA test case creation & test execution',
      'Defect logging, bug tracking, and re-testing throughout testing lifecycle',
      'Technical documentation (Functional requirements, workflow, user manuals)',
      'Officially Granted Intellectual Property Rights (HKI Copyright) by DJKI Kemenkumham RI'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'QA Software Testing', 'HKI Legal Copyright'],
    highlights: 'Granted Official Copyright (HKI) - DJKI RI',
    copyrightInfo: 'EC002026XXXXX — Hak Cipta Resmi DJKI',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-rose-100 to-amber-100'
  },
  {
    id: 'laptop-price-ml',
    title: 'Laptop Price Prediction ML Model',
    subtitle: 'Machine Learning Analytics with Python & Scikit-Learn',
    role: 'Machine Learning Developer',
    period: '05/2026 - 06/2026',
    category: 'AI & ML',
    summary: 'Model machine learning untuk memprediksi harga laptop berdasarkan spesifikasi perangkat keras menggunakan beberapa algoritma regresi.',
    description: `Mengembangkan model prediktif berbasis Machine Learning dengan Python di Google Colab. Meliputi eksplorasi data (EDA), pembersihan & feature engineering spesifikasi laptop, serta pelatihan perbandingan algoritma Linear Regression, Decision Tree, dan Random Forest Regressor.`,
    keyFeatures: [
      'Data preprocessing, handling missing values & feature encoding',
      'Exploratory Data Analysis (EDA) to find hardware spec correlations',
      'Algorithm training: Linear Regression, Decision Tree & Random Forest',
      'Performance evaluation using R² Score & RMSE to choose optimal model'
    ],
    techStack: ['Python', 'Google Colab', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
    highlights: 'Random Forest Regressor with High R² Score Precision',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-purple-100 to-indigo-100'
  },
  {
    id: 'myevent',
    title: 'MYEVENT – Ticketing System',
    subtitle: 'Web-Based Event Management & Online Booking Platform',
    role: 'Project Lead & Full Stack Developer',
    period: '10/2025 - 12/2025',
    category: 'Full Stack',
    summary: 'Platform pemesanan tiket acara online lengkap dengan sistem manajemen admin, reservasi tempat, dan riwayat transaksi.',
    description: `Mengkoordinasikan tim pengembangan platform tiket acara. Membangun admin dashboard interaktif untuk mengelola event, data peserta, laporan transaksi, serta merancang struktur database relasional yang dioptimalkan untuk akses cepat.`,
    keyFeatures: [
      'Event ticketing system with real-time seat booking simulation',
      'Comprehensive administrative dashboard for events & financial records',
      'Optimized relational database schema (Users, Events, Tickets, Bookings)',
      'Responsive, user-friendly booking user experience across all screen sizes'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    highlights: 'Optimized ERD Database & Full Booking Pipeline',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-fuchsia-100 to-pink-100'
  },
  {
    id: 'community-tutor',
    title: 'Community Training & Service',
    subtitle: 'Digital Empowerment & Mentoring Programs',
    role: 'Tutor & Event Committee Member',
    period: '09/2023 - 05/2025',
    category: 'Community',
    summary: 'Program pengabdian masyarakat Universitas Nusa Mandiri dalam pelatihan pemrosesan data tumbuh kembang anak & desain grafis Canva.',
    description: `Mengabdi dalam program pelatihan masyarakat, membimbing peserta secara hands-on dalam mengolah data pertumbuhan anak menggunakan Microsoft Excel dan menyelenggarakan pelatihan desain visual menggunakan Canva.`,
    keyFeatures: [
      'Delivered hands-on Microsoft Excel training for child health data processing',
      'Organized community design workshops using Canva for creative visuals',
      'Event logistics coordination & technical facilitation'
    ],
    techStack: ['Microsoft Excel', 'Canva', 'Public Speaking', 'Community Training'],
    highlights: 'Community Empowerment & Hands-On Tech Mentoring',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-amber-100 to-rose-100'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cisco-cyber',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    issueDate: '07/2026',
    expiryDate: 'Lifetime',
    badge: '🔒',
    category: 'Security'
  },
  {
    id: 'huawei-netsec',
    title: 'Network Security Certificate',
    issuer: 'Huawei ICT Academy',
    issueDate: '07/2026',
    expiryDate: 'Lifetime',
    badge: '🛡️',
    category: 'Security'
  },
  {
    id: 'hki-stunting',
    title: 'Hak Cipta (HKI) – "Stunting Clinic"',
    issuer: 'Directorate General of Intellectual Property (DJKI)',
    issueDate: '06/2026',
    expiryDate: 'Official Legal Copyright',
    badge: '📜',
    category: 'Copyright'
  },
  {
    id: 'huawei-ai',
    title: 'Overview of AI',
    issuer: 'Huawei ICT Academy',
    issueDate: '10/2025',
    expiryDate: 'Lifetime',
    badge: '🤖',
    category: 'AI'
  },
  {
    id: 'mikrotik-mtcna',
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik International',
    issueDate: '05/2026',
    expiryDate: '05/2029',
    badge: '🌐',
    category: 'Network'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    skills: [
      { name: 'JavaScript', badgeColor: 'bg-amber-50 text-amber-800 border-amber-200' },
      { name: 'PHP', badgeColor: 'bg-purple-50 text-purple-800 border-purple-200' },
      { name: 'Python', badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
      { name: 'Java', badgeColor: 'bg-rose-50 text-rose-800 border-rose-200' },
      { name: 'Dart', badgeColor: 'bg-sky-50 text-sky-800 border-sky-200' },
      { name: 'HTML5 & CSS3', badgeColor: 'bg-pink-50 text-pink-800 border-pink-200' },
    ]
  },
  {
    title: 'Frameworks & Web Stack',
    iconName: 'Layers',
    skills: [
      { name: 'React', badgeColor: 'bg-sky-50 text-sky-800 border-sky-200' },
      { name: 'Laravel', badgeColor: 'bg-red-50 text-red-800 border-red-200' },
      { name: 'Flask', badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
      { name: 'Tailwind CSS', badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
      { name: 'Flutter', badgeColor: 'bg-blue-50 text-blue-800 border-blue-200' },
      { name: 'Node.js & Express', badgeColor: 'bg-teal-50 text-teal-800 border-teal-200' },
    ]
  },
  {
    title: 'Database & BaaS',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', badgeColor: 'bg-blue-50 text-blue-800 border-blue-200' },
      { name: 'Supabase', badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
      { name: 'PocketBase', badgeColor: 'bg-purple-50 text-purple-800 border-purple-200' },
      { name: 'Relational DB Design', badgeColor: 'bg-rose-50 text-rose-800 border-rose-200' },
    ]
  },
  {
    title: 'AI, ML & Computer Vision',
    iconName: 'Sparkles',
    skills: [
      { name: 'Machine Learning Basics', badgeColor: 'bg-pink-50 text-pink-800 border-pink-200' },
      { name: 'Computer Vision (CNN)', badgeColor: 'bg-violet-50 text-violet-800 border-violet-200' },
      { name: 'EfficientNet-B0', badgeColor: 'bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200' },
      { name: 'AI Generation Integration', badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
    ]
  },
  {
    title: 'Networking & Security',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'Cisco Networking', badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
      { name: 'VLAN, OSPF, NAT', badgeColor: 'bg-sky-50 text-sky-800 border-sky-200' },
      { name: 'MTCNA (MikroTik)', badgeColor: 'bg-rose-50 text-rose-800 border-rose-200' },
      { name: 'Cybersecurity Fundamentals', badgeColor: 'bg-slate-50 text-slate-800 border-slate-200' },
    ]
  },
  {
    title: 'Development Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', badgeColor: 'bg-zinc-50 text-zinc-800 border-zinc-200' },
      { name: 'Postman', badgeColor: 'bg-orange-50 text-orange-800 border-orange-200' },
      { name: 'VS Code', badgeColor: 'bg-blue-50 text-blue-800 border-blue-200' },
      { name: 'Cisco Packet Tracer', badgeColor: 'bg-teal-50 text-teal-800 border-teal-200' },
      { name: 'Laragon & XAMPP', badgeColor: 'bg-amber-50 text-amber-800 border-amber-200' },
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-edumetric-ai',
    title: 'Refleksi Membangun Modul AI Question Generator pada EduMetric',
    slug: 'edumetric-ai-question-generator',
    category: 'AI & Engineering',
    date: '15 Juli 2026',
    readTime: '4 min read',
    excerpt: 'Bagaimana integrasi Generative AI dalam aplikasi EduMetric membantu guru menyusun bank soal otomatis yang terstruktur, obyektif, dan sesuai kurikulum.',
    content: `
### Latar Belakang & Tantangan Penilaian
Dalam dunia pendidikan, pembuatan soal ujian berkala yang berkualitas menyita waktu yang tidak sedikit bagi tenaga pengajar. Saat memimpin tim proyek **EduMetric**, kami berfokus tidak hanya pada sistem Computer-Based Testing (CBT), melainkan juga prototype modul kecerdasan buatan (*AI Question Generator*).

### Konsep Sistem & Prompt Architecture
Modul AI yang dirancang memanfaatkan beberapa parameter kunci:
1. **Tingkat Kesulitan Soal** (Easy, Medium, Hard berdasarkan Taksonomi Bloom).
2. **Topik / Kompetensi Dasar** yang disesuaikan dengan kurikulum.
3. **Format Pilihan Ganda & Kunci Jawaban otomatis** beserta penjelasan singkat (*rationales*).

\`\`\`json
{
  "subject": "Informatika / Pemrograman Web",
  "difficulty": "Medium",
  "topic": "Rest API & HTTP Methods",
  "questionCount": 5
}
\`\`\`

### Hasil & Dampak bagi Tenaga Pendidik
Dengan prototype ini, guru dapat memangkas waktu penyusunan kisi-kisi dan draft soal hingga **70%**. Hasil pembuatan soal dapat ditinjau ulang (*human-in-the-loop*) sebelum dipublikasikan ke sistem CBT EduMetric.

> "Teknologi AI tidak menggantikan peran guru, melainkan menjadi asisten cerdas yang membebaskan waktu guru untuk lebih fokus pada interaksi dan bimbingan siswa."
    `,
    tags: ['AI Integration', 'EduMetric', 'Full Stack', 'CBT', 'Tech Education'],
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-stunting-hki',
    title: 'Dari Pengujian Software Hingga Meraih Hak Cipta (HKI) Resmi DJKI',
    slug: 'qa-testing-dan-hki-stunting-clinic',
    category: 'QA & Copyright',
    date: '28 Juni 2026',
    readTime: '5 min read',
    excerpt: 'Pengalaman bertugas sebagai QA & Technical Documentation di proyek Stunting Clinic hingga pendaftaran Hak Cipta resmi dari Kemenkumham RI.',
    content: `
### Pentingnya Quality Assurance pada Aplikasi Kesehatan
Aplikasi kesehatan publik seperti **Stunting Clinic** menuntut tingkat akurasi data yang sangat tinggi. Kesalahan kalkulasi indeks tumbuh kembang anak dapat berdampak pada salahnya interpretasi status gizi.

### Langkah-Langkah Pengujian Sistem:
1. **Scenarios & Test Cases**: Menyusun ratusan test case mencakup pengujian batas (*boundary value testing*), validasi form, dan otentikasi role.
2. **Defect Tracking**: Mendokumentasikan setiap temuan bug beserta langkah reproduksi dan severity level.
3. **User Documentation**: Menyusun user guide interaktif dan diagram alur kerja (*workflow diagrams*).

### Pencapaian Legalitas HKI (Hak Cipta)
Salah satu momen paling membanggakan dalam proyek akademik ini adalah ketika aplikasi Stunting Clinic berhasil mendapatkan **Sertifikat Hak Cipta (HKI) dari DJKI Kemenkumham RI**. Pengalaman ini membuktikan bahwa karya ilmiah mahasiswa tidak hanya berhenti di server lokal, melainkan legal dan bermanfaat luas!
    `,
    tags: ['Quality Assurance', 'Testing', 'HKI', 'Documentation', 'Healthcare'],
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-laptop-price-ml',
    title: 'Benchmarking Model Regresi untuk Prediksi Harga Laptop',
    slug: 'benchmarking-model-laptop-price-prediction',
    category: 'Machine Learning',
    date: '10 Juni 2026',
    readTime: '6 min read',
    excerpt: 'Komparasi algoritma Linear Regression, Decision Tree, dan Random Forest Regressor dalam memprediksi harga laptop berdasarkan data spesifikasi.',
    content: `
### Memprediksi Harga Laptop Secara Akurat
Penetapan harga laptop sering kali dipengaruhi oleh kombinasi variabel kompleks: performa CPU, GPU, ukuran RAM, tipe penyimpanan (NVMe/SSD), hingga kualitas layar.

### Workflow Machine Learning:
- **Data Preprocessing & EDA**: Membersihkan data spesifikasi, menangani *categorical features* seperti merek processor dan resolusi layar dengan *one-hot encoding*.
- **Feature Engineering**: Ekstraksi bobot laptop, kapasitas baterai, dan densitas piksel (PPI).
- **Model Training**:
  - Linear Regression (Baseline)
  - Decision Tree Regressor
  - Random Forest Regressor

### Evaluasi Performa ($R^2$ Score)
Model **Random Forest Regressor** menghasilkan akurasi tertinggi dengan nilai $R^2$ mendekati **0.88**, mengungguli Linear Regression sederhana yang sering kali mengalami masalah *underfitting* pada hubungan data non-linear.
    `,
    tags: ['Machine Learning', 'Python', 'Scikit-Learn', 'Data Analytics', 'Random Forest'],
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-myevent-backend',
    title: 'Optimasi Database Relasional pada Platform Tiket Event (MYEVENT)',
    slug: 'optimasi-database-myevent-ticketing',
    category: 'Backend & Database',
    date: '20 Desember 2025',
    readTime: '4 min read',
    excerpt: 'Strategi perancangan ERD dan optimasi query MySQL untuk menangani reservasi tiket online tanpa terjadinya kerancuan data transaksi.',
    content: `
### Tantangan Transaksi Concurrency
Pada platform e-ticketing seperti **MYEVENT**, salah satu masalah klasik backend adalah *race condition* atau pemesanan tiket ganda (*overbooking*) ketika banyak pengguna memesan tiket yang sama secara bersamaan.

### Solusi Skema Database & Transaksi:
1. **Pemanfaatan Database Transactions (ACID)**: Memastikan proses pemotongan kuota tiket dan pembuatan record pemesanan bersifat *atomic*.
2. **Indexing Kolom Kunci**: Menambahkan index pada kolom 'event_id', 'user_id', dan 'status_pembayaran' untuk mempercepat query dashboard admin.
3. **Optimasi Foreign Key**: Menjaga integritas data transaksi antar tabel 'users', 'events', 'tickets', dan 'payments'.

Dengan arsitektur database yang rapi, MYEVENT mampu menyajikan dashboard analitik yang cepat dan responsif bagi pihak penyelenggara acara.
    `,
    tags: ['Database', 'MySQL', 'Laravel', 'Backend', 'System Design'],
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-networking-mtcna',
    title: 'Mengapa Software Engineer Perlu Memahami Networking & Cybersecurity?',
    slug: 'networking-and-cybersecurity-for-developers',
    category: 'Networking',
    date: '12 Mei 2026',
    readTime: '3 min read',
    excerpt: 'Pengalaman mengambil sertifikasi MikroTik MTCNA, Cisco Cybersecurity, dan Huawei Network Security dari perspektif seorang pemrogram web.',
    content: `
### Menembus Batas Antara Kode & Jaringan
Banyak developer beranggapan bahwa jaringan komputer adalah ranah *SysAdmin* atau *Network Engineer*. Namun, perjalanan mengambil sertifikasi **MikroTik Certified Network Associate (MTCNA)** dan **Cisco Cybersecurity** membuka mata saya betapa eratnya hubungan keduanya.

### Keuntungan Memahami Networking bagi Developer:
- **Debugging API & Cors/Port issues**: Memahami routing, NAT, dan IP subnetting memudahkan penanganan koneksi microservices.
- **Security-First Development**: Mengetahui teknik serangan jaringan dasar membantu merancang aplikasi yang tahan dari eksploitasi.
- **Performa Aplikasi**: Mengetahui bagaimana paket data dikirimkan memotivasi optimasi payload API secara lebih efisien.
    `,
    tags: ['Networking', 'MTCNA', 'Cisco', 'Cybersecurity', 'Career Growth'],
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_WORKS = [
  {
    id: 'gallery-1',
    title: 'EduMetric CBT Dashboard & AI Generator',
    category: 'UI/UX & Web Platform',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    description: 'Interface modern dan intuitif dengan palet warna lembut untuk ruang evaluasi siswa dan portal guru.'
  },
  {
    id: 'gallery-2',
    title: 'Stunting Clinic - Official Copyright HKI',
    category: 'Software Documentation & HKI',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description: 'Dokumentasi workflow aplikasi kesehatan yang mendapatkan sertifikat perlindungan cipta DJKI RI.'
  },
  {
    id: 'gallery-3',
    title: 'Laptop Price Prediction EDA & Colab Notebook',
    category: 'Machine Learning Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Visualisasi korelasi fitur spesifikasi laptop dan grafik performa model Random Forest Regressor.'
  },
  {
    id: 'gallery-4',
    title: 'MYEVENT Administrative Portal',
    category: 'Full Stack & Dashboard',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    description: 'Admin portal untuk manajemen transaksi, cetak e-ticket, dan pencatatan kehadiran peserta.'
  },
  {
    id: 'gallery-5',
    title: 'Community Training & Workshop Visuals',
    category: 'Public Empowerment',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    description: 'Kegiatan pengabdian masyarakat Universitas Nusa Mandiri dalam pelatihan Excel & Canva.'
  },
  {
    id: 'gallery-6',
    title: 'Cisco & Huawei Network Architecture',
    category: 'Networking & Security',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    description: 'Desain skema konfigurasi VLAN, OSPF, dan pengujian keamanan jaringan Cisco Packet Tracer.'
  }
];
