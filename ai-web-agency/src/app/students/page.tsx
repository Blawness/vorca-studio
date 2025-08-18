import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Services — AI Web Agency",
  description: "Specialized services and discounts for students, portfolios, and mentorship.",
};

export default function StudentsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Student Services</h1>
      <p className="text-foreground/80 max-w-2xl">
        We offer portfolio websites, academic project assistance, internship preparation, and mentorship — with student pricing.
      </p>
      {/* TODO: Replace with content library driven content */}
      <div className="rounded-lg border p-6">Get 30% off with valid student ID.</div>
    </section>
  );
}
