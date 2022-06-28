import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  scheduleServuce: any;
  fiterAdmin: any;
  users: any;
  p:number=1

  constructor(private scheduleService: ScheduleService,private userService: UserService) { }

  ngOnInit(): void {
    this.getAllApplicationUsers()
  }
  
  getAllApplicationUsers()
  {
    this.scheduleService.getUsers().subscribe((res)=>{
      this.fiterAdmin=res
   this.users  =  this.fiterAdmin.filter((res)=>res.userName != 'admin')
    
    })
  }

  deleteUser(id:number)
  {
     this.userService.deleteUser(id).subscribe((res)=>{
      this.getAllApplicationUsers()
     })
  }
}
