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
import { deleteGallery } from "../actions";

interface Props {
  id: string;
  name: string;
}

export default function DeleteMenuDialog({
  id,
  name,
}: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      try {
        await deleteGallery(id);

        toast.success("Menu berhasil dihapus.");

        setOpen(false);

        router.refresh();
      } catch {
        toast.error("Gagal menghapus menu.");
      }
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button variant="destructive">
          Hapus
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Hapus Menu
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">
          Yakin ingin menghapus menu{" "}
          <span className="font-semibold">
            {name}
          </span>
          ?
        </p>

        <div className="flex justify-end gap-2 pt-4">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Batal
          </Button>

          <Button
            variant="destructive"
            disabled={isPending}
            onClick={handleDelete}
          >
            {isPending
              ? "Menghapus..."
              : "Hapus"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}