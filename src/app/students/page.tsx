import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FadeInOnView, StaggerContainer } from "@/components/ui/animated";

export const metadata: Metadata = {
  title: "Student Services — VorcaStudio",
  description: "Specialized services and discounts for students, portfolios, and mentorship.",
};

export default function StudentsPage() {
  return (
    <Section className="mx-auto max-w-7xl">
      <StaggerContainer className="space-y-6">
        <FadeInOnView>
          <h1 className="text-3xl font-bold">Student Services</h1>
        </FadeInOnView>
        <FadeInOnView>
          <p className="text-foreground/80 max-w-2xl">
            We offer portfolio websites, academic project assistance, internship preparation, and mentorship — with student pricing.
          </p>
        </FadeInOnView>
        {/* TODO: Replace with content library driven content */}
        <FadeInOnView delay={0.08}>
          <div className="rounded-lg border p-6">Get 30% off with valid student ID.</div>
        </FadeInOnView>
      </StaggerContainer>
    </Section>
  );
}
