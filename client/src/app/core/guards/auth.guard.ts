import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private accountService: AccountService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      //we are using pipes because our route guards will auto subscribe/un-subscribe from our observable
    return this.accountService.currentUser$.pipe(
      map(auth =>{
        if(auth) return true;
        else{
          this.router.navigate(['/account/login'], {queryParams:{returnUrl: state.url}});
          return false;
        }
      })
    );
  }


  //   canActivate: CanActivateFn = (
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ) => {
  //   const authService = inject(AccountService);
  //   const router = inject(Router);

  //   return this.accountService.currentUser$().pipe(
  //     map(() => true),
  //     catchError(() => {
  //       router.navigate(['route-to-fallback-page']);
  //       return of(false);
  //     })
  //   );
  // };

  // export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);


}
