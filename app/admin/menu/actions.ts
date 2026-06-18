"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createMenu(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.from("menus").insert({
    name: formData.get("name"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    image_url: formData.get("image_url"),
    is_active: true,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/menu");
}

export async function updateMenu(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string;

  const { error } = await supabase
    .from("menus")
    .update({
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      image_url: formData.get("image_url") as string,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/menu");
}

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