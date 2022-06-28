import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { ProjectPayload } from '../ProjectPayload';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  id:number
  status_val:number=0
  
  projectPayload:ProjectPayload =new ProjectPayload()
  constructor(private route: ActivatedRoute,private projectService: ProjectService,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.projectService.getProjectByID(this.id).subscribe((res)=>{
      this.projectPayload=res;
    })
  }

  onsubmit()
  {
    this.projectPayload.status= this.status_val;
    this.projectService.updateProject(this.id,this.projectPayload).subscribe((res)=>{
       this.router.navigateByUrl('dashboard/assigned-project')
    })
  }

  onCheckChange(event: Event)
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

}
