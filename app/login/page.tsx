import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";


import LoginForm from "./login-form";

export default async function LoginPage() {
    const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }

 
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/20">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Admin Login
        </h1>

        <LoginForm/>
      </div>
    </div>
  );
}