"use server";

import { createClient } from "@/lib/supabase/server";

export async function login(
  formData: FormData
) {
  const supabase = await createClient();

  const email = formData.get("email") as string;

  const password = formData.get("password") as string;

  const { error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    return {
      success: false,
      message: "Email atau password salah.",
    };
  }

  return {
    success: true,
  };
}