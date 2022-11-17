import { Episode } from "./types";

export function getLocalEpisodes(): Episode[] {
  const localEpisodes = window.localStorage.getItem('episodes')

  if (localEpisodes) {
    return JSON.parse(localEpisodes);
  }

  return [];
}

export function setLocalEpisodes(episodes: Episode[]): void {
  window.localStorage.setItem('episodes', JSON.stringify(episodes));
}