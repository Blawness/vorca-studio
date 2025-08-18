import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div className="space-y-2">
          <div className="font-semibold">AI Web Agency</div>
          <p className="text-foreground/70">Building smarter websites with AI.</p>
          <p className="text-foreground/60">© {new Date().getFullYear()} AI Web Agency. All rights reserved.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Quick Links</div>
          <ul className="space-y-2 text-foreground/80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/students">Student Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-foreground/80">
            <li>Email: contact@aiwebagency.com</li>
            <li>Phone: +1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
