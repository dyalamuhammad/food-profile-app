
import AboutsForm from "./components/abouts-form";
import { getAbouts } from "@/services/about.service";

export default async function SettingsPage() {
  const abouts = await getAbouts();

  if (!abouts) {
    return <div>Data abouts tidak ditemukan.</div>;
  }
  

  return (
    <div className="">

      <h1 className="mb-8 text-3xl font-bold">
        Abouts
      </h1>

      <AboutsForm abouts={abouts} />

    </div>
  );
}