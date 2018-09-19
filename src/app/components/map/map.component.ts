import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../service/game.service';
import { ActivatedRoute } from '@angular/router';
import { Monster } from '../../models/monster';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public CASE_DIMENTION : number = 80;
  map : String [][] ;
  game : Game = new Game(null, 'Loading...');

  avaliableBackgrounds = [
    "https://www.iconshock.com/img_jpg/PERSPECTIVE/general/jpg/128/square_icon.jpg",
    "http://icons.iconarchive.com/icons/mysitemyway/blue-jeans-social-media/128/newswire-square-icon.png",
    "http://wfarm4.dataknet.com/static/resources/icons/set1/a947bd4c1d25.png",
    "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-6/128/Square-icon.png",
    "https://www.mycutegraphics.com/backgrounds/squares/square2.gif",
    "https://thumbs.dreamstime.com/t/simple-neutral-grey-background-grunge-rustic-look-perhaps-advertising-spot-colors-63759748.jpg"
  ]
  selectedBackground = "https://www.mycutegraphics.com/backgrounds/squares/square2.gif";
  selectedMonster : Monster = null;

  constructor(private route: ActivatedRoute, private gameService: GameService) {
    this.map = [];

    for(var i: number = 0; i < 10; i++) {
        this.map[i] = [];
        for(var j: number = 0; j< 10; j++) {
            this.map[i][j] = "https://thumbs.dreamstime.com/t/simple-neutral-grey-background-grunge-rustic-look-perhaps-advertising-spot-colors-63759748.jpg";
        }
    }
   }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.getGameById(id).subscribe((game) => {
      this.game = new Game(null, null).hydrateFromJSON(game);
      console.log("TODO :  maybe set monster pos to -1 -1");
    });
  }

  onClick (e) {
    // If needed to place them centerly of the case :
    // Math.floor(5.25) -> 5
    let i = (e.layerX - this.CASE_DIMENTION/2) / this.CASE_DIMENTION;
    let j = (e.layerY - this.CASE_DIMENTION/2) / this.CASE_DIMENTION;
    if (this.selectedMonster) {
      this.selectedMonster.x = i;
      this.selectedMonster.y = j
    } else {
      this.map[Math.round(i)][Math.round(j)] = this.selectedBackground;
    }
  }

}
