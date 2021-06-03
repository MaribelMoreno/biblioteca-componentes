import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibreriaComponentesModule } from 'libreria-componentes';
import { ShowcaseLibreriaComponentesComponent } from './showcase/showcase-libreria-componentes/showcase-libreria-componentes.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseLibreriaComponentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibreriaComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
