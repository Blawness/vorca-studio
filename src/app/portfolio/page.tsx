import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FadeInOnView, StaggerContainer } from "@/components/ui/animated";

export const metadata: Metadata = {
  title: "Portofolio — VorcaStudio",
  description: "Studi kasus pilihan yang menampilkan strategi, eksekusi, dan hasil terukur.",
};

export default function PortfolioPage() {
  const cases = [
    {
      title: "Perombakan E‑commerce untuk TechStart",
      items: [
        { key: "Tantangan", value: "Konversi rendah dan UX usang di pasar yang kompetitif." },
        { key: "Strategi", value: "Pendekatan berburu ala orca: memetakan perjalanan pengguna, memprioritaskan alur berdampak tinggi, dan bereksperimen cepat." },
        { key: "Eksekusi", value: "Membangun ulang PDP dan checkout, menambahkan rekomendasi AI, meningkatkan performa (Core Web Vitals)." },
        { key: "Hasil", value: "+45% konversi, +22% AOV, −38% penurunan checkout dalam 8 minggu." },
        { key: "Kolaborasi", value: "Kemitraan berkelanjutan dengan sprint optimasi bulanan." },
      ],
    },
    {
      title: "Situs B2B SaaS + Migrasi CMS",
      items: [
        { key: "Tantangan", value: "Halaman marketing sulit dirawat dan pembaruan konten lambat." },
        { key: "Strategi", value: "Design system + blok CMS untuk iterasi cepat, arsitektur berfokus SEO." },
        { key: "Eksekusi", value: "Website Next.js, CMS modular, brief konten berbantuan AI, instrumentasi analitik." },
        { key: "Hasil", value: "+63% trafik organik, +31% permintaan demo dalam 3 bulan." },
        { key: "Kolaborasi", value: "Sesi enablement untuk tim internal; backlog bersama untuk operasi pertumbuhan." },
      ],
    },
  ];

  return (
    <>
      <Section className="mx-auto max-w-7xl space-y-8">
        <StaggerContainer className="space-y-6">
          <FadeInOnView>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Portofolio & Studi Kasus</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">Setiap studi kasus disusun berdasarkan kerangka: Tantangan → Strategi → Eksekusi → Hasil → Kolaborasi.</p>
            </div>
          </FadeInOnView>

          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((c, idx) => (
              <FadeInOnView key={c.title} delay={idx * 0.08}>
                <Card className="p-6 space-y-3">
                  <h2 className="text-lg font-semibold">{c.title}</h2>
                  <div className="text-sm space-y-2">
                    {c.items.map((i) => (
                      <div key={i.key}>
                        <span className="font-medium">{i.key}:</span> <span className="text-foreground/80">{i.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeInOnView>
            ))}
          </div>
        </StaggerContainer>
      </Section>
    </>
  );
}
