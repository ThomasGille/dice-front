import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../service/game.service';
import { ActivatedRoute } from '@angular/router';
import { Monster } from '../../models/monster';
import { MonsterService } from '../../service/monster.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public CASE_DIMENTION : number = 80;
  x_dim = 5;
  y_dim = 5;
  map : String [][]  = [];
  game : Game = new Game(null, 'Loading...');

  avaliableBackgrounds = [
    "https://www.iconshock.com/img_jpg/PERSPECTIVE/general/jpg/128/square_icon.jpg",
    "https://cdn2.iconfinder.com/data/icons/outlined-valuable-items/200/monetary_treasure_open-128.png",
    "https://thumbs.dreamstime.com/t/granite-sett-seamless-tileable-texture-dark-grey-39370836.jpg",
    "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-6/128/Square-icon.png",
    "http://png.clipart.me/graphics/thumbs/156/vector-background-of-black-stripy-striped-texture-stripe-pattern-horizontal-lines-dark-fluted-paper-wallpapers-abstract-backdrop_156261131.jpg",
    "https://thumbs.dreamstime.com/t/simple-neutral-grey-background-grunge-rustic-look-perhaps-advertising-spot-colors-63759748.jpg"
  ]
  selectedBackground = "http://wfarm4.dataknet.com/static/resources/icons/set1/a947bd4c1d25.png";
  selectedMonster : Monster = null;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private monsterService: MonsterService) {
      this.updateMap();
   }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.getGameById(id).subscribe((game) => {
      this.game = new Game(null, null).hydrateFromJSON(game);
    });
  }

  onClick (e) {
    // If needed to place them centerly of the case :
    // Math.floor(5.25) -> 5

    if (this.selectedMonster) {
      let i = (e.layerX - this.CASE_DIMENTION/2) / this.CASE_DIMENTION;
      let j = (e.layerY - this.CASE_DIMENTION/2) / this.CASE_DIMENTION;
      this.selectedMonster.x = i;
      this.selectedMonster.y = j;
      let toUpdateMonster = this.selectedMonster; // prevent update after selected change
      this.monsterService.updateMonster(toUpdateMonster).subscribe(
        (data) => { toUpdateMonster.hydrateFromJSON(data) },
        (err) => { console.error(err) }
      );
    } else {
      let i = (e.layerX - 8*this.x_dim.toString().length - this.CASE_DIMENTION/2) / this.CASE_DIMENTION;
      let j = (e.layerY - 16 - this.CASE_DIMENTION/2) / this.CASE_DIMENTION;
      this.map[Math.round(i)][Math.round(j)] = this.selectedBackground;
    }
  }

  updateMap() {
    let newMap = [];
    for(var i: number = 0; i < this.x_dim; i++) {
      newMap[i] = [];
      for(var j: number = 0; j< this.y_dim; j++) {
        if(this.map[i] && this.map[i][j]) {
          newMap[i][j] = this.map[i][j];
        } else {
          newMap[i][j] = "https://thumbs.dreamstime.com/t/simple-neutral-grey-background-grunge-rustic-look-perhaps-advertising-spot-colors-63759748.jpg";
        }
      }
    }
    this.map = newMap;
  }
}
