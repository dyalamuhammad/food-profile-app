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

  const title = settings?.seo_title ?? "Brand Name";
  const description = settings?.seo_description ?? "";
  const ogImage = settings?.og_image_url;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
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
          <Navbar title={settings?.seo_title ?? ""} theme={(settings?.theme ?? "coffee") as ThemeName} />
        {children}
         <Footer title={settings?.seo_title ?? ""}/>
      </body>
    </html>
  );
}