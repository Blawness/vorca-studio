import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FadeInOnView, StaggerContainer } from "@/components/ui/animated";

export const metadata: Metadata = {
  title: "Portfolio — VorcaStudio",
  description: "Selected case studies showcasing strategy, execution, and measurable results.",
};

export default function PortfolioPage() {
  const cases = [
    {
      title: "E‑commerce Revamp for TechStart",
      items: [
        { key: "Challenge", value: "Low conversion and outdated UX in a competitive market." },
        { key: "Strategy", value: "Orca-inspired hunting approach: map user journeys, prioritize high‑impact flows, and experiment fast." },
        { key: "Execution", value: "Rebuilt PDP and checkout, added AI recommendations, improved performance (Core Web Vitals)." },
        { key: "Results", value: "+45% conversion, +22% AOV, −38% checkout drop‑off in 8 weeks." },
        { key: "Collaboration", value: "Continuous partnership with monthly optimization sprints." },
      ],
    },
    {
      title: "B2B SaaS Site + CMS Migration",
      items: [
        { key: "Challenge", value: "Hard-to-maintain marketing pages and slow content updates." },
        { key: "Strategy", value: "Design system + CMS blocks for rapid iteration, SEO-first architecture." },
        { key: "Execution", value: "Next.js website, modular CMS, AI-assisted content briefs, analytics instrumentation." },
        { key: "Results", value: "+63% organic traffic, +31% demo requests in 3 months." },
        { key: "Collaboration", value: "Enablement workshops for internal team; shared backlog for growth ops." },
      ],
    },
  ];

  return (
    <>
      <Section className="mx-auto max-w-7xl space-y-8">
        <StaggerContainer className="space-y-6">
          <FadeInOnView>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Portfolio & Case Studies</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">Setiap studi kasus disusun berdasarkan framework: Challenge → Strategy → Execution → Results → Collaboration.</p>
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
