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

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
        </DialogHeader>

        <form
          action={handleSubmit}
          className="space-y-4"
        >
          <input
            type="hidden"
            name="id"
            defaultValue={menu.id}
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

          <div>
            <Label>Image URL</Label>

            <Input
              name="image_url"
              defaultValue={menu.image_url ?? ""}
            />
          </div>

          <Button
            className="w-full"
            disabled={isPending}
          >
            {isPending ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}