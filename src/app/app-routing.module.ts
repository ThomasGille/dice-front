import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component'
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' }, // default route
  { path: 'games', component: GameListComponent },
  { path: 'games/create', component: GameFormComponent },
  { path: 'game/:id', component: DashboardComponent },
  { path: 'game/:id/map', component: MapComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ], exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
