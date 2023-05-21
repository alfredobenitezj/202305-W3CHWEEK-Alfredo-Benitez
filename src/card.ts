import { Component } from './component';
import { newpokemon } from '../model/pokecard';
import { Pokeapi } from './data/Pokeapi';

export class Card extends Component {
  pokemon: newpokemon[] = [];
  repository: Pokeapi;

  constructor(selector: string) {
    super(selector);
    this.repository = new Pokeapi();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemon = await this.repository.getAll();
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon
      .map(
        (item: newpokemon) => `
          <li>
            <p>${item.name.toUpperCase()}</p>
            <p><a href="${item.url}">Details</a></p>
          </li>`
      )
      .join('');

    return `
      <ul>${list}</ul>
      `;
  }
}
