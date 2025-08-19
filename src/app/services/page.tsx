import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeInOnView, StaggerContainer } from "@/components/ui/animated";

export const metadata: Metadata = {
  title: "Layanan — VorcaStudio",
  description:
    "Layanan pengembangan web bertenaga AI: integrasi AI, aplikasi kustom, e‑commerce, dan CMS.",
};

export default function ServicesPage() {
  return (
    <Section className="mx-auto max-w-7xl">
      <StaggerContainer className="space-y-6">
        <FadeInOnView>
          <h1 className="text-3xl font-bold">Layanan Kami</h1>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-foreground/80 max-w-3xl">
            Framework: setiap service kami dijelaskan dengan analogi <span className="font-medium">orca hunting strategy</span> — intelligence,
            koordinasi tim seperti <em>pod</em>, dan eksekusi dengan precision.
          </p>
        </FadeInOnView>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FadeInOnView>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">Pengembangan Web</h3>
              <p className="text-sm text-foreground/80">Membangun digital presence yang menguasai market.</p>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Koordinasi tim developer seperti <em>pod orca</em> — seamless dan powerful</li>
                <li>Keahlian teknis + pemikiran strategis</li>
                <li>Custom solutions, bukan template</li>
              </ul>
            </div>
          </FadeInOnView>
          <FadeInOnView delay={0.06}>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">Desain UI/UX</h3>
              <p className="text-sm text-foreground/80">Menciptakan pengalaman yang memorable dan converting.</p>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Presisi dalam setiap interaksi — seperti orca yang menghitung tiap gerakan</li>
                <li>Pendekatan berpusat pada pengguna</li>
                <li>Desain berfokus pada konversi</li>
              </ul>
            </div>
          </FadeInOnView>
          <FadeInOnView delay={0.12}>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">Strategi Digital</h3>
              <p className="text-sm text-foreground/80">Roadmap menuju digital dominance.</p>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Pemetaan wilayah digital seperti orca memetakan area berburu</li>
                <li>Keputusan berbasis data</li>
                <li>Perencanaan kemitraan jangka panjang</li>
              </ul>
            </div>
          </FadeInOnView>
          <FadeInOnView delay={0.18}>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">Pengembangan Merek</h3>
              <p className="text-sm text-foreground/80">Identity yang powerful seperti orca di lautannya.</p>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Fondasi dan pedoman brand yang strategis</li>
                <li>Sistem visual yang konsisten dan dapat diskalakan</li>
                <li>Rencana aktivasi lintas kanal</li>
              </ul>
            </div>
          </FadeInOnView>
        </div>
      </StaggerContainer>
    </Section>
  );
}

