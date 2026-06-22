import { createClient } from "@/lib/supabase/server";
import { login } from "./actions";
import { redirect } from "next/navigation";

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

        <form
          action={login}
          className="space-y-4"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              name="password"
              type="password"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}