import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — VorcaStudio",
  description:
    "Detailed AI-powered web development services: AI integration, custom apps, e‑commerce, and CMS.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="text-foreground/80 max-w-2xl">
        We deliver AI‑enhanced web solutions including AI Integration, Custom Web Applications,
        E‑commerce, and CMS Development.
      </p>
      {/* TODO: Replace with content library driven cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border p-6"><h3 className="font-semibold">AI Integration</h3></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Custom Web Applications</h3></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">E‑commerce Solutions</h3></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">CMS Development</h3></div>
      </div>
    </section>
  );
}

