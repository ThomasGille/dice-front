import { Component, OnInit } from '@angular/core';

import { GameService } from '../../service/game.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games : Game [] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe((games) => {
      games.forEach(game => {
      this.games.push(new Game(null, null).hydrateFromJSON(game))
      });
    });
  }

  removeGame (id: String) {
    this.games = this.games.filter((game) => {
      return game._id !== id;
    });
  }
}
