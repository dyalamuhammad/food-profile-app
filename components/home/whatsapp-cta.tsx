import { Button } from "@/components/ui/button";

export default function WhatsappCTA() {
  return (
    <section className="py-24">

      <div className="container mx-auto px-4">

<div className="rounded-3xl bg-primary px-6 py-12 text-center md:px-12 md:py-16">
<h2 className="text-3xl font-bold md:text-4xl">
                Siap menikmati Pempek Cesi?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Hubungi kami sekarang juga dan lakukan
            pemesanan melalui WhatsApp.
          </p>

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="mt-8"
          >
            <a
              href="https://wa.me/628123456789"
              target="_blank"
            >
              Pesan Sekarang
            </a>
          </Button>

        </div>

      </div>

    </section>
  );
}