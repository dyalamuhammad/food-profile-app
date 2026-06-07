import { createClient } from "@/lib/supabase/server";

export async function getGallery() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}