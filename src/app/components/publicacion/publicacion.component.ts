import { Component, OnInit } from '@angular/core';
import { Publicacionsite } from '../../models/infoSite';
import { PublicacionJson } from '../../_files/infoSite';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  publicacionobjectsite : Publicacionsite = PublicacionJson;
  constructor() { }

  ngOnInit(): void {
  }

}
