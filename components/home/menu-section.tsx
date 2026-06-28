import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeName, themes } from "@/lib/theme";

import { Menu } from "@/types/supabase";
import Image from "next/image";

interface Props {
  menus: Menu[];
  theme: ThemeName;
}

export default function MenuSection({
  menus, theme
}: Props) {
      const color = themes[theme];
  
  return (
    <section
      id="menu"
      className="bg-coffee-50 py-24"
    >
       <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-coffee-900">
        Menu Favorit
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
  Pilihan menu favorit pelanggan yang
  dibuat menggunakan bahan berkualitas.
</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menus.map((menu) => (
          <Card key={menu.id} className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
             <img
                src={menu.image_url || "https://placehold.co/400x300"}
                alt={menu.name}
                width={400}
                height={300}
                className="h-52 w-full rounded-xl object-cover"
              />
            <CardHeader>
              <CardTitle>
                {menu.name}
              </CardTitle>
            </CardHeader>

            <CardContent>
             
              <p className="text-muted-foreground">
                {menu.description}
              </p>

              <p className={`mt-5 text-2xl font-bold ${color.text}`}>
                Rp {menu.price.toLocaleString("id-ID")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
}