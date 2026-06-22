"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

// =========== create ============

export async function createGallery(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.from("gallery").insert({
    title: formData.get("title"),
    sort_order: formData.get("sort_order"),
    is_active: formData.get("is_active"),
    image_url: formData.get("image_url"),
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/menu");
}

// ========= update ===============

export async function updateGallery(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string;

  const { error } = await supabase
    .from("gallery")
    .update({
       title: formData.get("title"),
    sort_order: formData.get("sort_order"),
    is_active: formData.get("is_active"),
    image_url: formData.get("image_url"),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/menu");
}

// =========== delete ===============

export async function deleteGallery(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("gallery")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/menu");
}