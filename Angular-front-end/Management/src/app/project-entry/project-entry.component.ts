import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProjectService } from '../project.service';
import { ProjectPayload } from '../ProjectPayload';
import { ScheduleService } from '../schedule.service';
import { UserAuthService } from '../user-auth.service';
import { UserService } from '../user.service';
import { UsersPayload } from '../UsersPayload';


@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css']
})
export class ProjectEntryComponent implements OnInit {

  projectEntry: FormGroup;
  projectPyaload:ProjectPayload;
  status_val:number =0
  fiterAdmin: any;
  users: any;
  assigned_username:any
  username:any
  id:number=0
 
  constructor(private formBuilder: FormBuilder,private projectService: ProjectService,
    private route: Router, 
    private scheduleSeervice: ScheduleService,
    private userAuthService: UserAuthService,
    private toast: NgToastService,
    private userService:UserService
    ) { 
      this.projectEntry =this.formBuilder.group({
          project_title:['',Validators.required],
          assigned_to:['',Validators.required],
          start_date:['',Validators.required],
          end_date:['',Validators.required],
          description:'',
          status:0
      })
      this.projectPyaload={
        id:0,
        project_title:'',
        assigned_to:'',
        start_date:'',
        end_date:'',
        description:'',
        status:0,
        user_id_fk:1,
        created_at:''
      }
  }

  ngOnInit(): void {
    this.getApplicationUsers()
   
  }
  


  onsubmit()
  {

    
     this.projectPyaload.project_title = this.projectEntry.get("project_title").value;
     this.projectPyaload.assigned_to= this.assigned_username.userName;
     this.projectPyaload.start_date=this.projectEntry.get("start_date").value;
     this.projectPyaload.end_date=this.projectEntry.get("end_date").value;
     this.projectPyaload.description=this.projectEntry.get("description").value;
     this.projectPyaload.user_id_fk=this.projectEntry.get("assigned_to").value;
     this.projectPyaload.status=this.status_val;
     this.projectService.addProject(this.projectPyaload).subscribe((res)=>{
        //this.route.navigateByUrl()
        this.toast.success({detail:"Record added successfully",summary:"Project record", duration:5000})
         this.projectEntry.get("project_title").reset()
         this.projectEntry.get("assigned_to").reset()
         this.projectEntry.get("start_date").reset()
         this.projectEntry.get("end_date").reset()
         this.projectEntry.get("description").reset()

     }, error => this.toast.error({detail:error,summary:"", duration:5000})
     )
  }

  onCheckChange(event:Event)
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
  getApplicationUsers()
  {
    this.scheduleSeervice.getUsers().subscribe((res)=>{
     
      this.fiterAdmin=res
   this.users  =  this.fiterAdmin.filter((res)=>res.userName != 'admin')
    })

    
  }

  onChange(newvalue)
  {
  
     this.id=newvalue 
     this.userService.getUserByID(this.id ).subscribe((res)=>{
      this.assigned_username=res
      console.log(res)
    })
  }

}
