import { Component, OnInit } from '@angular/core';
// for getting route params
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GameService } from '../service/game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games : Game [] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe((games) => {
      console.log(games);
    });
    this.games.push(new Game("idRandomDeGame1", "Game Patate"));
    this.games.push(new Game("idRandomDeGame2", "Game Carotte"));
    this.games.push(new Game("idRandomDeGame3", "Game Navet"));
  }

}
