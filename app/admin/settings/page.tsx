import { getSiteSettings } from "@/services/settings.service";
import { updateSiteSettings } from "./actions";
import SettingsForm from "./components/settings-form";

export default async function SettingsPage() {
  const settings = await getSiteSettings();

  if (!settings) {
    return <div>Data site settings tidak ditemukan.</div>;
  }
  

  return (
    <div className="max-w-3xl">

      <h1 className="mb-8 text-3xl font-bold">
        Site Settings
      </h1>

      <SettingsForm settings={settings} />

    </div>
  );
}