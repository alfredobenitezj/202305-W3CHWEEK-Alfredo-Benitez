import { listpokemon, Pokemon } from './interface';

export default function fetchPokemon(): void {
  const urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  const $pokeBox: HTMLElement = document.getElementById('poke-box')!;
  const fragment: DocumentFragment = document.createDocumentFragment();

  fetch(urlPokemon)
    .then((res) => res.json())
    .then((res: listpokemon) => {
      console.log(res.count);
      res.results.forEach((Pokemon) => {
        const $figure: HTMLElement = document.createElement('figure');
        const $img: HTMLElement = document.createElement('img');
        const $figcaption: HTMLElement = document.createElement('figcaption');
        const $namePokemon: Text = document.createTextNode(Pokemon.name);

        $img.setAttribute('alt', Pokemon.name);
        $img.setAttribute('title', Pokemon.name);

        fetch(Pokemon.url)
          .then((res) => res.json())
          .then((res: Pokemon) => {
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
