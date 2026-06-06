import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Pempek Cesi
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="#about">Tentang</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#gallery">Galeri</Link>
        </nav>

        <a
          href="https://wa.me/628123456789"
          target="_blank"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Pesan
        </a>
      </div>
    </header>
  );
}