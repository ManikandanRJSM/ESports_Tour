import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
  providers: [GamesService]
})
export class GamesComponent implements OnInit {

  gameData: any;
  constructor(private GamesService: GamesService){}

  ngOnInit(){
    this.GamesService.fetchGames().subscribe(data => {
      this.gameData = data
    }, error => {

    })
  }

}
