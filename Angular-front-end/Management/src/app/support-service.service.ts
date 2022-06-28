import { Injectable } from '@angular/core';
import { SupportPayload } from './home/SupportPayload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SupportServiceService {
  private baseurl ="http://localhost:8080/api/realbus/"
  constructor(private httpclient: HttpClient) { }

  addSupport(supportPayload: SupportPayload):Observable<any>
  {
    return this.httpclient.post(this.baseurl,supportPayload);  
  }

  getAllSupport():Observable<SupportPayload[]>
  {
       return this.httpclient.get<any>(this.baseurl)
  }
  deleteSupport(id:number)
  {
    return this.httpclient.delete(this.baseurl + id);
  }

  getSupportByID(id:number)
  {
    return this.httpclient.get(this.baseurl + id);
  }

  updateSupport(id:number,supportPayload:SupportPayload)
  {
    return this.httpclient.put(this.baseurl+id,supportPayload);
  }
}
