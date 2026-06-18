"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      </nav>
    </aside>
  );
}