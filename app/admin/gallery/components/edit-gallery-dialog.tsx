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
  menu: {
    id: string;
    title: string;
    is_active: string;
    sort_order: number;
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
            <Label>Judul</Label>

            <Input
              name="title"
              defaultValue={menu.title}
              required
            />
          </div>

          <div>
            <Label>Status</Label>

            <Textarea
              name="is_active"
              defaultValue={menu.is_active ?? ""}
            />
          </div>

          <div>
            <Label>Order</Label>

            <Textarea
              name="sort_order"
              defaultValue={menu.sort_order ?? ""}
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