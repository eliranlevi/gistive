const API_BASE = "https://api.github.com/";

export const GISTS_API = (username: string): string => `${API_BASE}users/${username}/gists`;
