"use client";

import { logout } from "@/app/admin/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

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

export default function Sidebar({title,}: SidebarProps) {
    
  const pathname = usePathname();
const [isPending, startTransition] =
    useTransition();

  function handleLogout() {
    startTransition(async () => {
      await logout();
    });
  }
  return (
    <aside className="w-64 border-r bg-white">
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
      className="w-full bg-primary text-white"
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
  );
}