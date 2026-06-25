"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { uploadMenuImage } from "@/lib/supabase/storage";

export async function updateSiteSettings(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string;

  const currentImageUrl =
    formData.get("current_image_url") as string;
  const currentOgImageUrl =
    formData.get("current_og_image_url") as string;

  const imageFile =
      formData.get("image") as File;
  const ogImageFile =
      formData.get("og_image") as File;
  
    let imageUrl = currentImageUrl;
    let ogImageUrl = currentOgImageUrl;
  
    if (
      imageFile &&
      imageFile.size > 0
    ) {
      imageUrl =
        await uploadMenuImage(
          imageFile
        );
    }
    if (
      ogImageFile &&
      ogImageFile.size > 0
    ) {
      ogImageUrl =
        await uploadMenuImage(
          ogImageFile
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
      seo_title: formData.get("seo_title"),
      seo_description: formData.get("seo_description"),
      og_image_url: ogImageUrl,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/settings");
}