import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyServiceService {
  constructor(private http: HttpClient) {
    console.log('servicio listo para ser usado');
  }

  getQuery(categoria: string) {
    const url = `https://api.spotify.com/v1/${categoria}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCHR3Uyj0WXW0dxFc8AvdYEEAbAIK4gj46mnDi994CM6knZj2T-1FO2EEYGj2OlvFwoN-YsZcZGGzNCn6s',
    });

    return this.http.get(url, { headers });
  }

  getNewMusic() {
    return this.getQuery('browse/new-releases?').pipe(
      map((data) => {
        return data['albums'].items;
      })
    );
    // const headers = new HttpHeaders({
    //   'Authorization' : 'Bearer BQDMUm0KGIVJSd0yZAT_XvT6QsNbgQ9xLDMDCV_5pDTXz7j30_oSaeVgAPiuwxgZzCDNj3qEhzcrZw2zPGY'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?', { headers }).pipe(map(data=>{
    //   return data['albums'].items;
    // }));
  }

  getArtists(termino: string) {
    // return this.getQuery(`search?q= ${ termino } &type=${type}`).pipe(map(data=>{
    return this.getQuery(`search?q= ${termino} &type=artist`).pipe(
      map((data) => {
        return data['artists'].items;
      })
    );
    // const headers = new HttpHeaders({
    //   'Authorization' : 'Bearer BQDMUm0KGIVJSd0yZAT_XvT6QsNbgQ9xLDMDCV_5pDTXz7j30_oSaeVgAPiuwxgZzCDNj3qEhzcrZw2zPGY'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q= ${ termino } &type=artist`, { headers }).pipe(map(data=>{
    //   return data['artists'].items;
    // }));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=es`).pipe(
      map((data) => {
        return data['tracks'];
      })
    );
  }
}
