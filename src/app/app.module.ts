import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UnHeroeComponent } from './un-heroe/un-heroe.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevosComponent } from './nuevos/nuevos.component';
import { ElvideoComponent } from './elvideo/elvideo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    SearchComponent,
    UnHeroeComponent,
    UsuariosComponent,
    NuevosComponent,
    ElvideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
