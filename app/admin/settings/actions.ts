"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { uploadMenuImage } from "@/lib/supabase/storage";

export async function updateSiteSettings(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string;

  const imageFile =
      formData.get("image") as File;
  
    let imageUrl = null;
  
    if (
      imageFile &&
      imageFile.size > 0
    ) {
      imageUrl =
        await uploadMenuImage(
          imageFile
        );
    }

  const { error } = await supabase
    .from("site_settings")
    .update({
      hero_badge: formData.get("hero_badge"),
      hero_title: formData.get("hero_title"),
      hero_subtitle: formData.get("hero_subtitle"),
      hero_image: imageUrl,
      whatsapp: formData.get("whatsapp_number"),
      theme: formData.get("theme"),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/settings");
}