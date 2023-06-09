export interface listpokemon {
  sprites: any;
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
}
