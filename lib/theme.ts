export const themes = {
  coffee: {
    button: "bg-[#8B5E3C] hover:bg-[#6F4A2E]",
    background: "bg-[#8B5E3C]",
    backgroundSoft: "bg-[#8B5E3C]/10",
    hover: "hover:text-[#8B5E3C]",
    text: "text-[#8B5E3C]",
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