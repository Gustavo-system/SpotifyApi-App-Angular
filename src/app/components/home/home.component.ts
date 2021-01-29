import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  //se inyecta el servicio que se usara
  constructor(private spotify: SpotifyServiceService) {
    this.loading = true;

    this.spotify.getNewMusic().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
