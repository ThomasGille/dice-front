import { Component, Input, Output , ViewContainerRef, EventEmitter, OnInit } from '@angular/core';

import { Monster } from '../models/monster'
import { MonsterService } from '../service/monster.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit{
  @Input('monster') monster : Monster;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  oldMonster : Monster = null;
  editionMode : boolean = false;

  constructor(private monsterService : MonsterService) {}

  ngOnInit(): void {
    // copy by value
    this.oldMonster = JSON.parse(JSON.stringify(this.monster));
  }

  selfDelete() {
    this.onDelete.emit(this.monster._id);
  }

  updateMonster() {
    if (!this.monster.equals(this.oldMonster)) {
      this.monsterService.updateMonster(this.monster).subscribe((updatedMonster) => {
        this.monster = new Monster(null, null).hydrateFromJSON(updatedMonster);
      });
      // copy by value
      this.oldMonster = JSON.parse(JSON.stringify(this.monster));
    }
  }
}
