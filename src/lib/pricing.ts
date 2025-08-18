export type Plan = { name: string; price: string; features: string[] };

export function parsePlans(md: string): Plan[] {
  if (!md) return [];
  const lines = md.split(/\r?\n/);
  let startIdx = lines.findIndex((l) => l.trim().startsWith("## ") && l.includes("Paket Rekomendasi"));
  if (startIdx === -1) startIdx = 0;
  let endIdx = lines.length;
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (lines[i].trim().startsWith("## ") && !lines[i].includes("Paket Rekomendasi")) {
      endIdx = i;
      break;
    }
  }
  const section = lines.slice(startIdx, endIdx);

  const plans: Plan[] = [];
  let i = 0;
  while (i < section.length) {
    const line = section[i].trim();
    if (line.startsWith("### ")) {
      const header = line.replace(/^###\s+/, "").trim();
      const priceMatch = header.match(/\(([^)]+)\)$/);
      const price = priceMatch ? priceMatch[1].trim() : "";
      const name = header.replace(/\s*\([^)]*\)\s*$/, "").trim();
      const features: string[] = [];
      i++;
      while (i < section.length) {
        const l = section[i].trim();
        if (l.startsWith("### ") || (l.startsWith("## ") && !l.includes("Paket Rekomendasi"))) break;
        if (l.startsWith("- ")) features.push(l.replace(/^-\s+/, "").trim());
        i++;
      }
      plans.push({ name, price, features });
      continue;
    }
    i++;
  }
  return plans;
}
