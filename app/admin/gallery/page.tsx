import CreateGalleryDialog from "./components/create-gallery-dialog";
import GalleryTable from "./components/gallery-table";
import { getGallery } from "@/services/gallery.service";


export default async function GalleryPage() {
  const galleries = await getGallery();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Gallery Management
        </h1>

        <CreateGalleryDialog />
      </div>

      <GalleryTable menus={galleries} />
    </div>
  );
}