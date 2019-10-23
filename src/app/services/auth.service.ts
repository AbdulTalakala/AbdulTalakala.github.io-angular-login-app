import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http) { }
  
  login(credentials){
    return this.http.post('/api/authenticate',JSON.stringify(credentials)).pipe(
      map(result=>{
        console.log(result.json());
        let response = result.json();
        if(response && response.token){
          localStorage.setItem("token",response.token);
          return true;
        }
        return false;
      })
    );
  }

  logout(){
    localStorage.removeItem("token");
  }

  isLoggedIn(){
    return tokenNotExpired();
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;
    return new JwtHelper().decodeToken(token);
  }


}
