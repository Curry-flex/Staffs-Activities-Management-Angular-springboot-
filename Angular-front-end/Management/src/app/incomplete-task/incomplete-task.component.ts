import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-incomplete-task',
  templateUrl: './incomplete-task.component.html',
  styleUrls: ['./incomplete-task.component.css']
})
export class IncompleteTaskComponent implements OnInit {

  schedule: any;
  tempo:any
  task:any;
  p:number=1
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.getAllSchedule().subscribe((res)=>{
        this.tempo=res
        console.log(res)
     this.schedule =this.tempo.filter((res)=> res.status !=1)
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
