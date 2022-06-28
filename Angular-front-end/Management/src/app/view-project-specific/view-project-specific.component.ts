import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-view-project-specific',
  templateUrl: './view-project-specific.component.html',
  styleUrls: ['./view-project-specific.component.css']
})
export class ViewProjectSpecificComponent implements OnInit {
  
  specificProjects:any
  id:any
  project_title: any;
 
  p:number=1
  constructor(private projectService: ProjectService,private userAuthService: UserAuthService,private route: Router) { }

  ngOnInit(): void {
    this.id=this.userAuthService.getUserID()
    this.projectService.getUserProjects(this.id).subscribe((res)=>{
      this.specificProjects=res
      console.log(res)
    },error => console.log(error))
  }

   updateProject(id:number)
   {
      this.route.navigate(['dashboard/update-project',id])
   }

   search()
   {
    if(this.project_title == "")
    {
      this.ngOnInit();
    }
    else{
       this.specificProjects = this.specificProjects.filter((res)=>{
        
        return res.project_title.toLocaleLowerCase().match(this.project_title.toLocaleLowerCase());

       })
    }
   }
}
