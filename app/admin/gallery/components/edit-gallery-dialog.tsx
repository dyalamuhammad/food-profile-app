"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateGallery } from "../actions";

interface Props {
  gallery: {
    id: string;
    title: string;
    is_active: boolean;
    sort_order: number;
    image_url: string | null;
  };
}

export default function EditMenuDialog({ gallery }: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        await updateGallery(formData);

        toast.success("Gallery berhasil diperbarui.");

        setOpen(false);

        router.refresh();
      } catch {
        toast.error("Gagal memperbarui gallery.");
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
        >
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg  max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Edit Gallery</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto thin-scrollbar p-2">
          <form
            action={handleSubmit}
            encType="multipart/form-data"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="id"
              defaultValue={gallery.id}
            />
            <input
              type="hidden"
              name="current_image_url"
              defaultValue={gallery.image_url ?? ""}
            />

            <div>
              <Label>Judul</Label>

              <Input
                name="title"
                defaultValue={gallery.title}
                required
              />
            </div>

            <div>
              <Label>Status</Label>

              <Textarea
                name="is_active"
                defaultValue={gallery.is_active ? "true" : "false"}            />
            </div>

            <div>
              <Label>Order</Label>

              <Textarea
                name="sort_order"
                defaultValue={gallery.sort_order ?? ""}
              />
            </div>

          
          <div className="space-y-2">

            <Label>Gambar Saat Ini</Label>

            {gallery.image_url ? (
              <div className="relative h-fit w-full overflow-hidden rounded-lg border">

                <img
                  src={gallery.image_url}
                  alt={gallery.title}
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
              {isPending ? "Menyimpan..." : "Simpan Perubahan"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}