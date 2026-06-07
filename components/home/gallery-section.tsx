import Image from "next/image";

interface GalleryItem {
  id: string;
  title: string | null;
  image_url: string;
  sort_order: number;
  is_active: boolean;
}

interface Props {
  images: GalleryItem[];
}

export default function GallerySection({ images }: Props) {
  return (
    <section
      id="gallery"
      className="bg-amber-50 py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold">
          Galeri
        </h2>

        <p className="mt-4 text-center text-muted-foreground">
          Dokumentasi produk dan aktivitas kami.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={image.image_url ?? "/placeholder.png"}
                alt={image.title ?? "Gallery"}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay Title */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}