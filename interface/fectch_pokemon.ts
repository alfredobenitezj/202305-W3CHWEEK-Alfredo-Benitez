import { listpokemon } from './interface';
export default function fetchPokemon(): void {
  const urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  fetch(urlPokemon)
    .then((res) => res.json())
    .then((res: listpokemon) => {
      console.log(res.count);
    });
}
