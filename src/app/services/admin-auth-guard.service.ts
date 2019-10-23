import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router: Router) { }

  canActivate(){
    let user = this.authService.currentUser;
    if(user && user.admin) return true;
    this.router.navigate(['/no-access']);
    return false;
  }

}
