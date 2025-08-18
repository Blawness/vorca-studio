import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Content Strategy — VorcaStudio",
  description:
    "Guidelines and messaging framework that drive VorcaStudio's content across pages: tone of voice, homepage structure, SEO pillars, and more.",
};

export default function ContentStrategyPage() {
  notFound();
}
