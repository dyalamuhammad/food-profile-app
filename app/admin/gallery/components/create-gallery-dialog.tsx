"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


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
import { createGallery } from "../actions";

export default function CreateGalleryDialog() {
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    async function handleSubmit(
        formData: FormData
    ) {
        startTransition(async () => {
        try {
            await createGallery(formData);

            toast.success("Gallery berhasil ditambahkan.");

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
          Tambah Gallery
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle>
            Tambah Gallery
          </DialogTitle>

        </DialogHeader>

        <form
          action={handleSubmit}
          className="space-y-5"
        >

          <div>

            <Label>
              Nama Gallery
            </Label>

            <Input
              name="title"
              required
            />

          </div>


          <div>

            <Label>
              Order
            </Label>

            <Input
              type="number"
              name="sort_order"
              required
            />

          </div>
          <div>

            <Label>
              Status
            </Label>
           

           
            <Select
    name="is_active"
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Status" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="true">Aktif</SelectItem>
      <SelectItem value="false">Tidak Aktif</SelectItem>
    </SelectContent>
  </Select>

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