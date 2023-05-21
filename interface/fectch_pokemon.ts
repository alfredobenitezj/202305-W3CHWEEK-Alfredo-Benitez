import { listpokemon ,pokemon} from './interface';
export default function fetchPokemon(): void {
  const urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/'
  $pokeBox:HTMLElement.prototype=<HTMLElement>document.getElementById('pokelist')
  fragment:Node.prototype=document.createDocumentFragment()
  fetch(urlPokemon)
    .then((res) => res.json())
    .then((res: listpokemon) => {
      console.log(res.count);
      res.results.forEach((Pokemon)=>{
        return;
      }){
        const $figure:HTMLElement=document.createElement("figure")
        $img:HTMLElement.prototype=document.createElement("img")
         $figcaption:HTMLElement.prototype=document.createElement("figcaption")
         $namePokemon:Node.prototype=document.createTextNode(pokemon.name)
         $img.setAtribute("alt", pokemon.name)
         $img.setAtribute("title", pokemon.name)
         fetch(urlPokemon)
         .then(res:pokemon)=>
         {$img.setAtribute("src",res.sprites.front_default)} 



         $figcaption.appendChild($namePokemon)
         $figure.appendChild($img)
          $figure.appendChild($figcaption)
          frangment.appemdChild($figure)
          frangment.appemdChild($figure)

         

      }
      $pokebox.appendChild(fragment)
    }); 
}
