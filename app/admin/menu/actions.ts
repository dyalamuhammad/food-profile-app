"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { uploadMenuImage } from "@/lib/supabase/storage";

// ========= create ============

export async function createMenu(formData: FormData) {
  const supabase = await createClient();

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

  const { error } = await supabase.from("menus").insert({
    name: formData.get("name"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    image_url: imageUrl,
    is_active: true,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/menu");
}

// ========= update =============

export async function updateMenu(formData: FormData) {
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
    .from("menus")
    .update({
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      image_url: imageUrl,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/menu");
}

// ============ delete ============

export async function deleteMenu(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("menus")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/menu");
}