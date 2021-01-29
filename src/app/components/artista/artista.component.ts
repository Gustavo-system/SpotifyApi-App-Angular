import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyServiceService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyServiceService
  ) {
    this.loadingArtist = true;

    this.router.params.subscribe((params) => {
      //  console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {}

  getArtista(id: string) {
    this.loadingArtist = true;

    this.spotify.getArtist(id).subscribe((dataArtist) => {
      // console.log(dataArtist);
      this.artista = dataArtist;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((topTracks) => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
