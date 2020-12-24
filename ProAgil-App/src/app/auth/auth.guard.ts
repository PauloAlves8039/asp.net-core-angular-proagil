/**
 * @file auth.guard.ts
 * @author: Paulo Alves
 * @description: responsável pela atribuição das propriedades e funcionalidades componente Guard.
 * @version 1.0.1 (23/12/2020)
 */

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
