import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClashComponent } from './components/clash/clash.component';
import { MenuComponent } from './components/menu/menu.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { FormsModule } from '@angular/forms';
import { ClashFormComponent } from './components/clash-form/clash-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClashComponent,
    MenuComponent,
    PublicacionComponent,
    PiedepaginaComponent,
    ClashFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
