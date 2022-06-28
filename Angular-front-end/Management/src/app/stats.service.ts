import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userCount } from './UserCount';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
    userCount:number
      private completed_projectUrl = "http://localhost:8080/api/realbus/stats/completed-projects"
  private userUrl = "http://localhost:8080/api/realbus/stats/userCount"
  private projectUrl = "http://localhost:8080/api/realbus/stats/projects"
  private supportUrl = "http://localhost:8080/api/realbus/stats/supports"
  private supportCountUrl = "http://localhost:8080/api/realbus/supportCount"
  private todaySupportsUrl = "http://localhost:8080/api/realbus/todaySupports"
  constructor(private httpclient : HttpClient) { }



  getProjectsCount()
  {
    return this.httpclient.get(this.projectUrl)
  }

  getCompletedProjectsCount()
  {
    return this.httpclient.get(this.completed_projectUrl)
  }

  getUserCount(): Observable<userCount>
  {
    
    return this.httpclient.get<userCount>(this.userUrl)
  }

  getSupportCount()
  {
    return this.httpclient.get(this.supportUrl)
  }

  getSupportByBankCount(bank:any)
  {
      return this.httpclient.post(this.supportCountUrl,bank)
  }

  getTodaySupports(bank:any)
  {
    return this.httpclient.post(this.todaySupportsUrl, bank)
  }
}
