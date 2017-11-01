import { 
	Component,
	OnInit

} from '@angular/core';

import {
	BookService,
	Book

} from "app/shared";

import { Observable }   from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";



@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
    providers: [ BookService ]
})
export class ShopComponent implements OnInit {
    
	bookList: Book[];

    constructor ( private bookService: BookService ) {
    
    }

    ngOnInit() {

   		this.bookService
   			.getAll()
   			.forEach( book => {
   				this.bookList = book;
		    	console.log(this.bookList);

	       	});


    }
}
