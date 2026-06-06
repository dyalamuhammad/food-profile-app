export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="container mx-auto px-4">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="flex aspect-square items-center justify-center rounded-3xl bg-amber-100 text-amber-700">
            Foto Pempek
          </div>

          <div>

            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Tentang Kami
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Pempek Palembang dengan
              cita rasa autentik
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              Pempek Cesi menghadirkan pempek khas
              Palembang menggunakan bahan pilihan,
              ikan segar, dan resep yang telah
              diwariskan sehingga menghasilkan rasa
              yang gurih, kenyal, dan nikmat.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}