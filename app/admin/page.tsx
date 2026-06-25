import StatCard from "@/app/admin/components/stats-card";
import { Button } from "@/components/ui/button";

import { getDashboardStats } from "@/services/dashboard.service";
import Link from "next/link";

export default async function DashboardPage() {
  const stats =
    await getDashboardStats();
const isEmpty =
  stats.totalMenus === 0 &&
  stats.totalGallery === 0;
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

      {isEmpty ? (
          <div className="rounded-xl border border-dashed bg-muted/30 p-6">
            <h2 className="text-xl font-semibold">
              Selamat Datang 👋
            </h2>

            <p className="mt-2 text-muted-foreground">
              Website Anda masih kosong. Mulailah dengan menambahkan menu
              atau galeri.
            </p>

            <div className="mt-4 flex gap-3">
              <Link href="/admin/menu">
                <Button>
                  Kelola Menu
                </Button>
              </Link>

              <Link href="/admin/gallery">
                <Button variant="outline">
                  Kelola Galeri
                </Button>
              </Link>
            </div>
          </div>
        ):(
          <p className="text-muted-foreground">
            Selamat datang di Admin Panel.
          </p>
        )}

        

      </div>

      <div className="grid gap-4 md:grid-cols-3">

        <StatCard
          title="Total Menu"
          value={stats.totalMenus}
        />

        <StatCard
          title="Menu Aktif"
          value={stats.activeMenus}
        />

        <StatCard
          title="Total Galeri"
          value={stats.totalGallery}
        />

      </div>

    </div>
  );
}