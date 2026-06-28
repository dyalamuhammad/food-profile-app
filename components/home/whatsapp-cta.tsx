import { Button } from "@/components/ui/button";
import { ThemeName, themes } from "@/lib/theme";

interface WhatsappProps {
  title: string;
  whatsapp_number: string;
  theme: ThemeName;
}

export default function WhatsappCTA({title, whatsapp_number, theme}: WhatsappProps) {
  const color = themes[theme];
  return (
    <section className="py-24">

      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-5 duration-700">

<div className={`rounded-3xl ${color.background} px-6 py-12 text-center md:px-12 md:py-16`}>
<h2 className={`text-3xl font-bold md:text-4xl text-white`}>
                Siap menikmati {title}?
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
              href={`https://wa.me/` + whatsapp_number}
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