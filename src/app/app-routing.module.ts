import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AboutComponent } from './about/about.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'Home', component: MovieListComponent },
  { path: 'UpComing', component: UpcomingComponent },
  { path: 'WatchList', component: WatchlistComponent },
  { path: 'About', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
