import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { getSiteSettings } from "@/services/settings.service";
import { ThemeName } from "@/lib/theme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: settings?.hero_title ?? "Brand Name",
    description: settings?.hero_subtitle,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const settings = await getSiteSettings();
  
  return (
    <html lang="id">
      <body className={poppins.className}>
          <Navbar title={settings?.hero_title ?? ""} theme={(settings?.theme ?? "amber") as ThemeName} />
        {children}
         <Footer title={settings?.hero_title ?? ""}/>
      </body>
    </html>
  );
}