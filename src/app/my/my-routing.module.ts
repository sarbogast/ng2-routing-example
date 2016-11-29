import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyComponent} from './my.component';
import {AuthGuard} from '../shared/auth-guard';

const myRoutes: Routes = [{
  path: '', component: MyComponent, canActivate: [AuthGuard], children: [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    { path: 'benefits', loadChildren: 'app/my/benefits/benefits.module#BenefitsModule', canActivateChild: [AuthGuard]}
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
