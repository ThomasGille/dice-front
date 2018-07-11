import { Component, OnInit } from '@angular/core';
// for getting route params
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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

  deleteGame(id) {
    this.gameService.deleteGame(id).subscribe(() => {
      this.games = this.games.filter((el:Game) => {
        return el._id !== id;
      });
    });
  }

}
