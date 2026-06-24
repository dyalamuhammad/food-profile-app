"use client";

import { logout } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Loader2, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";

const menus = [
  {
    title: "Dashboard",
    href: "/admin",
  },
  {
    title: "Site Settings",
    href: "/admin/settings",
  },
  {
    title: "Menu",
    href: "/admin/menu",
  },
  {
    title: "Gallery",
    href: "/admin/gallery",
  },
];

interface SidebarProps {
  title: string;
}

export default function Sidebar({
  title,
}: SidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [isPending, startTransition] =
    useTransition();

  function handleLogout() {
    startTransition(async () => {
      await logout();
    });
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between border-b bg-white px-4 py-3">
        <h1 className="font-bold">
          {title || "Admin"}
        </h1>

        <button
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-64
          border-r bg-white
          transform transition-transform

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        <div className="border-b p-6">
          <h2 className="text-xl font-bold text-primary">
            {title}
          </h2>
        </div>

        <nav className="space-y-1 p-4">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 transition ${
                pathname === menu.href
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }`}
            >
              {menu.title}
            </Link>
          ))}

          <Button
            variant="destructive"
            className="w-full"
            disabled={isPending}
            onClick={handleLogout}
          >
            {isPending && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}

            {isPending
              ? "Logging out..."
              : "Logout"}
          </Button>
        </nav>
      </aside>
    </>
  );
}