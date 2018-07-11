import { Component, OnInit } from '@angular/core';

import { Game } from '../../models/game';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  model: Game = new Game('', '');

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }


  submitted = false; loading = false;

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.gameService.createGame(this.model.name).subscribe((data) => {
      this.model.hydrateFromJSON(data);
      this.loading = false;
    });
  }
}
