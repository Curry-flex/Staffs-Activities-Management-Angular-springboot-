import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ProjectPayload } from '../ProjectPayload';

@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {
  progressProject: ProjectPayload[]=[];
  project_title:any
  temp_array:ProjectPayload[]=[]
  p:number=1;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProject()
  }

  getProject()
  {
     this.projectService.getProjects().subscribe((res)=>{
       this.temp_array=res
      this.progressProject=  this.temp_array.filter((data=>data.status !=0))
     
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
