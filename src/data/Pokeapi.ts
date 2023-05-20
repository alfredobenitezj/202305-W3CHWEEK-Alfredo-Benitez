export class Pokeapi {
  Urlapi: string;
  localUrl: string;
  constructor() {
    this.Urlapi = 'https://pokeapi.co/api/v2/pokemon/';
    this.localUrl = 'http://localhost:5173/';
  }

  async getAll() {
    const response = await fetch(this.Urlapi);
    return response.json();
  }
}
