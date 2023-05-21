import { Component } from './component';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return ` <footer class="footergeneral">
    <div class="company">
      <p>PokeNord industries Investigation</p>
    </div>
    <div class="colaborated">
      <p>Profesor Oak and Red colaborated in this Proyect</p>
    </div>
    
  </footer>`;
  }
}
