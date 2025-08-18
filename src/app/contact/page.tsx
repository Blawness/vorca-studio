import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/ui/section";
import { FadeInOnView, StaggerContainer } from "@/components/ui/animated";

export const metadata: Metadata = {
  title: "Contact — VorcaStudio",
  description: "Get in touch about services, pricing, timelines, or project ideas.",
};

export default function ContactPage() {
  return (
    <Section className="mx-auto max-w-7xl">
      <StaggerContainer className="space-y-6">
        <FadeInOnView>
          <h1 className="text-3xl font-bold">Contact</h1>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-foreground/80 max-w-3xl">Siap berburu digital success bersama?</p>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-sm text-foreground/70 max-w-3xl">Pendekatan kami <span className="font-medium">partnership‑focused</span>, bukan sales‑focused. Mulai conversation—bukan sekadar get quote.</p>
        </FadeInOnView>
        <div className="grid gap-6 md:grid-cols-2">
          <FadeInOnView>
            <div className="rounded-lg border p-6">
              <ContactForm />
            </div>
          </FadeInOnView>
          <FadeInOnView delay={0.08}>
            <div className="rounded-lg border p-6 space-y-2 text-sm">
              <div>Email: contact@vorcastudio.com</div>
              <div>Phone: +1 (555) 123-4567</div>
              <div>Address: 123 Innovation Drive, Tech City</div>
            </div>
          </FadeInOnView>
        </div>
      </StaggerContainer>
    </Section>
  );
}
