import GallerySection from "@/components/home/gallery-section";
import Hero from "@/components/home/hero";
import MenuSection from "@/components/home/menu-section";
import WhatsappCTA from "@/components/home/whatsapp-cta";
import { ThemeName } from "@/lib/theme";
import { getActiveGallery } from "@/services/gallery.service";

import { getMenus } from "@/services/menu.service";
import { getSiteSettings } from "@/services/settings.service";
import AboutSection from "../admin/about/page";
import About from "@/components/home/about";
import { getAbouts } from "@/services/about.service";

export default async function HomePage() {
  const settings = await getSiteSettings();
  const abouts = await getAbouts();

  const menus = await getMenus();
  const gallery = await getActiveGallery();

  return (
    <main className="container mx-auto">

      <Hero
        badge={settings?.hero_badge ?? ""}
        title={settings?.hero_title ?? ""}
        subtitle={settings?.hero_subtitle ?? ""}
        image={settings?.hero_image ?? null}
        theme={(settings?.theme ?? "coffee") as ThemeName}
      />

       <MenuSection menus={menus} theme={(settings?.theme ?? "coffee") as ThemeName} />
<About
        title={abouts?.title ?? ""}
        description={abouts?.description ?? ""}
        image={abouts?.image_url ?? null}
        />
      <GallerySection images={gallery} />
      <WhatsappCTA title={settings?.hero_title ?? ""} theme={(settings?.theme ?? "coffee") as ThemeName}
      whatsapp_number={settings?.whatsapp ?? ""}/>

    </main>
  );
}