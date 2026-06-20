export const themes = {
  amber: {
    button: "bg-amber-500 hover:bg-amber-600",
    background: "bg-amber-500",
    backgroundSoft: "bg-amber-500/10",
    hover: "hover:text-amber-500",
    text: "text-amber-500",
  },
  purple: {
    button: "bg-purple-500 hover:bg-purple-600",
    background: "bg-purple-500",
    backgroundSoft: "bg-purple-500/10",
    hover: "hover:text-purple-500",
    text: "text-purple-500",
  },
} as const;

export type ThemeName = keyof typeof themes;