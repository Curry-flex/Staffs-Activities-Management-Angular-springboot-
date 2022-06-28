import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchedulePayload } from './SchedulePayload';
import { UsersPayload } from './UsersPayload';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
   private baseUrl="http://localhost:8080/api/realbus/users"
   private baseUrl02="http://localhost:8080/api/realbus/schedule/"
   private baseUrl03="http://localhost:8080/api/realbus/schedule/update/"
  constructor(private httpclient: HttpClient) { }

  getUsers():Observable<UsersPayload[]>
  {
    return this.httpclient.get<UsersPayload[]>(this.baseUrl);
  }
  addSchedule(schedulePayload:SchedulePayload)
  {
    return this.httpclient.post(this.baseUrl02,schedulePayload)
  }

  getUserSchedules(id:number)
  {
    return this.httpclient.get(this.baseUrl02 +id)
  }

  getScheduleByID(id:number)
  {
    return this.httpclient.get(this.baseUrl03 +id)
  }

  updateSchedule(id:number,schedule: SchedulePayload)
  {
    return this.httpclient.put(this.baseUrl03 +id,schedule)
  }

  getAllSchedule()
  {
    return this.httpclient.get(this.baseUrl02)
  }
}
