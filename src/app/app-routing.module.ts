import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { VotacionComponent } from './pages/votacion/votacion.component';

const routes: Routes = [

  {path: 'home',component: HomeComponent},
  // {path: 'voto',component: VotacionComponent},
  {path: 'pelicula/:id',component: PeliculaComponent},
  {path: 'buscar/:texto',component: BuscarComponent},
  {path: '**',pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
