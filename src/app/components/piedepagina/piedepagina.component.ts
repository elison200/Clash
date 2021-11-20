import { Component, OnInit } from '@angular/core';
import { correosite } from '../../models/infoSite';
import { CorreoJson } from '../../_files/infoSite';

@Component({
  selector: 'app-piedepagina',
  templateUrl: './piedepagina.component.html',
  styleUrls: ['./piedepagina.component.css']
})
export class PiedepaginaComponent implements OnInit {
 correoobject: correosite = CorreoJson;
  constructor() { }

  ngOnInit(): void {
  }

}
