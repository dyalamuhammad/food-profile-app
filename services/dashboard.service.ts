import { createClient } from "@/lib/supabase/server";

export async function getDashboardStats() {
  const supabase = await createClient();

  const [
    menusResult,
    activeMenusResult,
    galleryResult,
  ] = await Promise.all([
    supabase
      .from("menus")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("menus")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("is_active", true),

    supabase
      .from("gallery")
      .select("*", {
        count: "exact",
        head: true,
      }),
  ]);

  return {
    totalMenus: menusResult.count ?? 0,
    activeMenus: activeMenusResult.count ?? 0,
    totalGallery: galleryResult.count ?? 0,
  };
}