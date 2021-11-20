import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cartas } from './../../models/cartas';

@Component({
  selector: 'app-clash-form',
  templateUrl: './clash-form.component.html',
  styleUrls: ['./clash-form.component.css']
})
export class ClashFormComponent implements OnInit {

  model = new Cartas();
  genres = ['Mazo de Accion', 'Mazo Gay', 'Mazo de hombres', 'Mazo economico'];
  @Output()
  addCartaEventFromParent = new EventEmitter<Cartas>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addCartaEventFromParent.emit(this.model);
    this.model = new Cartas();

  }

  newCarta() {
    this.model = new Cartas();
  }


}
