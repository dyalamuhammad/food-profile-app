import GallerySection from "@/components/home/gallery-section";
import Hero from "@/components/home/hero";
import MenuSection from "@/components/home/menu-section";
import WhatsappCTA from "@/components/home/whatsapp-cta";
import { getGallery } from "@/services/gallery.service";

import { getMenus } from "@/services/menu.service";
import { getSiteSettings } from "@/services/settings.service";

export default async function HomePage() {
  const settings = await getSiteSettings();

  const menus = await getMenus();
  const gallery = await getGallery();

  return (
    <main className="container mx-auto">

      <Hero
        badge={settings?.hero_badge ?? ""}
        title={settings?.hero_title ?? ""}
        subtitle={settings?.hero_subtitle ?? ""}
        image={settings?.hero_image ?? null}
      />

       <MenuSection menus={menus} />

      <GallerySection images={gallery} />
      <WhatsappCTA title={settings?.hero_title ?? ""}
      whatsapp_number={settings?.whatsapp ?? ""}/>

    </main>
  );
}