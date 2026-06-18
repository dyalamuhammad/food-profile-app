import { getSiteSettings } from "@/services/settings.service";
import { updateSiteSettings } from "./actions";

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

      <form
        action={updateSiteSettings}
        className="space-y-6"
      >
        <input
          type="hidden"
          name="id"
          defaultValue={settings.id}
        />

        <div>
          <label className="mb-2 block font-medium">
            Nama Website
          </label>

          <input
            name="title"
            defaultValue={settings.hero_title ?? ""}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Hero Title
          </label>

          <input
            name="hero_title"
            defaultValue={settings.hero_title ?? ""}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Hero Subtitle
          </label>

          <textarea
            name="hero_subtitle"
            defaultValue={settings.hero_subtitle ?? ""}
            className="w-full rounded-lg border p-3"
            rows={4}
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Hero Image URL
          </label>

          <input
            name="hero_image"
            defaultValue={settings.hero_image ?? ""}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            WhatsApp Number
          </label>

          <input
            name="whatsapp_number"
            defaultValue={settings.whatsapp ?? ""}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <button
          className="rounded-lg bg-primary px-6 py-3 font-medium text-white"
        >
          Simpan Perubahan
        </button>

      </form>

    </div>
  );
}