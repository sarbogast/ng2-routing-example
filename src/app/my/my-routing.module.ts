import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyComponent} from './my.component';
import {BenefitsModule} from './benefits/benefits.module';
import {AuthGuard} from '../shared/auth-guard';

const myRoutes: Routes = [{
  path: '', component: MyComponent, canActivate: [AuthGuard], children: [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    {path: 'benefits', loadChildren: () => BenefitsModule},
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyRoutingModule {
}
