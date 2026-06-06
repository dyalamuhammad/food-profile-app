import { createClient } from "@/lib/supabase/server";
import { SiteSettings } from "@/types/supabase";

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}