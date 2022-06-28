import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {
  
  userSchedule:any=[]
  p:number=1;
  id:number
  constructor(private scheduleService: ScheduleService,private userAuthService: UserAuthService,private route: Router) { }

  ngOnInit(): void {
  
    this.getUserSpecificSchedule()
  }

  getUserSpecificSchedule()
  {
     this.id=this.userAuthService.getUserID()
    this.scheduleService.getUserSchedules(this.id).subscribe((res)=>{
      this.userSchedule=res
     
    })
   // console.log("okay")
  }
  updateSchedule(id:number)
  {
      this.route.navigate(['dashboard/view-schedule',id])
  }

}
