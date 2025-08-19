import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FadeInOnView, StaggerContainer } from "@/components/ui/animated";

export const metadata: Metadata = {
  title: "Layanan Mahasiswa — VorcaStudio",
  description: "Solusi web & pemrograman untuk tugas kuliah — profesional, edukatif, dan terjangkau.",
};

export default function StudentsPage() {
  return (
    <Section noBg className="mx-auto max-w-7xl bg-transparent space-y-8">
      {/* Hero - visible on initial load */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">VorcaStudio untuk Mahasiswa</h1>
        <p className="text-muted-foreground max-w-2xl">Solusi Web & Pemrograman untuk Tugas Kuliah — Dibuat Profesional, Dibimbing dengan Edukatif</p>
        <div className="pt-2">
          <Button asChild size="lg" className="bg-[linear-gradient(90deg,var(--aqua-glow),#33D3FF)] text-white shadow-[0_0_24px_rgba(0,194,255,0.25)]">
            <Link href="/contact">Mulai Konsultasi Gratis</Link>
          </Button>
        </div>
      </div>

      {/* Animated content below */}
      <StaggerContainer className="space-y-6">
        <FadeInOnView>
          <p className="text-foreground/80 max-w-3xl">
            Sebagai agency digital yang berbasis pada inovasi, efisiensi, dan kecerdasan teknis, VorcaStudio membuka layanan khusus mahasiswa untuk membantu pengerjaan tugas web development, pemrograman, dan proyek akademik — dengan pendekatan real-world.
          </p>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-foreground/80 max-w-3xl">
            Kami tidak menggantikan proses belajar. Kami membantu Anda memahami, menerapkan, dan mempresentasikan kode & desain seperti seorang developer profesional.
          </p>
        </FadeInOnView>

        {/* Apa yang Kami Bantu */}
        <FadeInOnView>
          <h2 className="text-2xl font-semibold mt-4">✅ Apa yang Kami Bantu?</h2>
        </FadeInOnView>
        <div className="grid gap-6 md:grid-cols-2">
          <FadeInOnView>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">1. Tugas Web Development</h3>
              <div className="text-sm text-foreground/80">(HTML, CSS, JavaScript, React, dll)</div>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Landing page, portofolio, to‑do apps</li>
                <li>Animasi & interaksi UI</li>
                <li>Responsive & mobile‑first design</li>
              </ul>
            </div>
          </FadeInOnView>
          <FadeInOnView>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">2. Proyek Pemrograman</h3>
              <div className="text-sm text-foreground/80">(Node.js, Python, PHP, Flutter, dll)</div>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>CRUD aplikasi</li>
                <li>Integrasi API</li>
                <li>Sistem login sederhana</li>
                <li>Database (MySQL, Firebase, SQLite)</li>
              </ul>
            </div>
          </FadeInOnView>
          <FadeInOnView>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">3. UI/UX & Desain Digital</h3>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Desain web/app di Figma</li>
                <li>Prototipe klikable</li>
                <li>Implementasi desain ke kode</li>
              </ul>
            </div>
          </FadeInOnView>
          <FadeInOnView>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">4. Deployment & Dokumentasi</h3>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Hosting gratis (GitHub Pages, Netlify, Vercel)</li>
                <li>Panduan setup & instalasi</li>
                <li>Komentar kode & penjelasan teknis</li>
              </ul>
            </div>
          </FadeInOnView>
        </div>

        {/* Free Konsultasi */}
        <FadeInOnView>
          <h2 className="text-2xl font-semibold">💡 Free Konsultasi (30 Menit)</h2>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-foreground/80 max-w-3xl">Kami percaya pembelajaran dimulai dari pertanyaan. Dapatkan konsultasi gratis untuk:</p>
        </FadeInOnView>
        <FadeInOnView>
          <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1 max-w-3xl">
            <li>Memahami soal tugas</li>
            <li>Menentukan teknologi yang tepat</li>
            <li>Debugging error</li>
            <li>Review struktur proyek</li>
          </ul>
        </FadeInOnView>
        <FadeInOnView>
          <div className="text-xs text-foreground/70">📌 Cukup tunjukkan kartu mahasiswa atau email kampus.</div>
        </FadeInOnView>

        {/* Harga */}
        <FadeInOnView>
          <h2 className="text-2xl font-semibold">💰 Harga Khusus Mahasiswa (Terjangkau & Transparan)</h2>
        </FadeInOnView>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FadeInOnView>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Tugas Web Dasar (HTML/CSS/JS)</h3>
              <div className="text-sm text-foreground/80">Rp 150.000 – Rp 300.000</div>
            </div>
          </FadeInOnView>
          <FadeInOnView>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Web Interaktif (JS + API)</h3>
              <div className="text-sm text-foreground/80">Rp 350.000 – Rp 600.000</div>
            </div>
          </FadeInOnView>
          <FadeInOnView>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">UI/UX + Implementasi</h3>
              <div className="text-sm text-foreground/80">Rp 500.000 – Rp 800.000</div>
            </div>
          </FadeInOnView>
          <FadeInOnView>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Full‑Stack Mini Project</h3>
              <div className="text-sm text-foreground/80">Rp 800.000 – Rp 1.500.000</div>
            </div>
          </FadeInOnView>
          <FadeInOnView>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Bimbingan / Mentoring (per jam)</h3>
              <div className="text-sm text-foreground/80">Rp 100.000</div>
            </div>
          </FadeInOnView>
        </div>
        <FadeInOnView>
          <p className="text-sm text-foreground/80">💬 Semua harga sudah termasuk kode bersih, dokumentasi, dan deployment dasar.</p>
        </FadeInOnView>

        {/* Proses Kerja */}
        <FadeInOnView>
          <h2 className="text-2xl font-semibold">🛠 Proses Kerja Kami (Seperti Agency Profesional)</h2>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-foreground/80 max-w-3xl">Anda tidak hanya dapat file siap kumpul, tapi juga pemahaman yang siap dipresentasikan.</p>
        </FadeInOnView>

        {/* Bonus */}
        <FadeInOnView>
          <h2 className="text-2xl font-semibold">🎁 Bonus Eksklusif untuk Mahasiswa</h2>
        </FadeInOnView>
        <FadeInOnView>
          <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1 max-w-3xl">
            <li>📂 Template GitHub siap pakai</li>
            <li>📚 Akses ke dokumentasi internal (Git, deployment, best practices)</li>
            <li>🔄 Diskon 10% untuk teman satu kampus (program referral)</li>
            <li>🧠 Panduan "Cara Jelaskan Kode ke Dosen"</li>
          </ul>
        </FadeInOnView>

        {/* Filosofi */}
        <FadeInOnView>
          <h2 className="text-2xl font-semibold">🐋 Filosofi Kami untuk Mahasiswa</h2>
        </FadeInOnView>
        <FadeInOnView>
          <blockquote className="text-sm text-foreground/90 max-w-3xl">“Seperti Orca yang cerdik dan kuat, kami percaya mahasiswa bukan hanya butuh jawaban — tapi strategi.”</blockquote>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-foreground/80 max-w-3xl">Kami di sini bukan untuk mengerjakan tugas Anda, tapi untuk membuat Anda lebih pintar dari tugas itu sendiri.</p>
        </FadeInOnView>
      </StaggerContainer>
    </Section>
  );
}
