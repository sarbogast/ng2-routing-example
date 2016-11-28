import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BenefitsOverviewComponent} from './benefits-overview/benefits-overview.component';
import {BenefitsComponent} from './benefits.component';
import {BenefitCashComponent} from './benefit-cash/benefit-cash.component';
import {BenefitIctComponent} from './benefit-ict/benefit-ict.component';

const benefitsRoutes: Routes = [
  {
    path: 'benefits', component: BenefitsComponent, children: [
      {path: '', component: BenefitsOverviewComponent, pathMatch: 'full'},
      {path: 'cash', component: BenefitCashComponent},
      {path: 'ict', component: BenefitIctComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(benefitsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BenefitsRoutingModule {
}
