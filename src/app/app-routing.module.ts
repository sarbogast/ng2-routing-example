import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './shared/auth-guard';

const routes: Routes = [
    { path: '', loadChildren: 'app/marketing/marketing.module#MarketingModule', pathMatch: 'full'},
    { path: 'my', loadChildren: 'app/my/my.module#MyModule', canLoad: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
