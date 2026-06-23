import { createClient } from "@/lib/supabase/server";

export async function getAllGallery() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}
export async function getActiveGallery() {
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