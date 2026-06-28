import { createClient } from "@/lib/supabase/server";

export async function getAbouts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("about_us")
    .select("*")    
    .single();;

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}
