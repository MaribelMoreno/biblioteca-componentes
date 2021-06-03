import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseLibreriaComponentesComponent } from './showcase/showcase-libreria-componentes/showcase-libreria-componentes.component';


const routes: Routes = [
  {path: 'libreria-componentes',component: ShowcaseLibreriaComponentesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
