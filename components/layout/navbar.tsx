"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  {
    label: "Tentang",
    href: "#about",
  },
  {
    label: "Menu",
    href: "#menu",
  },
  {
    label: "Galeri",
    href: "#gallery",
  },
];

interface SidebarProps {
  title: string;
}

export default function Navbar({title,}: SidebarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-primary"
        >
          {title}
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}

          <Button asChild>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
            >
              Pesan Sekarang
            </a>
          </Button>
        </nav>

        {/* Mobile */}

        <Sheet>
          <SheetTrigger asChild>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>

          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[360px] p-0">
  <div className="flex h-full flex-col">

    {/* Header */}
    <div className="border-b px-6 py-5">
      <SheetTitle className="text-xl font-bold text-primary">
        🥟 Pempek Cesi
      </SheetTitle>
    </div>

    {/* Menu */}
    <nav className="flex flex-1 flex-col px-6 py-6">
<SheetClose asChild>

      <Link
        href="#about"
        className="py-3 text-base font-medium transition-colors hover:text-primary"
      >
        Tentang
      </Link>
      </SheetClose>
<SheetClose asChild>

      <Link
        href="#menu"
        className="py-3 text-base font-medium transition-colors hover:text-primary"
      >
        Menu
      </Link>
      </SheetClose>
<SheetClose asChild>

      <Link
        href="#gallery"
        className="py-3 text-base font-medium transition-colors hover:text-primary"
      >
        Galeri
      </Link>
      </SheetClose>

      <div className="mt-auto pt-6">
        <Button asChild className="w-full">
          <a
            href="https://wa.me/628123456789"
            target="_blank"
          >
            Pesan Sekarang
          </a>
        </Button>
      </div>

    </nav>

  </div>
</SheetContent>

        </Sheet>

      </div>
    </header>
  );
}