import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteMenuDialog from "./delete-menu-dialog";
import EditMenuDialog from "./edit-menu-dialog";

interface Menu {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  is_active: boolean;
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
            <TableHead>Harga</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[150px]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {menus.map((menu) => (
            <TableRow key={menu.id}>
              <TableCell className="font-medium">
                {menu.name}
              </TableCell>

              <TableCell>
                <img src={menu.image_url || "https://placehold.co/500x500"} alt="" className="size-20 rounded-xl object-cover"/>
              </TableCell>
              <TableCell>
                Rp {menu.price.toLocaleString("id-ID")}
              </TableCell>

              <TableCell>
                {menu.is_active ? "Aktif" : "Nonaktif"}
              </TableCell>

              <TableCell>
               <div className="flex gap-2">
                    <EditMenuDialog menu={menu} />

                    <DeleteMenuDialog
                    id={menu.id}
                    name={menu.name}
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