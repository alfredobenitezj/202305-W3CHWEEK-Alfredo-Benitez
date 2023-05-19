import { Component } from "./component";

export class Header extends Component{
  constructor(selector:string,public title:string){
    super(selector);
  this.template=this.createTemplate();
  this.render()
}
createTemplate(){return `<header>

    <img src="/public/1poke.png" alt="title of the page">
    <div class="title">
      <h1>Disfruta de la Pokedex mas completa de Shinoh</h1>
    </div>
  </header>`;

}

