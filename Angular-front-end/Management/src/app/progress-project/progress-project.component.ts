import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { ProjectPayload } from '../ProjectPayload';

@Component({
  selector: 'app-progress-project',
  templateUrl: './progress-project.component.html',
  styleUrls: ['./progress-project.component.css']
})
export class ProgressProjectComponent implements OnInit {
   progressProject: ProjectPayload[]=[];
   project_title:any
   temp_array:ProjectPayload[]=[]
   p:number=1;
  constructor(private projectService: ProjectService,private router:Router) { }

  ngOnInit(): void {
        this.getProject()
  }

   getProject()
   {
      this.projectService.getProjects().subscribe((res)=>{
        this.temp_array=res
       this.progressProject=  this.temp_array.filter((data=>data.status !=1))
       console.log(res)
      
   })
  }

   projectDetails(id:number)
   {

   }

   updateProject(id:number)
   {
      this.router.navigate(['dashboard/update-project',id])
   }

   deleteProject(id:number)
   {
      this.projectService.deleteProject(id).subscribe((res)=>{
            this.getProject()
      })
   }
   search()
   {
    if(this.project_title == "")
    {
      this.ngOnInit();
    }
    else{
       this.progressProject = this.progressProject.filter((res)=>{
        
        return res.project_title.toLocaleLowerCase().match(this.project_title.toLocaleLowerCase());

       })
    }
   }
}
