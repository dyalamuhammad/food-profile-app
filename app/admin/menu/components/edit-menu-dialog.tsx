"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { updateMenu } from "../actions";

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
import Image from "next/image";

interface Props {
  menu: {
    id: string;
    name: string;
    description: string | null;
    price: number;
    image_url: string | null;
  };
}

export default function EditMenuDialog({ menu }: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        await updateMenu(formData);

        toast.success("Menu berhasil diperbarui.");

        setOpen(false);

        router.refresh();
      } catch {
        toast.error("Gagal memperbarui menu.");
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

      <DialogContent className="sm:max-w-lg max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
        </DialogHeader>
  <div className="flex-1 overflow-y-auto hide-scrollbar p-2">

        <form
  action={handleSubmit}
  encType="multipart/form-data"
  className="space-y-4"
>
          <input
            type="hidden"
            name="id"
            defaultValue={menu.id}
          />

          <input
            type="hidden"
            name="current_image_url"
            defaultValue={menu.image_url ?? ""}
          />

          <div>
            <Label>Nama Menu</Label>

            <Input
              name="name"
              defaultValue={menu.name}
              required
            />
          </div>

          <div>
            <Label>Deskripsi</Label>

            <Textarea
              name="description"
              defaultValue={menu.description ?? ""}
            />
          </div>

          <div>
            <Label>Harga</Label>

            <Input
              type="number"
              name="price"
              defaultValue={menu.price}
              required
            />
          </div>

        <div className="space-y-2">

  <Label>Gambar Saat Ini</Label>

  {menu.image_url ? (
    <div className="relative h-fit w-full overflow-hidden rounded-lg border">

      <img
        src={menu.image_url}
        alt={menu.name}
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