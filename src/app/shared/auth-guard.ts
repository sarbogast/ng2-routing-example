import {
    CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route,
    CanActivateChild
} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {

    constructor() {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }

    canLoad(route: Route): Observable<boolean> | boolean {
        return true
    }
}
