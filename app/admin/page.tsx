import { getSiteSettings } from "@/services/settings.service";

export default async function DashboardPage() {
  const settings = await getSiteSettings();

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2 text-muted-foreground">
        Selamat datang di Admin Panel {settings?.hero_title}.
      </p>
    </div>
  );
}