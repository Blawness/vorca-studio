import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — VorcaStudio",
  description: "Transparent pricing for Starter, Professional, and Enterprise packages.",
};

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="text-foreground/80 max-w-2xl">
        Choose the plan that fits your needs. Contact us for custom enterprise solutions.
      </p>
      {/* TODO: Replace with content library driven pricing cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Starter</h3></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Professional</h3></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Enterprise</h3></div>
      </div>
    </section>
  );
}
