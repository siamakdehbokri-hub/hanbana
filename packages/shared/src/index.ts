export const HABANA_BRAND = {
  name: "HABANA",
  tagline: "Premium Kurdish music streaming",
  colors: {
    black: "#050706",
    green: "#1ED760",
    gold: "#D6A84F"
  }
};

export type ImportTrackInput = {
  title: string;
  artist: string;
  mp3Url: string;
  album?: string;
  coverImage?: string;
  genre?: string;
  language?: "ku" | "en" | "ar" | "fa" | string;
};
