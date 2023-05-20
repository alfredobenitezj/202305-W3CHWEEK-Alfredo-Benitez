import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header>
    <img src="/public/1back.jpeg" alt="title of the page" width="1000px" height="500px">
    <div class="title">
      <h1>Disfruta de la Pokedex mas completa de Shinoh</h1>
    </div>
  </header>`;
  }
}
