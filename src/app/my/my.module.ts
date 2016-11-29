import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {DashboardComponent} from './dashboard/dashboard.component';
import {MyHeaderComponent} from './my-header/my-header.component';
import {MyComponent} from './my.component';
import {MyRoutingModule} from './my-routing.module';

@NgModule({
  declarations: [
    MyComponent,
    MyHeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MyRoutingModule
  ],
  providers: [
  ]
})
export class MyModule {}
