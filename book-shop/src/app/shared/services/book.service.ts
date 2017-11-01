import { Injectable }           from '@angular/core';
import { Http, Headers }        from '@angular/http';

import { AbstractService }      from './abstract.service';

import { Observable }           from 'rxjs/Observable';

import { Book }                 from '../models/book.model';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService extends AbstractService<Book> {
    
    constructor ( protected http: Http ) {

        super(http);
    }

    // jesli jakis term znajduje sie w jsonie, to pobierana jest lista ksiazek
    public search(term: string): Observable<Book[]> {
        
        return this.http
            .get('assets/book.json')
            .map(response =>  ( response.json() as Book[] )
            .filter( 
                book => 
                    book.title
                        .toLowerCase()
                        .indexOf(term.toLowerCase()) >= 0));

    }

    public getAll() : Observable<Book[]> {

        return this.http
            .get('assets/books.json')
            .map(response => ( response.json() as Book[] ));

    }

}
