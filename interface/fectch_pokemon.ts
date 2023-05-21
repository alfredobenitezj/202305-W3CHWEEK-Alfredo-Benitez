import { listpokemon, pokemon } from './interface';
import { Main } from '/Users/alfredobenitez/Desktop/Proyectopokemonweek/src/main';

export default function fetchPokemon(): void {
  const urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  const $pokeBox: HTMLElement = document.getElementById('pokelist')!;
  const fragment: DocumentFragment = document.createDocumentFragment();

  fetch(urlPokemon)
    .then((res) => res.json())
    .then((res: listpokemon) => {
      console.log(res.count);
      res.results.forEach((Pokemon: pokemon) => {
        const $figure: HTMLElement = document.createElement('figure');
        const $img: HTMLElement = document.createElement('img');
        const $figcaption: HTMLElement = document.createElement('figcaption');
        const $namePokemon: Text = document.createTextNode(Pokemon.name);

        $img.setAttribute('alt', Pokemon.name);
        $img.setAttribute('title', Pokemon.name);

        fetch(Pokemon.url)
          .then((res) => res.json())
          .then((res: pokemon) => {
            $img.setAttribute('src', res.sprites.front_default);
          });

        $figcaption.appendChild($namePokemon);
        $figure.appendChild($img);
        $figure.appendChild($figcaption);
        fragment.appendChild($figure);
      });

      $pokeBox.appendChild(fragment);
    });
}
