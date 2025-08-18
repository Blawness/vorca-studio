import fs from "node:fs";
import path from "node:path";
import { parsePlans } from "@/lib/pricing";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export async function HomePricingGrid() {
  const pricingMdPath = path.join(process.cwd(), "docs", "pricing.md");
  let md = "";
  try {
    md = fs.readFileSync(pricingMdPath, "utf8");
  } catch {}
  const plans = parsePlans(md);
  if (!plans.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((p, idx) => (
        <Card
          key={p.name}
          className={`border-transparent [background:linear-gradient(var(--card),var(--card))_padding-box,linear-gradient(90deg,var(--aqua-glow),transparent)_border-box] transition-all duration-300 hover:ring-1 hover:ring-[var(--aqua-glow)]/30 ${idx === 1 ? "hover:[background:linear-gradient(var(--card),var(--card))_padding-box,linear-gradient(90deg,var(--aqua-glow),var(--deep-ocean-blue))_border-box]" : ""}`}
        >
          <CardHeader className="flex flex-row items-baseline justify-between">
            <div>
              <CardTitle>{p.name}</CardTitle>
            </div>
            <CardDescription className="text-base font-semibold text-foreground">{p.price}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground/80">
              {p.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <a href="/contact">Mulai Partnership</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
