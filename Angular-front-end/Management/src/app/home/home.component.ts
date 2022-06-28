import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SupportServiceService } from '../support-service.service';
import { SupportPayload } from './SupportPayload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   supportEntry: FormGroup
   supportPayload: SupportPayload
   status_val:number=0;
   support_from:any=[{name:"AZANIA"},{name:"PBZ"},{name:"DCB"}]
  constructor(private formbuilder: FormBuilder ,private router: Router,private supportService: SupportServiceService,private toast: NgToastService) { 
   this.supportEntry =this.formbuilder.group({
       support_title:['',Validators.required],
       support_from:['',Validators.required],
       description:'',
       status:0,
   })
   this.supportPayload={
    support_title:'',
    support_from:'',
    description:'',
    status:0,

   }

  }

  ngOnInit(): void {
    console.log("all data from list of support")
  }

  onSubmit()
  {
    this.supportPayload!.support_title =this.supportEntry.get("support_title")?.value;
    this.supportPayload!.support_from= this.supportEntry.get("support_from")?.value;
    this.supportPayload!.description=this.supportEntry.get("description")?.value;
    this.supportPayload!.status=this.status_val;
      
    this.supportService.addSupport(this.supportPayload).subscribe((res)=>{
          this.router.navigateByUrl("dashboard/view-support")
          this.toast.success({detail:"Record added successfully",summary:"Support record", duration:5000})
           
    }, error =>  this.toast.error({detail:error,summary:"", duration:5000}))
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
