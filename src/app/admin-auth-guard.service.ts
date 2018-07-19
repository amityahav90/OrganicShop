import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/index";
import {UserService} from "./user.service";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .pipe(map(appUser => appUser.isAdmin));
  }
}
