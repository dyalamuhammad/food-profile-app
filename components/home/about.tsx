import { ThemeName } from "@/lib/theme";

interface AboutProps {
  title: string;
  description: string | null;
  image: string | null;
}

export default function About({
  title,
  description,
  image,
}: AboutProps) {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="container mx-auto px-4">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="flex aspect-square items-center justify-center rounded-3xl bg-coffee-100 text-coffee-700">
            <img src={image} alt="" className="object-cover size-[600px] rounded-lg"/>
          </div>

          <div>

            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Tentang Kami
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              {title}
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              {description}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}