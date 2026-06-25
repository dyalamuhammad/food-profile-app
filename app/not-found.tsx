import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">

      <h1 className="text-8xl font-bold text-primary">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Halaman Tidak Ditemukan
      </h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>

      <div className="mt-8 flex gap-3">
        <Link href="/">
          <Button>
            Kembali ke Beranda
          </Button>
        </Link>

        <Link href="/menu">
          <Button variant="outline">
            Lihat Menu
          </Button>
        </Link>
      </div>

    </div>
  );
}