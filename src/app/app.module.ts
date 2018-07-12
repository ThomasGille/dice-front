import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//// Components
import { MatCardModule } from '@angular/material';
import { DiceComponent } from './components/dice/dice.component';
import { DiceManagerComponent } from './components/dice-manager/dice-manager.component';
import { MonsterManagerComponent } from './components/monster-manager/monster-manager.component';
import { MonsterComponent } from './components/monster/monster.component';
import { MonsterDetailComponent } from 'app/components/monster-detail/monster-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameListComponent } from './components/game-list/game-list.component';

//// Services
import { MonsterService } from './service/monster.service';
import { GameService } from './service/game.service';
import { DiceService } from './service/dice.service';

//// Forms
import { GameFormComponent } from './components/game-form/game-form.component'

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    DiceManagerComponent,
    MonsterManagerComponent,
    MonsterComponent,
    MonsterDetailComponent,
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
