import { Component, OnInit, Input } from '@angular/core';
import { Monster } from "app/models/monster";

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css']
})
export class MonsterDetailComponent implements OnInit {

  @Input('monster') monster : Monster;
  constructor() { }

  ngOnInit() {
  }

}
