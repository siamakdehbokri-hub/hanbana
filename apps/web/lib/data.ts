export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  duration: string;
  genre: string;
  mood: string;
  plays: string;
};

export type Artist = {
  slug: string;
  name: string;
  listeners: string;
  verified: boolean;
  image: string;
  bio: string;
};

export const covers = [
  "linear-gradient(135deg,#1ED760,#0A0F0C 54%,#D6A84F)",
  "linear-gradient(135deg,#273B2E,#E45A7C 58%,#F5D37D)",
  "linear-gradient(135deg,#111827,#1ED760 52%,#D6A84F)",
  "linear-gradient(135deg,#2F2012,#D6A84F 46%,#101611)",
  "linear-gradient(135deg,#0A0F0C,#7CFFB2 50%,#E45A7C)"
];

export const tracks: Track[] = [
  { id: "1", title: "Zagros Afterglow", artist: "Dilan Baran", album: "Mountain Lights", cover: covers[0], duration: "3:44", genre: "Kurdish Pop", mood: "Golden Hour", plays: "2.4M" },
  { id: "2", title: "Hewler Nights", artist: "Nishtiman Wave", album: "City of Songs", cover: covers[1], duration: "4:12", genre: "Electronic", mood: "Late Night", plays: "1.8M" },
  { id: "3", title: "Govand Pulse", artist: "Aras Dara", album: "Newroz Motion", cover: covers[2], duration: "2:58", genre: "Dance", mood: "Festival", plays: "3.1M" },
  { id: "4", title: "Soran Rain", artist: "Lana Roj", album: "Velvet Valleys", cover: covers[3], duration: "3:36", genre: "Acoustic", mood: "Calm", plays: "945K" },
  { id: "5", title: "Daf & Neon", artist: "Koma Botan", album: "Ancient Future", cover: covers[4], duration: "5:04", genre: "Fusion", mood: "Focus", plays: "1.2M" }
];

export const artists: Artist[] = [
  { slug: "dilan-baran", name: "Dilan Baran", listeners: "842K", verified: true, image: covers[0], bio: "A cinematic Kurdish pop voice blending warm strings, daf patterns, and modern synth production." },
  { slug: "nishtiman-wave", name: "Nishtiman Wave", listeners: "615K", verified: true, image: covers[1], bio: "Electronic collective shaping club-ready Kurdish melodies for late-night listening." },
  { slug: "aras-dara", name: "Aras Dara", listeners: "1.1M", verified: true, image: covers[2], bio: "Festival favorite known for high-energy govand rhythms and clean contemporary hooks." },
  { slug: "lana-roj", name: "Lana Roj", listeners: "388K", verified: false, image: covers[3], bio: "Acoustic songwriter with intimate ballads inspired by Soran mountain weather." }
];

export const playlists = [
  { slug: "newroz-heat", title: "Newroz Heat", subtitle: "Festival-ready Kurdish anthems", cover: covers[2], count: "64 songs" },
  { slug: "ziman-soft", title: "Ziman Soft", subtitle: "Slow vocals, oud, and velvet percussion", cover: covers[3], count: "38 songs" },
  { slug: "hawler-after-dark", title: "Hawler After Dark", subtitle: "Electronic Kurdish night drive", cover: covers[1], count: "51 songs" },
  { slug: "daf-futures", title: "Daf Futures", subtitle: "Traditional rhythm, future texture", cover: covers[4], count: "45 songs" }
];

export const albums = tracks.map((track) => ({
  slug: track.album.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title: track.album,
  artist: track.artist,
  cover: track.cover,
  releaseDate: "2026",
  duration: "42 min",
  tracks: tracks.filter((item) => item.artist === track.artist || item.genre === track.genre)
}));

export const genres = ["Kurdish Pop", "Govand", "Daf Fusion", "Sorani Acoustic", "Kurmanci Classics", "Newroz Dance"];
