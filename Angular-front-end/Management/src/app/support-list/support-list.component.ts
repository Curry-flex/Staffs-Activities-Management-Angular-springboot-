import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupportPayload } from '../home/SupportPayload';
import { SupportServiceService } from '../support-service.service';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.css']
})
export class SupportListComponent implements OnInit {

  p:number =1;
  supportList: SupportPayload[] =[];
  support_from:any;
  status: number=1;
  index: number=0;
  name="to clear control number so as to allow pending payments from different channels per location above"
  constructor(private supportService: SupportServiceService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getSupport();
    console.log(this.getSupport())
  }
   
  getSupport(){
    this.supportService.getAllSupport().subscribe((res)=>{
      this.supportList =res;
      console.log(res)
    })
  }

  Search()
  {
    if(this.support_from == "")
    {
      this.ngOnInit();
    }
    else{
       this.supportList = this.supportList.filter((res)=>{
        console.log(res)
        return res.support_from.toLocaleLowerCase().match(this.support_from.toLocaleLowerCase())
       })
    }
  }

  deleteSupport(id:number)
  {
    this.supportService.deleteSupport(id).subscribe((res)=>{
       console.log(res)
       this.getSupport()
    });
  }

  supportDetails(id:number){
    this.router.navigate(['dashboard/support-details',id])
  }
  updateSupport(id:number)
  {
     this.router.navigate(['dashboard/update-support',id])
  }

}
