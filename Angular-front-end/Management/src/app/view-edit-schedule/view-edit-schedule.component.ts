import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';
import { SchedulePayload } from '../SchedulePayload';
import { UsersPayload } from '../UsersPayload';

@Component({
  selector: 'app-view-edit-schedule',
  templateUrl: './view-edit-schedule.component.html',
  styleUrls: ['./view-edit-schedule.component.css']
})
export class ViewEditScheduleComponent implements OnInit {

  id:number
 // schedule: SchedulePayload = new SchedulePayload()
  schedule:any
  status_val:number=0
  constructor(private scheduleServuce: ScheduleService,private activatedRoute: ActivatedRoute,private route: Router) { 
 
  }

  ngOnInit(): void {
     this.id=this.activatedRoute.snapshot.params['id'] 
     this.scheduleServuce.getScheduleByID(this.id).subscribe((res)=>{
      this.schedule=res
     })
      
  }



  onSubmit(){
    this.schedule.status=this.status_val
    this.scheduleServuce.updateSchedule(this.id,this.schedule).subscribe((res)=>{
      this.route.navigateByUrl('dashboard/view-schedule')
    })

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
