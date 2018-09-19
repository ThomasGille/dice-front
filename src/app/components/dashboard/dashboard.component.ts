import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameService } from "../../service/game.service";
import { Game } from "../../models/game";
import { Monster } from "app/models/monster";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  game : Game = new Game(null, 'Loading...');
  currentMonster : Monster = null;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.getGameById(id).subscribe((game) => {
      this.game = new Game(null, null).hydrateFromJSON(game);
    });
  }

  setCurrentMonster(monster: Monster) {
    this.currentMonster = monster;
  }

}
