import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div className="space-y-2">
          <div className="font-semibold">VorcaStudio</div>
          <p className="text-foreground/70">Membangun website cerdas dengan AI.</p>
          <p className="text-foreground/60">© {new Date().getFullYear()} VorcaStudio. Hak cipta dilindungi.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Tautan Cepat</div>
          <ul className="space-y-2 text-foreground/80">
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/services">Layanan</Link></li>
            <li><Link href="/pricing">Harga</Link></li>
            <li><Link href="/students">Layanan Mahasiswa</Link></li>
            <li><Link href="/about">Tentang</Link></li>
            <li><Link href="/contact">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Kontak</div>
          <ul className="space-y-2 text-foreground/80">
            <li>Email: contact@vorcastudio.com</li>
            <li>Telepon: +1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

