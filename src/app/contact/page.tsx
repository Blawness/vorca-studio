import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact — VorcaStudio",
  description: "Get in touch about services, pricing, timelines, or project ideas.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-foreground/80 max-w-3xl">Siap berburu digital success bersama?</p>
      <p className="text-sm text-foreground/70 max-w-3xl">Pendekatan kami <span className="font-medium">partnership‑focused</span>, bukan sales‑focused. Mulai conversation—bukan sekadar get quote.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <ContactForm />
        </div>
        <div className="rounded-lg border p-6 space-y-2 text-sm">
          <div>Email: contact@vorcastudio.com</div>
          <div>Phone: +1 (555) 123-4567</div>
          <div>Address: 123 Innovation Drive, Tech City</div>
        </div>
      </div>
    </section>
  );
}
