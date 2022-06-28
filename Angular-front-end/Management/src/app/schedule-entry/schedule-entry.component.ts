import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ScheduleService } from '../schedule.service';
import { SchedulePayload } from '../SchedulePayload';
import { UserService } from '../user.service';
import { UsersPayload } from '../UsersPayload';


@Component({
  selector: 'app-schedule-entry',
  templateUrl: './schedule-entry.component.html',
  styleUrls: ['./schedule-entry.component.css']
})
export class ScheduleEntryComponent implements OnInit {

  scheduleEntry:FormGroup;
  users:UsersPayload[];
  fiterAdmin: UsersPayload[]
  schedulePayload:SchedulePayload;
  schedule_status:number=0
  assigned_username:any
  id:number=0

  constructor(private scheduleServuce: ScheduleService,private formBuilder:FormBuilder,private toast: NgToastService,private userService: UserService) { 
    this.scheduleEntry=this.formBuilder.group({
      task:['',Validators.required],
      start_date:['',Validators.required],
      end_date:['',Validators.required],
      assigned_to:['',Validators.required],
      description:'',
      status:this.schedule_status
    })
    
    this.schedulePayload={
      task:'',
      start_date:'',
      assigned_to:'',
      end_date:'',
      user_id_fk:1,
      description:'',
      status:this.schedule_status
    }
  }

  ngOnInit(): void {
      this.getApplicationUsers()
      
  }

  getApplicationUsers()
  {
    this.scheduleServuce.getUsers().subscribe((res)=>{
      this.fiterAdmin=res
   this.users  =  this.fiterAdmin.filter((res)=>res.userName != 'admin')
      console.log(res)
    })
  }

  onSubmit(){
    this.schedulePayload.task= this.scheduleEntry.get("task").value;
    this.schedulePayload.assigned_to= this.assigned_username.userName
    this.schedulePayload.start_date= this.scheduleEntry.get("start_date").value;
    this.schedulePayload.end_date= this.scheduleEntry.get("end_date").value;
    this.schedulePayload.description= this.scheduleEntry.get("description").value;
    this.schedulePayload.user_id_fk= this.scheduleEntry.get("assigned_to").value;
    this.schedulePayload.status=this.schedule_status
    
     console.log(this.schedulePayload)
    this.scheduleServuce.addSchedule(this.schedulePayload).subscribe((res)=>{
      this.toast.success({detail:"Record added successfully", summary:"schedule record", duration:5000})
      this.scheduleEntry.get("task").reset()
      this.scheduleEntry.get("start_date").reset()
      this.scheduleEntry.get("end_date").reset()
      this.scheduleEntry.get("assigned_to").reset()
      this.scheduleEntry.get("description").reset()
    },error => this.toast.error({detail:error, summary:"", duration:5000}))
  }

  onChange(newvalue)
  {
  
     this.id=newvalue 
     this.userService.getUserByID(this.id ).subscribe((res)=>{
      this.assigned_username=res
      //console.log(res)
    })
  }

}
