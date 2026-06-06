import { Database } from "./database.types";

export type Menu =
  Database["public"]["Tables"]["menus"]["Row"];

export type Gallery =
  Database["public"]["Tables"]["gallery"]["Row"];

export type SiteSettings =
  Database["public"]["Tables"]["site_settings"]["Row"];