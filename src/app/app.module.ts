
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-list/movie-detail/movie-detail.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { AboutComponent } from './about/about.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MovieListComponent,
        MovieDetailComponent,
        WatchlistComponent,
        UpcomingComponent,
        AboutComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule.forRoot(),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
