"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { updateSiteSettings } from "../actions";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  settings: any;
};

export default function SettingsForm({
  settings,
}: Props) {
  const router = useRouter();

  const [isPending, startTransition] =
    useTransition();

  async function handleSubmit(
    formData: FormData
  ) {
    startTransition(async () => {
      try {
        await updateSiteSettings(formData);

        toast.success(
          "Site settings berhasil diperbarui."
        );

        router.refresh();
      } catch {
        toast.error(
          "Terjadi kesalahan."
        );
      }
    });
  }

  return (
    <form
      action={handleSubmit}
      className="space-y-6"
    >
      <input
        type="hidden"
        name="id"
        defaultValue={settings.id}
      />

      <div>
        <label className="mb-2 block font-medium">
          Hero Badge
        </label>

        <input
          name="hero_badge"
          defaultValue={settings.hero_badge ?? ""}
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
          defaultValue={
            settings.hero_subtitle ?? ""
          }
          className="w-full rounded-lg border p-3"
          rows={4}
        />
      </div>

      <div className="space-y-2">

          <Label>Gambar Saat Ini</Label>

          {settings.hero_image ? (
            <div className="relative h-fit w-full overflow-hidden rounded-lg border">

              <img
                src={settings.hero_image}
                alt={settings.name}
                className="object-cover w-full h-full"
              />

            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Belum ada gambar
            </p>
          )}

        </div>
         <div>
          <Label>
            Ganti Gambar
          </Label>

           <Input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                if (file.size > 1 * 1024 * 1024) {
                  toast.error("Ukuran gambar maksimal 1 MB");
                  e.target.value = "";
                }
              }}
            />
        </div>

      <div>
        <label className="mb-2 block font-medium">
          WhatsApp Number
        </label>

        <input
          name="whatsapp_number"
          defaultValue={
            settings.whatsapp ?? ""
          }
          className="w-full rounded-lg border p-3"
        />
      </div>

     <div>
  <label className="mb-2 block font-medium">
    Theme
  </label>

  <Select
    name="theme"
    defaultValue={settings?.theme ?? "amber"}
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Pilih theme" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="amber">Amber</SelectItem>
      <SelectItem value="purple">Purple</SelectItem>
    </SelectContent>
  </Select>
</div>

      <Button
        className="w-full"
        disabled={isPending}
      >
        {isPending
          ? "Menyimpan..."
          : "Simpan Perubahan"}
      </Button>
    </form>
  );
}