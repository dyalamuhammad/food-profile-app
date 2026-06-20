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
import { ThemeName, themes } from "@/lib/theme";

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

interface NavbarProps {
  title: string;
  theme: ThemeName;
}

export default function Navbar({title, theme}: NavbarProps) {
    const color = themes[theme];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}

        <Link
          href="/"
          className={`text-2xl font-extrabold tracking-tight ${color.text}`}
        >
          {title}
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${color.hover}`}
            >
              {item.label}
            </Link>
          ))}

          <Button asChild className={color.button}>
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
      <SheetTitle className={`text-xl font-bold ${color.text}`}>
        {title}
      </SheetTitle>
    </div>

    {/* Menu */}
    <nav className="flex flex-1 flex-col px-6 py-6">
<SheetClose asChild>

      <Link
        href="#about"
        className={`py-3 text-base font-medium transition-colors ${color.hover}`}
      >
        Tentang
      </Link>
      </SheetClose>
<SheetClose asChild>

      <Link
        href="#menu"
        className={`py-3 text-base font-medium transition-colors ${color.hover}`}
      >
        Menu
      </Link>
      </SheetClose>
<SheetClose asChild>

      <Link
        href="#gallery"
        className={`py-3 text-base font-medium transition-colors ${color.hover}`}
      >
        Galeri
      </Link>
      </SheetClose>

      <div className="mt-auto pt-6">
        <Button asChild className={`w-full ${color.button}`}>
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