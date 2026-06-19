import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {
  badge: string;
  title: string;
  subtitle: string | null;
  image: string | null;
}

export default function Hero({
  badge,
  title,
  subtitle,
  image,
}: HeroProps) {
  return (
   <section className="container mx-auto px-4 py-16 lg:py-28">
  <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {badge}
          </span>

         <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
  {title}
</h1>

          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
  {subtitle}
</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#menu">
                Lihat Menu
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/628123456789"
                target="_blank"
              >
                Pesan Sekarang
              </a>
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
              <img
                src={image || "https://placehold.co/500x500"}
                alt="Hero"
                className="object-cover w-full h-full"
              />
          </div>
        </div>
      </div>
    </section>
  );
}