import GallerySection from "@/components/home/gallery-section";
import Hero from "@/components/home/hero";
import MenuSection from "@/components/home/menu-section";
import WhatsappCTA from "@/components/home/whatsapp-cta";

import { getMenus } from "@/services/menu.service";
import { getSiteSettings } from "@/services/settings.service";

export default async function HomePage() {
  const settings = await getSiteSettings();

  const menus = await getMenus();

  return (
    <main className="container mx-auto">

      <Hero
        title={settings?.hero_title ?? ""}
        subtitle={settings?.hero_subtitle ?? ""}
      />

       <MenuSection menus={menus} />

      <GallerySection />

      <WhatsappCTA />

    </main>
  );
}