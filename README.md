<div align="center">

# Mira Amelia — Portfolio & Blog

Portofolio soft aesthetic & blog interaktif milik **Mira Amelia Prayitno**, Software Engineer.

</div>

Dibangun dengan **React 19 + Vite + Tailwind CSS v4**, menampilkan hero section, tentang, proyek, galeri, skills & sertifikasi, blog, kontak, CV modal, dan admin panel.

## Tech Stack

- [React](https://react.dev) 19 + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev) 6
- [Tailwind CSS](https://tailwindcss.com) 4 (via `@tailwindcss/vite`)
- [Motion](https://motion.dev) untuk animasi
- [lucide-react](https://lucide.dev) untuk ikon

## Cara Menjalankan Lokal

**Prasyarat:** Node.js 18+

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Scripts

| Script            | Fungsi                     |
| ----------------- | -------------------------- |
| `npm run dev`     | Dev server (port 3000)     |
| `npm run build`   | Build produksi ke `dist/`  |
| `npm run preview` | Preview hasil build        |
| `npm run lint`    | Type check (`tsc --noEmit`)|

> Catatan: di Windows, jalankan type-check/build lewat `node node_modules/typescript/bin/tsc --noEmit` dan `node node_modules/vite/bin/vite.js build` jika folder project mengandung karakter `&`.

## Deploy ke Vercel

### Via Git (disarankan)

1. Buat repo GitHub (hindari karakter `&` pada nama repo), lalu push project ini.
2. Import repo di [Vercel Dashboard](https://vercel.com/new).
3. Vercel auto-detect: framework **Vite**, build command `npm run build`, output directory `dist`. Tidak perlu konfigurasi tambahan.

### Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Ikuti prompt, framework akan terdeteksi otomatis (`Vite`), lalu `vercel --prod` untuk production.

Tidak ada environment variable yang dibutuhkan — aplikasi ini murni static (tanpa backend/server side code).
