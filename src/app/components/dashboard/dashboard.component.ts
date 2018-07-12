import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GameService } from "../../service/game.service";
import { Game } from "../../models/game";
import { Monster } from "app/models/monster";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  game : Game = new Game(null, 'Loading...');
  currentMonster : Monster = null;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.getGameById(id).subscribe((game) => {
      this.game = new Game(null, null).hydrateFromJSON(game);
    });
  }

  setCurrentMonster(monster: Monster) {
    this.currentMonster = monster;
    console.log(this.currentMonster._dices);
  }

}
