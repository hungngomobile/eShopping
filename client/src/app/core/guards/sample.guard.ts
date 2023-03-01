// import { inject, Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
// import { map, Observable } from 'rxjs';
// import { AccountService } from 'src/app/account/account.service';

// @Injectable({
//   providedIn: 'root'
// })
// // export class SampleGuard implements CanActivateFn {
// //   canActivate(
// //     route: ActivatedRouteSnapshot,
// //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// //     return true;
// //   }

// // }

// @Injectable()
// export class PermissionsService {
//   constructor(public accountService: AccountService){}
//   canActivate(accountService: AccountService, state: RouterStateSnapshot, router: Router): boolean {
//     router.navigate(['/account/login'], {queryParams:{returnUrl: state.url}});
//     return false;
//   }
//   canMatch(currentUser: AccountService): boolean {
//     return true;
//   }
// }
// const canActivateTeam: CanActivateFn =
//     (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, router: Router, accountService: AccountService) => {
//       // return inject(PermissionsService).canActivate(inject(AccountService).currentUser$.pipe(
//       //   map(auth =>{
//       //     if(auth){
//       //       console.log('auth');
//       //       console.log(auth);
//       //       return true;
//       //     }
//       //     else{
//       //       router.navigate(['/account/login'], {queryParams:{returnUrl: state.url}});
//       //       return false;
//       //     }
//       //   })
//       // )
//       return accountService.currentUser$.pipe(
//         map(auth =>{
//           if(auth){
//             console.log('auth');
//             console.log(auth);
//             return true;
//           }
//           else{
//             router.navigate(['/account/login'], {queryParams:{returnUrl: state.url}});
//             return false;
//           }
//         })
//       //return inject(PermissionsService).canActivate(inject(AccountService), route.params.id);
//       );
//     }

