import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean;

  constructor(private router:Router,private authService:AuthService,private route:ActivatedRoute) { }

  signIn(credentials){
    this.authService.login(credentials)
      .subscribe(result=>{
         if(result){
           let redirectUrl = this.route.snapshot.queryParamMap.get('returnUrl');
           console.log("redirect url: "+redirectUrl);
          this.router.navigate([redirectUrl || '/']);
         }
          else
            this.invalidLogin = true;  
      });
  }

  ngOnInit() {
  }

}
