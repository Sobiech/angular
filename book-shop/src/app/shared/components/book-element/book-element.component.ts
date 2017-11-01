import { 

  Component,
  Input,
  OnInit 

} from "@angular/core";

import { 

  Book, 
  ShoppingCart,
  ShoppingCartService 

} from "../../.";


import { Observable } from "rxjs/Observable";
import { Observer }   from "rxjs/Observer";

@Component({
  selector: "book-element",
  styleUrls: ["./book-element.component.scss"],
  templateUrl: "./book-element.component.html"
})
export class BookElementComponent implements OnInit {

  @Input("book")
  public bookElement: Book; 

  public constructor() {

  }

  ngOnInit(): void {

  }

}
