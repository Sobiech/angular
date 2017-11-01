import { 

	Component,
	OnInit 

} from "@angular/core";

import { ShoppingCartService } from "app/shared/services";

@Component({
  selector: "app-order-confirmation",
  templateUrl: "./order-confirmation.component.html"
})
export class OrderConfirmationComponent implements OnInit {
  public constructor(private shoppingCartService: ShoppingCartService) {}

  public ngOnInit(): void {
    this.shoppingCartService.empty();
  }
}
