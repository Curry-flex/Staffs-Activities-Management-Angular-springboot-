import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupportPayload } from '../home/SupportPayload';
import { SupportServiceService } from '../support-service.service';

@Component({
  selector: 'app-get-support-details',
  templateUrl: './get-support-details.component.html',
  styleUrls: ['./get-support-details.component.css']
})
export class GetSupportDetailsComponent implements OnInit {
  
  id:number;
  support:SupportPayload;
  constructor(private supportService: SupportServiceService,private activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params['id'];
    this.support = new SupportPayload();
    this.supportService.getSupportByID(this.id).subscribe((res)=>{
      this.support=res;
    })
  }

}
