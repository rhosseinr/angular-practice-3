import { Component, OnInit, Input } from '@angular/core';
import { ImdbDetail } from '../../model/imdb-detail-model';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
    @Input() imdbDetail: ImdbDetail;
    constructor() { }

    ngOnInit() {
    }
}
