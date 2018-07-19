import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import { map } from 'rxjs/operators'
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user$.pipe(map(data => {
      if (data) { return true; }
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }));
  }
}
