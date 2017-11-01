export class Book {

  	public id: number;

	public author: string;
    public country:  string;
    public language: string;
    public link: 	 string;
    public title: 	 string;

    public pages:	 number;
    public year: 	 number;

    public price: 	 string;

  	public updateFrom(src: Book): void {

    	this.id = src.id;
    	
    	this.author   = src.author;
    	this.country  = src.country;
    	this.language = src.language;

    	this.link 	= src.link;
    	this.title 	= src.title;

    	this.pages 	= src.pages;
    	this.year 	= src.year;
    	this.price 	= src.price;

	}
	
}