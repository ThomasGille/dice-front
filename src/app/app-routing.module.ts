import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameFormComponent } from './game-form/game-form.component'

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' }, // default route
  { path: 'games', component: GameListComponent },
  { path: 'games/create', component: GameFormComponent },
  { path: 'game/:id', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ], exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
