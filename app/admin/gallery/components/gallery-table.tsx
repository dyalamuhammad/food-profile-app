import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteMenuDialog from "./delete-gallery-dialog";
import EditMenuDialog from "./edit-gallery-dialog";

interface Menu {
  id: string;
  title: string;
  image_url: string | null;
  is_active: boolean;
  sort_order: number;
}

interface Props {
  menus: Menu[];
}

export default function MenuTable({
  menus,
}: Props) {
  return (
    <div className="rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/5">Nama</TableHead>
            <TableHead className="w-1/5">Gambar</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Order</TableHead>
            <TableHead className="w-[150px]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {menus.map((menu) => (
            <TableRow key={menu.id}>
              <TableCell className="font-medium">
                {menu.title}
              </TableCell>

              <TableCell>
                <img src={menu.image_url || "https://placehold.co/500x500"} alt="" className="size-20 rounded-xl"/>
              </TableCell>
            

              <TableCell>
                {menu.is_active ? "Aktif" : "Nonaktif"}
              </TableCell>
              <TableCell>
                {menu.sort_order ?? "-"}
              </TableCell>

              <TableCell>
               <div className="flex gap-2">
                    <EditMenuDialog menu={menu} />

                    <DeleteMenuDialog
                    id={menu.id}
                    name={menu.title}
                    />
                </div>
              </TableCell>
            </TableRow>
          ))}

          {menus.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center"
              >
                Belum ada data menu.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}