const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/v1";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers
    }
  });
  if (!response.ok) throw new Error(`HABANA API error ${response.status}`);
  return response.json() as Promise<T>;
}

export const habanaApi = {
  home: () => request("/home"),
  search: (query: string) => request(`/tracks?q=${encodeURIComponent(query)}`),
  trackStream: (slug: string) => request(`/tracks/${slug}/stream`),
  artist: (slug: string) => request(`/artists/${slug}`),
  playlist: (slug: string) => request(`/playlists/${slug}`),
  recommendations: (userId: string, mood?: string) => request(`/recommendations?userId=${userId}${mood ? `&mood=${encodeURIComponent(mood)}` : ""}`),
  importJson: (sourceName: string, tracks: unknown[]) => request("/ingestion/json", { method: "POST", body: JSON.stringify({ sourceName, tracks }) })
};
