import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule } from '@angular/material';
import { DiceComponent } from './dice/dice.component';
import { DiceManagerComponent } from './dice-manager/dice-manager.component';

import { MonsterService } from './service/monsters.service';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    DiceManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
  ],
  exports: [
    MatCardModule,
    MatInputModule,
  ],
  providers: [
    MonsterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
