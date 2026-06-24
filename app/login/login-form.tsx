"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

import { login } from "./actions";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();

  const [isPending, startTransition] =
    useTransition();

  function handleSubmit(
    formData: FormData
  ) {
    startTransition(async () => {
      const result =
        await login(formData);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success("Login berhasil");

      router.push("/admin");
      router.refresh();
    });
  }

  return (
    <form
      action={handleSubmit}
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
            <Button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-primary py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
            {isPending && (
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  )}

  {isPending ? "Memproses..." : "Login"}
            </Button>
    </form>
  );
}