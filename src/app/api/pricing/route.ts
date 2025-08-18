import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { parsePlans } from "@/lib/pricing";

export async function GET() {
  try {
    const pricingMdPath = path.join(process.cwd(), "docs", "pricing.md");
    const md = fs.readFileSync(pricingMdPath, "utf8");
    const plans = parsePlans(md);
    return NextResponse.json({ plans });
  } catch (error: any) {
    return NextResponse.json({ plans: [], error: error?.message ?? "Failed to read pricing" });
  }
}
