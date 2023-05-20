import { Component } from './component';
import { newpokemon } from '../model/pokecard';
import { Pokeapi } from './data/Pokeapi';

export class Card extends Component {
  pokemon!: newpokemon[];
  repository: Pokeapi;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    console.log(this.pokemon);
    this.repository = new Pokeapi();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemon = await this.repository.getAll();
    console.log(this.pokemon);
    console.log(this.pokemon[0]);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon
      .map(
        (item: { name: string; url: any }) => `
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
