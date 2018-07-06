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
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameListComponent } from './game/game-list.component';

import { MonsterService } from './service/monsters.service';
import { GameService } from './service/game.service';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    DiceManagerComponent,
    DashboardComponent,
    GameListComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
