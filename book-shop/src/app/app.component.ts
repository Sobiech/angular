import { Component } 		from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private translate: TranslateService) {

        translate.addLangs(['pl','en']);
        translate.setDefaultLang('pl');
        
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/pl|en/) ? browserLang : 'pl');
    }

}
