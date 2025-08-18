"use client";

import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { PricingGrid } from "@/components/pricing/PricingGrid";
import { useEffect, useRef } from "react";

const container: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// Lightweight SVG wave layer for background parallax
const WaveLayer = ({
  className,
  color,
  opacity = 0.2,
  height = 120,
  y = 8,
  duration = 12,
  delay = 0,
}: {
  className?: string;
  color: string;
  opacity?: number;
  height?: number;
  y?: number;
  duration?: number;
  delay?: number;
}) => (
  <motion.svg
    aria-hidden
    className={className}
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    initial={{ y: 0 }}
    animate={{ y: [0, -y, 0, y, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
    style={{ height }}
  >
    <path
      d="M0,80 C 120,60 240,100 360,80 C 480,60 600,20 720,40 C 840,60 960,100 1080,90 C 1200,80 1320,60 1440,80 L1440,120 L0,120 Z"
      fill={color}
      fillOpacity={opacity}
    />
  </motion.svg>
);

// Fluid circle shader canvas (interactive, no deps)
const ShaderGlobe = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(2, Math.floor(rect.width * dpr));
      canvas.height = Math.max(2, Math.floor(rect.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_hover;

      float hash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
      float noise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); float a=hash(i); float b=hash(i+vec2(1.0,0.0)); float c=hash(i+vec2(0.0,1.0)); float d=hash(i+vec2(1.0,1.0)); vec2 u=f*f*(3.0-2.0*f); return mix(mix(a,b,u.x), mix(c,d,u.x), u.y); }
      float fbm(vec2 p){ float v=0.0; float a=0.5; for(int i=0;i<5;i++){ v += a*noise(p); p *= 2.0; a *= 0.5; } return v; }

      vec3 palette(float t){
        vec3 a = vec3(0.01,0.09,0.16); // deep ocean
        vec3 b = vec3(0.02,0.20,0.30);
        vec3 c = vec3(0.07,0.72,0.85); // aqua
        return mix(a, mix(b, c, t), 0.9);
      }

      void main(){
        vec2 res = u_resolution;
        vec2 uv = (gl_FragCoord.xy - 0.5*res) / min(res.x,res.y);
        float r = length(uv);

        // circular mask
        float radius = 0.48;
        float edge = 0.02;
        float mask = 1.0 - smoothstep(radius, radius+edge, r);

        // mouse in same space as uv
        vec2 m = (u_mouse - 0.5*res) / min(res.x,res.y);
        float md = length(uv - m);

        // domain-warped fbm
        float t = u_time;
        vec2 p = uv * 2.2;
        vec2 q = vec2(fbm(p + vec2(0.0, t*0.25)), fbm(p + vec2(5.2, -t*0.23)));
        p += 0.45 * q;

        // swirl around mouse when hovering
        float swirl = u_hover * 0.65 * exp(-3.0 * md);
        float cs = cos(swirl), sn = sin(swirl);
        mat2 rot = mat2(cs, -sn, sn, cs);
        p = rot * (p - m) + m;

        float f = fbm(p + vec2(t*0.5, -t*0.35));
        float g = fbm(p*1.8 - vec2(t*0.3, t*0.2));
        float v = smoothstep(0.2, 0.9, f*0.6 + g*0.5);

        // hover ripple
        float ripple = u_hover * 0.25 * sin(18.0 * md - 3.5 * t) * exp(-3.5 * md);
        v = clamp(v + ripple, 0.0, 1.0);

        vec3 col = palette(v);
        col += vec3(0.07,0.72,0.85) * 0.15 * (1.0 - smoothstep(0.3, 0.48, r));

        float alpha = mask;
        gl_FragColor = vec4(col * mask, alpha);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return () => {};

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return () => {};
    }

    gl.useProgram(prog);
    // enable alpha blending for transparent outside-circle
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Fullscreen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const vertices = new Float32Array([
      -1, -1,  1, -1,  -1,  1,
       1, -1,  1,  1,  -1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(prog, "u_resolution");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uHover = gl.getUniformLocation(prog, "u_hover");

    // pointer interaction state
    let mouseX = canvas.width * 0.5;
    let mouseY = canvas.height * 0.5;
    let hover = 0;

    const handleMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) * dpr;
      // convert from top-left origin to bottom-left origin for WebGL
      mouseY = (rect.height - (e.clientY - rect.top)) * dpr;
    };
    const handleEnter = () => { hover = 1; };
    const handleLeave = () => { hover = 0; };

    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerenter", handleEnter);
    canvas.addEventListener("pointerleave", handleLeave);

    const start = performance.now();
    const render = () => {
      raf = requestAnimationFrame(render);
      const t = (performance.now() - start) / 1000;
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform1f(uHover, hover);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    resize();
    render();

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerenter", handleEnter);
      canvas.removeEventListener("pointerleave", handleLeave);
      ro.disconnect();
      gl.useProgram(null);
      if (buffer) gl.deleteBuffer(buffer);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
      if (prog) gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: "block" }}
      aria-label="Globe animasi (shader)"
      role="img"
    />
  );
};

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center overflow-hidden rounded-xl text-foreground bg-[linear-gradient(180deg,var(--deep-ocean-blue)_0%,#001427_60%,#000A14_100%)]">
        {/* Only waves remain (spotlight/grid removed) */}
        {/* Parallax wave layers (faster + more layers) */}
        <WaveLayer
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
          color="#010F1E"
          opacity={0.45}
          height={260}
          y={30}
          duration={12}
          delay={0}
        />
        <WaveLayer
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
          color="#021E36"
          opacity={0.38}
          height={230}
          y={26}
          duration={11}
          delay={0.25}
        />
        <WaveLayer
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
          color="#052C44"
          opacity={0.30}
          height={205}
          y={22}
          duration={10}
          delay={0.5}
        />
        <WaveLayer
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
          color="#0A3A5F"
          opacity={0.28}
          height={185}
          y={20}
          duration={8}
          delay={0.75}
        />
        <WaveLayer
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
          color="var(--aqua-glow)"
          opacity={0.22}
          height={160}
          y={16}
          duration={7}
          delay={1}
        />
        <WaveLayer
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
          color="#13AEDA"
          opacity={0.20}
          height={130}
          y={12}
          duration={6}
          delay={1.2}
        />
        <WaveLayer
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
          color="#66E6FF"
          opacity={0.16}
          height={110}
          y={10}
          duration={5.5}
          delay={1.35}
        />
        {/* Removed orca fin to keep only wave animations */}

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="relative z-10 space-y-6">
          <motion.h1 variants={item} className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Predator Digital. Inovator Web.
          </motion.h1>
          <motion.p variants={item} className="text-lg text-secondary-foreground/90">
            Seperti orca yang menguasai lautan, kami menguasai dunia digital dengan strategi yang presisi
            dan kolaborasi yang kuat.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="[box-shadow:0_0_24px_var(--aqua-glow)/20] hover:[box-shadow:0_0_36px_var(--aqua-glow)/35] ring-1 ring-[var(--aqua-glow)]/30 hover:ring-[var(--aqua-glow)]/50 transition-all duration-300"
            >
              <a href="/contact">Mulai Partnership</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--aqua-glow)]/40 hover:bg-[var(--aqua-glow)]/10 ring-1 ring-[var(--aqua-glow)]/20 hover:ring-[var(--aqua-glow)]/40 transition-all duration-300"
            >
              <a href="/portfolio">Lihat Portfolio</a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 h-64 md:h-80 lg:h-96"
        >
          <ShaderGlobe />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Layanan Utama Kami</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Integrasi AI",
              desc:
                "Mengintegrasikan kecerdasan buatan ke website atau aplikasi Anda untuk meningkatkan pengalaman pengguna, mengotomatiskan proses, dan mendapatkan insight dari data.",
              features: [
                "Implementasi machine learning",
                "Pemrosesan bahasa natural (NLP)",
                "Analitik prediktif",
                "Mesin personalisasi",
                "Integrasi chatbot",
              ],
            },
            {
              title: "Aplikasi Web Kustom",
              desc:
                "Solusi web khusus sesuai kebutuhan bisnis Anda, dibangun dengan teknologi modern dan ditingkatkan dengan kapabilitas AI.",
              features: [
                "Pengembangan full‑stack",
                "Desain responsif",
                "Integrasi basis data",
                "Pengembangan API",
                "Arsitektur yang dapat diskalakan",
              ],
            },
            {
              title: "Solusi E‑commerce",
              desc:
                "Toko online bertenaga AI yang tidak hanya menjual produk, tetapi juga memahami pelanggan, memprediksi tren, dan mengoptimalkan penjualan.",
              features: [
                "Mesin rekomendasi produk",
                "Penetapan harga dinamis",
                "Manajemen inventaris",
                "Integrasi pembayaran",
                "Dasbor analitik",
              ],
            },
            {
              title: "Pengembangan CMS",
              desc:
                "Sistem manajemen konten yang ditingkatkan dengan AI untuk membantu Anda membuat, mengelola, dan mengoptimalkan konten digital lebih efisien.",
              features: [
                "Pembuatan konten dengan AI",
                "Alat optimasi SEO",
                "Analitik perilaku pengguna",
                "Penjadwalan konten otomatis",
                "Publikasi multi‑channel",
              ],
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card
                className="bg-white/60 dark:bg-white/5 border-white/10 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:translate-y-[1px] hover:ring-1 hover:ring-[var(--aqua-glow)]/40"
              >
                <CardHeader>
                  <CardTitle>{c.title}</CardTitle>
                  <CardDescription>{c.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {c.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild>
                    <a href="/services" className="underline-anim">
                      Pelajari lebih lanjut →
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section (synced with docs/pricing.md) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Paket Rekomendasi</h2>
        <PricingGrid />
      </section>

      {/* Student Services Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-3">Layanan Web Khusus untuk Mahasiswa</h2>
          <p className="text-foreground/80">
            Kami memahami kebutuhan unik mahasiswa dan menawarkan solusi terjangkau untuk membantu Anda membangun kehadiran online, portofolio, dan proyek digital.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>• Website Portofolio — Tampilkan karya Anda dengan website portofolio berdesain profesional dengan harga ramah mahasiswa.</li>
            <li>• Bantuan Proyek Akademik — Butuh bantuan untuk proyek pengembangan web di kampus? Layanan kami siap membimbing Anda.</li>
            <li>• Persiapan Magang — Bangun proyek nyata yang mengesankan calon pemberi kerja dan membantu meraih magang impian.</li>
            <li>• Program Mentorship — Terhubung dengan developer berpengalaman untuk bimbingan dan saran karier.</li>
          </ul>
          <div className="mt-4 rounded-lg border p-4 text-sm text-foreground/80">Dapatkan diskon 30% untuk paket standar kami dengan kartu mahasiswa yang valid. Tersedia harga khusus grup untuk organisasi mahasiswa.</div>
        </div>
        <div className="relative h-56 md:h-72">
          <Image src="/next.svg" alt="Layanan mahasiswa" fill className="object-contain dark:invert" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Testimoni</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "Bekerja sama dengan VorcaStudio mengubah bisnis online kami. Integrasi AI mereka meningkatkan tingkat konversi kami sebesar 45% hanya dalam dua bulan!",
              author: "Sarah Johnson",
              role: "CEO TechStart",
            },
            {
              quote:
                "Timnya memberikan tepat yang kami butuhkan — website modern dengan fitur AI yang disukai pelanggan kami. Komunikasi sangat baik sepanjang proyek.",
              author: "Michael Chen",
              role: "Direktur Pemasaran",
            },
            {
              quote:
                "Sebagai mahasiswa, saya khawatir soal biaya, tetapi harga khusus mahasiswa mereka membuat saya bisa mendapatkan website profesional untuk bisnis freelance saya.",
              author: "Emma Rodriguez",
              role: "Mahasiswa Ilmu Komputer",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <figure
                className="rounded-lg border border-white/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur-md transition-all duration-300 hover:translate-y-[1px] hover:ring-1 hover:ring-[var(--aqua-glow)]/40"
              >
                <blockquote className="text-sm text-foreground/90">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-xs text-foreground/60">— {t.author}, {t.role}</figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-3">Tentang</h2>
        <p className="text-foreground/80 max-w-3xl">
          Kami percaya pada kekuatan kecerdasan buatan untuk mentransformasi web. Misi kami adalah menghadirkan pengembangan web berbasis AI mutakhir yang dapat diakses oleh bisnis dari segala ukuran.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-foreground/80">
          <li><span className="font-semibold">Inovasi:</span> Kami terus mengeksplorasi teknologi dan teknik baru untuk menghadirkan solusi terbaik.</li>
          <li><span className="font-semibold">Kualitas:</span> Kami tidak pernah berkompromi soal kualitas — setiap proyek dibangun dengan standar tertinggi.</li>
          <li><span className="font-semibold">Kolaborasi:</span> Kami bekerja erat dengan klien agar visi mereka menjadi kenyataan.</li>
          <li><span className="font-semibold">Edukasi:</span> Kami memberdayakan klien dengan pengetahuan tentang solusi digital mereka.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-6">Kontak</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <ContactForm />
          </div>
          <div className="rounded-lg border p-6 space-y-2 text-sm">
            <div>Email: contact@vorcastudio.com</div>
            <div>Telepon: +1 (555) 123-4567</div>
            <div>Alamat: 123 Innovation Drive, Tech City</div>
            <div className="pt-2">
              <a href="/contact" className="underline-anim text-primary hover:text-primary">
                Opsi kontak lainnya →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
