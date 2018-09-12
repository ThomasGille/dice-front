import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GameService } from '../../service/game.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  @Input('game') game:Game;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  editionMode : Boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  updateGame() {
    this.gameService.editGame(this.game._id, this.game.name).subscribe((newGame: Game) => {
      this.game = newGame;
      this.editionMode = false;
    });
  }

  deleteGame(id) {
    this.gameService.deleteGame(id).subscribe(() => {
      this.onDelete.emit(id);
    });
  }

}
