import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {NuevosComponent} from './nuevos/nuevos.component';
import {ElvideoComponent} from './elvideo/elvideo.component';
import { SearchComponent } from './search/search.component';
import { UnHeroeComponent } from './un-heroe/un-heroe.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'nuevos', component:NuevosComponent},
  {path: 'elvideo', component:ElvideoComponent},
  {path: 'heroe/:id', component: UnHeroeComponent},
  {path: 'buscador/:nombreh', component:SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
