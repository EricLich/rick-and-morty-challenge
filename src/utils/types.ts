export type Character = {
  id: string,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string,
  },
  location: {
    name: string,
    url: string,
  },
  image: string,
  episodes: string[],
  url: string,
  created: string,
}

export type Episode = {
  id: string,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string,
}

