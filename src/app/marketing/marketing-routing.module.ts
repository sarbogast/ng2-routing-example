import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from './home/home.component';
import {FeaturesComponent} from './features/features.component';
import {MarketingComponent} from './marketing.component';

const marketingRoutes: Routes = [
    { path: '', component: MarketingComponent, children: [
        { path: '', component: HomeComponent, pathMatch: 'full'},
        { path: 'features', component: FeaturesComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(marketingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MarketingRoutingModule {}
