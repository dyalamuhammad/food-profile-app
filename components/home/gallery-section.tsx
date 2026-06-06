export default function GallerySection() {
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {Array.from({ length: 6 }).map((_, index) => (

            <div
              key={index}
              className="aspect-square rounded-2xl bg-white shadow-sm"
            />

          ))}

        </div>

      </div>
    </section>
  );
}