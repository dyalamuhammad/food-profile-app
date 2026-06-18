import { getMenus } from "@/services/menu.service";
import CreateMenuDialog from "./components/create-menu-dialog";
import MenuTable from "./components/menu-table";


export default async function MenuPage() {
  const menus = await getMenus();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Menu Management
        </h1>

        <CreateMenuDialog />
      </div>

      <MenuTable menus={menus} />
    </div>
  );
}