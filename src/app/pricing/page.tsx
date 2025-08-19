import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FadeInOnView, StaggerContainer } from "@/components/ui/animated";
import fs from "node:fs";
import path from "node:path";
import { parsePlans } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Paket & Harga — VorcaStudio",
  description: "Harga transparan untuk website profesional. Pilih paket sesuai kebutuhan atau diskusikan custom scope.",
};

export default function PricingPage() {
  // Read docs/pricing.md as the content source (non-blocking fallback when empty)
  const pricingMdPath = path.join(process.cwd(), "docs", "pricing.md");
  let pricingMd = "";
  try {
    pricingMd = fs.readFileSync(pricingMdPath, "utf8").trim();
  } catch {}

  const plans = parsePlans(pricingMd);
  return (
    <>
      <Section className="bg-transparent mx-auto max-w-7xl space-y-6">
        <StaggerContainer className="space-y-4">
          <FadeInOnView>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Paket dan Harga VorcaStudio
            </h1>
          </FadeInOnView>
          <FadeInOnView>
            <p className="text-muted-foreground max-w-2xl">
              Harga transparan untuk website profesional. Pilih paket sesuai kebutuhan atau diskusikan custom scope.
            </p>
          </FadeInOnView>
          <FadeInOnView delay={0.08}>
            <div className="pt-2">
              <Button asChild size="lg" className="h-11 sm:px-6 bg-[linear-gradient(90deg,var(--aqua-glow),#33D3FF)] text-white shadow-[0_0_24px_rgba(0,194,255,0.25)]">
                <Link href="/contact">Mulai Partnership</Link>
              </Button>
            </div>
          </FadeInOnView>
          
        </StaggerContainer>
        
      </Section>

      <Section className="bg-transparent mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.length > 0 ? (
            plans.map((plan, idx) => (
              <FadeInOnView key={plan.name} delay={idx * 0.08}>
                <Card className={`p-6 ${idx === 1 ? "glass-4 ring-1 ring-primary/20 shadow-xl" : "glass-2"}`}>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-2 text-3xl md:text-4xl font-bold">{plan.price}</div>
                  <Separator className="my-4" />
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6" size="lg" variant="default">
                    <Link href="/contact">Mulai Partnership</Link>
                  </Button>
                </Card>
              </FadeInOnView>
            ))
          ) : (
            <>
              <FadeInOnView>
                <Card className="p-6 glass-2">
                  <h3 className="text-lg font-semibold">Gratis</h3>
                  <div className="mt-2 text-4xl font-bold">$0</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Untuk siapa pun yang baru memulai website untuk ide besarnya
                  </p>
                  <Separator className="my-4" />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Gratis dan open‑source selamanya</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 1 template website</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 9 blok dan section</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 4 animasi kustom</li>
                  </ul>
                  <Button className="w-full mt-6" size="lg">Mulai gratis</Button>
                </Card>
              </FadeInOnView>
              <FadeInOnView delay={0.08}>
                <Card className="p-6 glass-4 ring-1 ring-primary/20 shadow-xl">
                  <h3 className="text-lg font-semibold">Pro</h3>
                  <div className="mt-2 text-4xl font-bold">$99</div>
                  <p className="text-xs text-muted-foreground">pembayaran sekali • belum termasuk pajak lokal</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Akses seumur hidup. Pembaruan gratis. Tanpa biaya berulang.
                  </p>
                  <Separator className="my-4" />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 4 template website</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 2 template aplikasi</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 72 blok dan section</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 16 ilustrasi</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 14 animasi kustom</li>
                  </ul>
                  <Button className="w-full mt-6" size="lg" variant="default">Dapatkan akses penuh</Button>
                </Card>
              </FadeInOnView>
              <FadeInOnView delay={0.16}>
                <Card className="p-6 glass-2">
                  <h3 className="text-lg font-semibold">Pro Tim</h3>
                  <div className="mt-2 text-4xl font-bold">$499</div>
                  <p className="text-xs text-muted-foreground">pembayaran sekali • belum termasuk pajak lokal</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Akses seumur hidup. Pembaruan gratis. Tanpa biaya berulang.
                  </p>
                  <Separator className="my-4" />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Semua template, komponen, dan section</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Penggunaan untuk tim & agensi</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Proyek komersial</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Pembaruan gratis</li>
                  </ul>
                  <Button className="w-full mt-6" size="lg" variant="default">Dapatkan akses penuh untuk tim Anda</Button>
                </Card>
              </FadeInOnView>
            </>
          )}
        </div>
      </Section>

      
    </>
  );
}
