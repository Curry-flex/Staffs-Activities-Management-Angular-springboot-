import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectPayload } from './ProjectPayload';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
   private baseUrl = "http://localhost:8080/api/realbus/projects/"
   private baseUrl01 = "http://localhost:8080/api/realbus/projects/specific/"
  constructor(private httpclient: HttpClient) { }

  addProject(projectPayload:ProjectPayload)
  {
    return this.httpclient.post(this.baseUrl,projectPayload)
  }

  getProjects():Observable<ProjectPayload[]>
  {
    return this.httpclient.get<ProjectPayload[]>(this.baseUrl);
  }
  
  deleteProject(id:number)
  {
    return this.httpclient.delete(this.baseUrl + id)
  }
  
  getProjectByID(id:number)
  {
    return this.httpclient.get(this.baseUrl + id)
  }

  updateProject(id:number,projectPayload:ProjectPayload)
  {
    return this.httpclient.put(this.baseUrl + id ,projectPayload)
  }
  
  getUserProjects(id:number)
  {
        return this.httpclient.get(this.baseUrl01 + id)
  }
}
