import { Component } from '@angular/core';
import { Cartas } from '../app/models/cartas';
import { CartasJson } from '../app/_files/CartaS';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clashProject';

  cartasListObject : Cartas[] = CartasJson; 
  cartaToFind: string = "";
  showNewCarta = false;

  findcarta(){
    this.cartasListObject = CartasJson.filter(m => m.titulo.toLowerCase().includes(this.cartaToFind.toLowerCase()));
  }

  resetListcarta(){
    this.cartasListObject = CartasJson;
    this.cartaToFind = "";

  }

  deletecarta(carta: Cartas) {
    this.cartasListObject = this.cartasListObject.filter(m => m.id != carta.id)
  } 

  showAddCartaForm() {
    this.showNewCarta = !this.showNewCarta;
  }
   
  addCarta(carta: Cartas) {
    CartasJson.push(carta);
    this.showAddCartaForm();
  }


}
