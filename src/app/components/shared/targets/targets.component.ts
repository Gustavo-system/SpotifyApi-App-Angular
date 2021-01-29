import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css'],
})
export class TargetsComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  verArtista(item: any) {
    let artistaID;
    if (item.type === 'artist') {
      artistaID = item.id;
    } else {
      artistaID = item.artists[0].id;
    }

    console.log(artistaID);
    this.router.navigate(['/artist', artistaID]);
  }
}
