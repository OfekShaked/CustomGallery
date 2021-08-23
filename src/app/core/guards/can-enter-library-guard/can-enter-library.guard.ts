import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from '../../services/error-handling-service/error-handler.service';
import { LibraryService } from '../../services/library-service/library.service';

@Injectable({
  providedIn: 'root'
})
export class CanEnterLibraryGuard implements CanActivate {

  constructor(private libraryService: LibraryService, private router: Router, private errorHandlerService: ErrorHandlerService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      if (this.libraryService.isLibraryCreated) {
        return true;
      } else {
        this.libraryService.checkIfLibraryCreated();
        this.router.navigateByUrl("");
        return false;
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
      return false;
    }
  }

}
