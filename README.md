<div align="center">

# Mira Amelia — Portfolio & Blog

Portofolio minimal & blog interaktif milik **Mira Amelia Prayitno**, Software Engineer.

</div>

🔗 **Live:** https://mira-amelia-portfolio.vercel.app

Dibangun dengan **React 19 + Vite + Tailwind CSS v4**, menampilkan hero section, tentang, proyek, galeri, skills & sertifikasi, blog, kontak, CV modal, dan admin panel — dengan tema minimal netral serta background animasi (orb, partikel, simbol melayang).

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

## Admin Panel & Kata Sandi

- Akses portal admin: tambahkan `/#admin` atau `?admin=true` di akhir URL.
- Kata sandi diambil dari env `VITE_ADMIN_PASSWORD` (baca `.env.example`). Tanpa env tersebut, dipakai fallback bawaan di `src/components/AdminPanel.tsx`.
- **Jangan commit password asli** — `.env*` sudah di-ignore git.

## Deploy ke Vercel

### Via Git (disarankan)

1. Buat repo GitHub (hindari karakter `&` pada nama repo), lalu push project ini.
2. Import repo di [Vercel Dashboard](https://vercel.com/new).
3. Vercel auto-detect: framework **Vite**, build command `npm run build`, output directory `dist`. Tidak perlu konfigurasi tambahan.
4. **Wajib:** set env `VITE_ADMIN_PASSWORD` di Vercel Dashboard (Settings → Environment Variables) dengan password yang kamu mau — jika tidak di-set, fallback bawaan akan dipakai.

### Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Ikuti prompt, framework akan terdeteksi otomatis (`Vite`), lalu `vercel --prod` untuk production.

> Aplikasi ini murni static (tanpa backend). Verifikasi password terjadi di sisi browser, sehingga password tetap bisa ditemukan lewat DevTools — env var ini menyembunyikannya dari kode & repo, bukan keamanan penuh.

## Deployment Saat Ini

- **Domain production:** https://mira-amelia-portfolio.vercel.app
- **Project:** `mira-amelia-portfolio` (workspace `rizky-lubis-projects`)
- **Deploy manual via CLI:** `vercel --prod --yes --name mira-amelia-portfolio` (nama project wajib eksplisit karena folder lokal mengandung karakter `&`/`---`)
