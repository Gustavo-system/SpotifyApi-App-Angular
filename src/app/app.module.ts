import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importacion de los componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TargetsComponent } from './components/shared/targets/targets.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//importacion de las rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

//importacion de servicios
import { SpotifyServiceService } from './services/spotify-service.service';

//importacion de http
import { HttpClientModule } from '@angular/common/http';

//pipes
import { NoimgPipe } from './pipes/noimg.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimgPipe,
    TargetsComponent,
    LoadingComponent,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [SpotifyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
