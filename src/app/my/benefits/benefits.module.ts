import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BenefitsComponent} from './benefits.component';
import {BenefitsNavComponent} from './benefits-nav/benefits-nav.component';
import {BenefitsOverviewComponent} from './benefits-overview/benefits-overview.component';
import {BenefitsRoutingModule} from './benefits-routing.module';
import {BenefitCashComponent} from './benefit-cash/benefit-cash.component';
import {FormsModule} from '@angular/forms';
import { BenefitIctComponent } from './benefit-ict/benefit-ict.component';

@NgModule({
  imports: [
    CommonModule,
    BenefitsRoutingModule,
    FormsModule
  ],
  declarations: [
    BenefitsComponent, BenefitsNavComponent, BenefitsOverviewComponent, BenefitCashComponent, BenefitIctComponent
  ],
  providers: [

  ]
})
export class BenefitsModule {
}
