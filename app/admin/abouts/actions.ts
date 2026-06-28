"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { uploadMenuImage } from "@/lib/supabase/storage";

export async function updateAbouts(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string;

  const currentImageUrl =
    formData.get("current_image_url") as string;

  const imageFile =
      formData.get("image") as File;

    let imageUrl = currentImageUrl;
  
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
    .from("about_us")
    .update({
      title: formData.get("title"),
      description: formData.get("description"),
      image_url: imageUrl,
     
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/settings");
}