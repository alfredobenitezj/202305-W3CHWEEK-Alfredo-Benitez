export interface listpokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}
