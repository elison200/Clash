import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Cartas} from './../../models/cartas';

@Component({
  selector: 'app-clash',
  templateUrl: './clash.component.html',
  styleUrls: ['./clash.component.css']
})
export class ClashComponent implements OnInit {
  @Input()
  currentCartas?: Cartas;

  @Output()
  deletecartaEventFromParent = new EventEmitter<Cartas>();


  seemoreselected : boolean = false;
  isFavorite : boolean = false;
  nombre1 : string = "mas info";
  nombre2 : string = "add favorite";
  constructor() { }

  ngOnInit(): void {
    console.log(this.currentCartas);
  }

  seemore()
  {
  this.seemoreselected = !this.seemoreselected;
  if(this.seemoreselected) this.nombre1 = "ocultar";
  else this.nombre1 = "mas info";
  }

  addfavorite(){
  this.isFavorite = !this.isFavorite;
  if(this.isFavorite) this.nombre2 = "Quitar favorito";
  else this.nombre2 = "add favorite";
  }

  deletecartaComponent() {
    this.deletecartaEventFromParent.emit(this.currentCartas);
  }


}
