import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserAuthService } from '../user-auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private userAuthService:UserAuthService,private router: Router,private toast: NgToastService) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm)
  {
     this.userService.login(loginForm.value).subscribe((res:any)=>{
   
     // this.toast.error({detail:"Incorrect username or password", summary:'correct username or password', duration:5000})
          this.userAuthService.setToken(res.jwtToken)
          this.userAuthService.setRoles(res.user.role)
          this.userAuthService.setUsername(res.user.userName)
          this.userAuthService.setUserID(res.user.id)
          this.router.navigate(['dashboard']).then(()=>{
            window.location.reload()
          })

           
          this.ngOnInit()
        
     },error =>  this.toast.error({detail:"Incorrect username or password", summary:'Enter correct username and password', duration:5000}))

 
  }

 

}
