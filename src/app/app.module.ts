import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material';
import { DiceComponent } from './dice/dice.component';
import { DiceManagerComponent } from './dice-manager/dice-manager.component';
import { MonsterManagerComponent } from './monster-manager/monster-manager.component';
import { MonsterComponent } from './monster/monster.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameListComponent } from './game-list/game-list.component';

import { MonsterService } from './service/monster.service';
import { GameService } from './service/game.service';
import { DiceService } from './service/dice.service';
import { GameFormComponent } from './game-form/game-form.component'

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    DiceManagerComponent,
    MonsterManagerComponent,
    MonsterComponent,
    DashboardComponent,
    GameListComponent,
    GameFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
  ],
  exports: [
    MatCardModule,
  ],
  providers: [
    MonsterService,
    GameService,
    DiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
