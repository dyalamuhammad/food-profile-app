"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { updateAbouts } from "../actions";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  abouts: any;
};

export default function AboutsForm({
  abouts,
}: Props) {
  const router = useRouter();

  const [isPending, startTransition] =
    useTransition();

  async function handleSubmit(
    formData: FormData
  ) {
    startTransition(async () => {
      try {
        await updateAbouts(formData);

        toast.success(
          "Abouts berhasil diperbarui."
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
      className="grid sm:grid-cols-2 gap-3 w-full"
    >
      <input
        type="hidden"
        name="id"
        defaultValue={abouts.id}
      />

      <input
        type="hidden"
        name="current_image_url"
        defaultValue={abouts.image_url ?? ""}
      />

      <div>
        <label className="mb-2 block font-medium">
          Title
        </label>

        <input
          name="hero_title"
          defaultValue={abouts.title ?? ""}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          name="hero_subtitle"
          defaultValue={
            abouts.description ?? ""
          }
          className="w-full rounded-lg border p-3"
          rows={4}
        />
      </div>

      <div className="space-y-2">

          <Label>Gambar Saat Ini</Label>

          {abouts.image_url ? (
            <div className="relative h-fit w-full overflow-hidden rounded-lg border">

              <img
                src={abouts.image_url}
                alt={abouts.title}
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