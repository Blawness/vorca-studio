import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — VorcaStudio",
  description: "Our mission, values, team, and technology expertise.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-foreground/80 max-w-3xl">
        Kenapa Orca? Karena orca adalah apex predator yang cerdas, terorganisir, dan selalu berburu dalam tim. Filosofi
        inilah yang kami bawa ke dunia digital: intelligence, coordination, dan fokus pada hasil.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 space-y-2">
          <h2 className="font-semibold">Our Story</h2>
          <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
            <li>Lahir dari frustrasi terhadap industry standard yang generik dan lambat beradaptasi.</li>
            <li>Vision untuk mengubah cara web agency bekerja: strategic-first, execution dengan precision.</li>
            <li>Commitment pada innovation dan partnership jangka panjang.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-6 space-y-2">
          <h2 className="font-semibold">Team Philosophy</h2>
          <ul className="text-sm text-foreground/80 list-disc pl-5 space-y-1">
            <li>Setiap member adalah specialist di bidangnya.</li>
            <li>Collective intelligence seperti pod orca — kolaborasi tanpa ego.</li>
            <li>Continuous learning dan adaptation untuk hasil yang konsisten.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
