
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from '../stats.service';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   username:string
   userCount:any=0
   projectCount:any=0
   completedProjectCount:any=0
   supportCount:any=0
  constructor(private userAuthService: UserAuthService, private router: Router,private statsService: StatsService) { }

  ngOnInit(): void {
    //window.location.reload()
    this.username=localStorage.getItem("username")
    this.statsService.getUserCount().subscribe((res)=>{
      this.userCount=res
     
    })

    this.statsService.getProjectsCount().subscribe((res)=>{
      this.projectCount=res
    })

    this.statsService.getCompletedProjectsCount().subscribe((res)=>{
      this.completedProjectCount=res
    })

     this.statsService.getSupportCount().subscribe((res)=>{
      this.supportCount=res
     })

  }

  logout()
  {
       this.userAuthService.logout();
       this.router.navigateByUrl("");
  }
}
