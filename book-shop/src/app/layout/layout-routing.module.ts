import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent }      from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
			{ path: 'shop', loadChildren: './shop/shop.module#ShopModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})export class LayoutRoutingModule { }
