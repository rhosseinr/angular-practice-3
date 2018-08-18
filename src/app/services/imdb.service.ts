import { Injectable } from '@angular/core';
import { ImdbDetail } from '../model/imdb-detail-model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ImdbService {
    imdbid: string;
    constructor(private http: HttpClient) { }

    public getContents(id: string): Observable<ImdbDetail> {
        return this.http.get<ImdbDetail>('http://www.omdbapi.com/?i=' + id + '&apikey=b118af93')
        .pipe();
    }
}
