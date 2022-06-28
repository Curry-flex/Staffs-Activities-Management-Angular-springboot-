import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { RegisterPayload } from '../RegisterPayload';
import { SupportServiceService } from '../support-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerEntry: FormGroup
   registerPayload: RegisterPayload
  status_val:number=0;
  roles:any=[]
  support_from:any=[{name:"AZANIA"},{name:"PBZ"},{name:"DCB"}]
 constructor(private formbuilder: FormBuilder ,private router: Router,
  private supportService: SupportServiceService,
  private toast: NgToastService,
  private userService: UserService,

  ) { 
  this. registerEntry =this.formbuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      role_id:0,
  })
  this.registerPayload={
   userName:'',
   userFirstName:'',
   userLastName:'',
   userPassword:'',
   role_id:0,

  }

 }

 ngOnInit(): void {
 
   this.userService.getRoles().subscribe((res)=>{
    this.roles=res
    
}, error =>  this.toast.error({detail:error,summary:"", duration:5000}))
 }

 onSubmit()
 {
   this.registerPayload!.userFirstName =this. registerEntry.get("first_name")?.value;
   this.registerPayload!.userLastName= this. registerEntry.get("last_name")?.value;
   this.registerPayload!.userName=this. registerEntry.get("username")?.value;
   this.registerPayload!.role_id= parseInt(this. registerEntry.get("role_id").value);
   this.registerPayload.userPassword=this.registerEntry.get("password").value
     
   console.log(this.registerPayload)
   this.userService.addNewUser(this.registerPayload).subscribe((res)=>{
     this.toast.success({detail:"Record added successfully", summary:"user record",duration:5000})

     this.registerEntry.get("first_name").reset()
     this.registerEntry.get("last_name").reset()
     this.registerEntry.get("username").reset()
     this.registerEntry.get("password").reset()
     this.registerEntry.get("role_id").reset()
   }, error =>this.toast.error({detail:error, summary:"",duration:5000}) )
    
 }

 onCheckChange(event: Event)

 {
   const ischecked = (<HTMLInputElement>event.target).checked
   
    if(ischecked)
    {
     this.status_val=1;
    }
    else{
     this.status_val=0;
    }
 }

}
