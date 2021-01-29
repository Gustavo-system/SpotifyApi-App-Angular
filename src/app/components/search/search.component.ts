import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  constructor(private spotify: SpotifyServiceService) {}

  ngOnInit(): void {}

  artistas: any[] = [];
  loading: boolean;

  buscar(termino: string) {
    this.loading = true;

    this.spotify.getArtists(termino).subscribe((data: any) => {
      // console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }
}
