import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/ui/section";
import { FadeInOnView, StaggerContainer } from "@/components/ui/animated";

export const metadata: Metadata = {
  title: "Kontak — VorcaStudio",
  description: "Hubungi kami tentang layanan, harga, timeline, atau ide proyek.",
};

export default function ContactPage() {
  return (
    <Section noBg className="mx-auto max-w-7xl">
      <StaggerContainer className="space-y-6">
        <FadeInOnView>
          <h1 className="text-3xl font-bold">Kontak</h1>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-foreground/80 max-w-3xl">Siap berburu kesuksesan digital bersama?</p>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-sm text-foreground/70 max-w-3xl">Pendekatan kami <span className="font-medium">berfokus pada kemitraan</span>, bukan penjualan. Mulai percakapan—bukan sekadar meminta penawaran.</p>
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
              <div>Telepon: +1 (555) 123-4567</div>
              <div>Alamat: 123 Innovation Drive, Tech City</div>
            </div>
          </FadeInOnView>
        </div>
      </StaggerContainer>
    </Section>
  );
}
