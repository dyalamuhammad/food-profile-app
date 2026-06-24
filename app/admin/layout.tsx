import Sidebar from "@/components/admin/sidebar";
import { getSiteSettings } from "@/services/settings.service";
import { Metadata } from "next";
import { Toaster } from "sonner";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: settings?.hero_title ?? "Pempek Cesi",
    description: settings?.hero_subtitle,
  };
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar title="Admin Panel" />

      <main className="lg:ml-64 p-4 md:p-6 lg:p-8">
        {children}
        <Toaster richColors position="top-right" />
      </main>
    </div>
  );
}