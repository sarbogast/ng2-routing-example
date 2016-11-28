import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MarketingComponent} from './marketing.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FeaturesComponent} from './features/features.component';
import {MarketingRoutingModule} from './marketing-routing.module';

@NgModule({
  declarations: [
    MarketingComponent,
    HeaderComponent,
    HomeComponent,
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MarketingRoutingModule
  ]
})
export class MarketingModule {
}
