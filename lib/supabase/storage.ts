import { createClient } from "@/lib/supabase/server";

export async function uploadMenuImage(
  file: File
) {
  const supabase = await createClient();

  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("product-images")
    .upload(fileName, file);

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("product-images")
    .getPublicUrl(fileName);

  return publicUrl;
}