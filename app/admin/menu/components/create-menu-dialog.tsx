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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { createMenu } from "../actions";

export default function CreateMenuDialog() {
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    async function handleSubmit(
        formData: FormData
    ) {
        startTransition(async () => {
        try {
            await createMenu(formData);

            toast.success("Menu berhasil ditambahkan.");

            setOpen(false);

            router.refresh();
        } catch {
            toast.error("Terjadi kesalahan.");
        }
        });
    }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          Tambah Menu
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle>
            Tambah Menu
          </DialogTitle>

        </DialogHeader>

        <form
          action={handleSubmit}
          className="space-y-5"
        >

          <div>

            <Label>
              Nama Menu
            </Label>

            <Input
              name="name"
              required
            />

          </div>

          <div>

            <Label>
              Deskripsi
            </Label>

            <Textarea
              name="description"
            />

          </div>

          <div>

            <Label>
              Harga
            </Label>

            <Input
              type="number"
              name="price"
              required
            />

          </div>

          <div>

            <Label>
              Image URL
            </Label>

            <Input
              name="image_url"
            />

          </div>

          <Button
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Menyimpan..."
              : "Simpan"}
          </Button>

        </form>

      </DialogContent>
    </Dialog>
  );
}