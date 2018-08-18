import { Component, OnInit, ViewChild } from '@angular/core';
import { ImdbItemModel } from '../model/imdbItem-Model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ImdbDetail } from '../model/imdb-detail-model';
import { ImdbService } from '../services/imdb.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    dataSource: MatTableDataSource<ImdbItemModel>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    rowidIMDB: string;
    imdbDetailList: ImdbDetail;

    imdbList: ImdbItemModel[] = [
        {
            title: "The Shawshank Redemption",
            year: "1994",
            idIMDB: "tt0111161",
            rating: "9.2",
            ranking: 1
        }, {
            title: "The Godfather",
            year: "1972",
            idIMDB: "tt0068646",
            rating: "9.2",
            ranking: 2
        }, {
            title: "The Godfather: Part II",
            year: "1974",
            idIMDB: "tt0071562",
            rating: "9.0",
            ranking: 3
        }, {
            title: "The Dark Knight",
            year: "2008",
            idIMDB: "tt0468569",
            rating: "9.0",
            ranking: 4
        }, {
            title: "12 Angry Men",
            year: "1957",
            idIMDB: "tt0050083",
            rating: "8.9",
            ranking: 5
        }, {
            title: "Schindler's List",
            year: "1993",
            idIMDB: "tt0108052",
            rating: "8.9",
            ranking: 6
        }, {
            title: "The Lord of the Rings: The Return of the King",
            year: "2003",
            idIMDB: "tt0167260",
            rating: "8.9",
            ranking: 7
        }, {
            title: "Pulp Fiction",
            year: "1994",
            idIMDB: "tt0110912",
            rating: "8.9",
            ranking: 8
        }, {
            title: "The Good, the Bad and the Ugly",
            year: "1966",
            idIMDB: "tt0060196",
            rating: "8.8",
            ranking: 9
        }, {
            title: "Fight Club",
            year: "1999",
            idIMDB: "tt0137523",
            rating: "8.8",
            ranking: 10
        }, {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            year: "2001",
            idIMDB: "tt0120737",
            rating: "8.8",
            ranking: 11
        }, {
            title: "Forrest Gump",
            year: "1994",
            idIMDB: "tt0109830",
            rating: "8.7",
            ranking: 12
        }, {
            title: "Star Wars: Episode V - The Empire Strikes Back",
            year: "1980",
            idIMDB: "tt0080684",
            rating: "8.7",
            ranking: 13
        }, {
            title: "Inception",
            year: "2010",
            idIMDB: "tt1375666",
            rating: "8.7",
            ranking: 14
        }, {
            title: "The Lord of the Rings: The Two Towers",
            year: "2002",
            idIMDB: "tt0167261",
            rating: "8.7",
            ranking: 15
        }, {
            title: "One Flew Over the Cuckoo's Nest",
            year: "1975",
            idIMDB: "tt0073486",
            rating: "8.7",
            ranking: 16
        }, {
            title: "Goodfellas",
            year: "1990",
            idIMDB: "tt0099685",
            rating: "8.7",
            ranking: 17
        }, {
            title: "The Matrix",
            year: "1999",
            idIMDB: "tt0133093",
            rating: "8.6",
            ranking: 18
        }, {
            title: "Seven Samurai",
            year: "1954",
            idIMDB: "tt0047478",
            rating: "8.6",
            ranking: 19
        }, {
            title: "City of God",
            year: "2002",
            idIMDB: "tt0317248",
            rating: "8.6",
            ranking: 20
        }, {
            title: "Star Wars: Episode IV - A New Hope",
            year: "1977",
            idIMDB: "tt0076759",
            rating: "8.6",
            ranking: 21
        }, {
            title: "Se7en",
            year: "1995",
            idIMDB: "tt0114369",
            rating: "8.6",
            ranking: 22
        }, {
            title: "The Silence of the Lambs",
            year: "1991",
            idIMDB: "tt0102926",
            rating: "8.6",
            ranking: 23
        }, {
            title: "It's a Wonderful Life",
            year: "1946",
            idIMDB: "tt0038650",
            rating: "8.6",
            ranking: 24
        }, {
            title: "Life Is Beautiful",
            year: "1997",
            idIMDB: "tt0118799",
            rating: "8.6",
            ranking: 25
        }, {
            title: "The Usual Suspects",
            year: "1995",
            idIMDB: "tt0114814",
            rating: "8.5",
            ranking: 26
        }, {
            title: "Spirited Away",
            year: "2001",
            idIMDB: "tt0245429",
            rating: "8.5",
            ranking: 27
        }, {
            title: "Saving Private Ryan",
            year: "1998",
            idIMDB: "tt0120815",
            rating: "8.5",
            ranking: 28
        }, {
            title: "Léon: The Professional",
            year: "1994",
            idIMDB: "tt0110413",
            rating: "8.5",
            ranking: 29
        }, {
            title: "Avengers: Infinity War",
            year: "2018",
            idIMDB: "tt4154756",
            rating: "8.5",
            ranking: 30
        }, {
            title: "The Green Mile",
            year: "1999",
            idIMDB: "tt0120689",
            rating: "8.5",
            ranking: 31
        }, {
            title: "Interstellar",
            year: "2014",
            idIMDB: "tt0816692",
            rating: "8.5",
            ranking: 32
        }, {
            title: "American History X",
            year: "1998",
            idIMDB: "tt0120586",
            rating: "8.5",
            ranking: 33
        }, {
            title: "Psycho",
            year: "1960",
            idIMDB: "tt0054215",
            rating: "8.5",
            ranking: 34
        }, {
            title: "City Lights",
            year: "1931",
            idIMDB: "tt0021749",
            rating: "8.5",
            ranking: 35
        }, {
            title: "Once Upon a Time in the West",
            year: "1968",
            idIMDB: "tt0064116",
            rating: "8.5",
            ranking: 36
        }, {
            title: "Casablanca",
            year: "1942",
            idIMDB: "tt0034583",
            rating: "8.5",
            ranking: 37
        }, {
            title: "Modern Times",
            year: "1936",
            idIMDB: "tt0027977",
            rating: "8.5",
            ranking: 38
        }, {
            title: "The Intouchables",
            year: "2011",
            idIMDB: "tt1675434",
            rating: "8.5",
            ranking: 39
        }, {
            title: "The Pianist",
            year: "2002",
            idIMDB: "tt0253474",
            rating: "8.5",
            ranking: 40
        }, {
            title: "The Departed",
            year: "2006",
            idIMDB: "tt0407887",
            rating: "8.5",
            ranking: 41
        }, {
            title: "Terminator 2",
            year: "1991",
            idIMDB: "tt0103064",
            rating: "8.5",
            ranking: 42
        }, {
            title: "Back to the Future",
            year: "1985",
            idIMDB: "tt0088763",
            rating: "8.5",
            ranking: 43
        }, {
            title: "Rear Window",
            year: "1954",
            idIMDB: "tt0047396",
            rating: "8.5",
            ranking: 44
        }, {
            title: "Raiders of the Lost Ark",
            year: "1981",
            idIMDB: "tt0082971",
            rating: "8.5",
            ranking: 45
        }, {
            title: "Whiplash",
            year: "2014",
            idIMDB: "tt2582802",
            rating: "8.5",
            ranking: 46
        }, {
            title: "Gladiator",
            year: "2000",
            idIMDB: "tt0172495",
            rating: "8.5",
            ranking: 47
        }, {
            title: "The Lion King",
            year: "1994",
            idIMDB: "tt0110357",
            rating: "8.5",
            ranking: 48
        }, {
            title: "The Prestige",
            year: "2006",
            idIMDB: "tt0482571",
            rating: "8.5",
            ranking: 49
        }, {
            title: "Memento",
            year: "2000",
            idIMDB: "tt0209144",
            rating: "8.4",
            ranking: 50
        }
    ];
    displayedColumns: string[] = ['ranking', 'idIMDB', 'title', 'year', 'rating'];
    constructor(private imdbService: ImdbService) {
        this.dataSource = new MatTableDataSource(this.imdbList);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    showDetail(row): void{
        this.imdbService.getContents(row.idIMDB)
            .subscribe(val => this.imdbDetailList = val);
            console.log(this.imdbDetailList);
            
    }
}
