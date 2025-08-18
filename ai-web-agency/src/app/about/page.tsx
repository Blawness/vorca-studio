import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AI Web Agency",
  description: "Our mission, values, team, and technology expertise.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-foreground/80 max-w-2xl">
        We believe in the power of AI to transform the web. Our team blends AI and modern web tech to deliver results.
      </p>
    </section>
  );
}
