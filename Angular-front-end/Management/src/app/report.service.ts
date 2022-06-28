import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportDatePayload } from './ReportDatesPayload';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = "http://localhost:8080/api/realbus/report/"
  constructor(private httpclient: HttpClient) { }


  getSupportReports(dates:ReportDatePayload)
  {
    return this.httpclient.post(this.baseUrl,dates)
  }
}
