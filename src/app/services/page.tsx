import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeInOnView, StaggerContainer } from "@/components/ui/animated";

export const metadata: Metadata = {
  title: "Services — VorcaStudio",
  description:
    "Detailed AI-powered web development services: AI integration, custom apps, e‑commerce, and CMS.",
};

export default function ServicesPage() {
  return (
    <Section className="mx-auto max-w-7xl">
      <StaggerContainer className="space-y-6">
        <FadeInOnView>
          <h1 className="text-3xl font-bold">Our Services</h1>
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
              <h3 className="font-semibold">Web Development</h3>
              <p className="text-sm text-foreground/80">Membangun digital presence yang menguasai market.</p>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Koordinasi tim developer seperti <em>pod orca</em> — seamless dan powerful</li>
                <li>Technical expertise + strategic thinking</li>
                <li>Custom solutions, bukan template</li>
              </ul>
            </div>
          </FadeInOnView>
          <FadeInOnView delay={0.06}>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">UI/UX Design</h3>
              <p className="text-sm text-foreground/80">Menciptakan pengalaman yang memorable dan converting.</p>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Precision dalam setiap interaction — seperti orca yang menghitung tiap gerakan</li>
                <li>User‑centric approach</li>
                <li>Conversion‑focused design</li>
              </ul>
            </div>
          </FadeInOnView>
          <FadeInOnView delay={0.12}>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">Digital Strategy</h3>
              <p className="text-sm text-foreground/80">Roadmap menuju digital dominance.</p>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Mapping digital territory seperti orca memetakan hunting grounds</li>
                <li>Data‑driven decisions</li>
                <li>Long‑term partnership planning</li>
              </ul>
            </div>
          </FadeInOnView>
          <FadeInOnView delay={0.18}>
            <div className="rounded-lg border p-6 space-y-2">
              <h3 className="font-semibold">Brand Development</h3>
              <p className="text-sm text-foreground/80">Identity yang powerful seperti orca di lautannya.</p>
              <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
                <li>Strategic brand foundations & guidelines</li>
                <li>Visual system yang konsisten dan scalable</li>
                <li>Activation plan lintas channel</li>
              </ul>
            </div>
          </FadeInOnView>
        </div>
      </StaggerContainer>
    </Section>
  );
}

