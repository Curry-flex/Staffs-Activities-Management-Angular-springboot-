import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {
  schedule: any;
  tempo:any
  task:any;
  p:number=1
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.getAllSchedule().subscribe((res)=>{
        this.tempo=res
     this.schedule =this.tempo.filter((res)=> res.status !=0)
    })
  }

  search()
  {
   if(this.task == "")
   {
     this.ngOnInit();
   }
   else{
      this.schedule= this.schedule.filter((res)=>{
       
       return res.task.toLocaleLowerCase().match(this.task.toLocaleLowerCase());

      })
   }
  }

}
