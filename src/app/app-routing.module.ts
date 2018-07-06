import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GameListComponent } from './game/game-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' }, // default route
  { path: 'games', component: GameListComponent },
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
