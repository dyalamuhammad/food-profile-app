import { createClient } from "@/lib/supabase/server";
import { Menu } from "@/types/supabase";

export async function getMenus(): Promise<Menu[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("menus")
    .select("*")
    .order("created_at");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}