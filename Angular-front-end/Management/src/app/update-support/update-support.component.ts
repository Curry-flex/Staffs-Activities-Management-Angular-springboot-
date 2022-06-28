import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupportPayload } from '../home/SupportPayload';
import { SupportServiceService } from '../support-service.service';

@Component({
  selector: 'app-update-support',
  templateUrl: './update-support.component.html',
  styleUrls: ['./update-support.component.css']
})
export class UpdateSupportComponent implements OnInit {
  status_val:number=0;
  id:number;
  support:SupportPayload = new SupportPayload()
  constructor(private formbuilder: FormBuilder ,private router: Router,private supportService: SupportServiceService,private activatedRoute:ActivatedRoute) { 
     
 
   }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']
    this.supportService.getSupportByID(this.id).subscribe((res)=>{
      this.support=res;
      console.log(res)
    })
  }

  onSubmit()
  {

          this.support.status= this.status_val;
          this.supportService.updateSupport(this.id,this.support).subscribe((res)=>{
          this.router.navigateByUrl("dashboard/view-support")
           
    }, error => console.log("failed"))
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
