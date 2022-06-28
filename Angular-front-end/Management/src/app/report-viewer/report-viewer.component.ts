import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReportService } from '../report.service';
import { ReportDatePayload } from '../ReportDatesPayload';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-report-viewer',
  templateUrl: './report-viewer.component.html',
  styleUrls: ['./report-viewer.component.css']
})
export class ReportViewerComponent implements OnInit {
  reportData: FormGroup
  reportDate: ReportDatePayload
  tem_array:any
  responseData:any
  //stats count
  pbz_count:any=0
  azania_count:any=0
  dcb_count:any=0
 
  //solved and unsolved stats 
  PbzsolvedSupport:number
  PbznotSolvedSupport:number

   AzaniasolvedSupport:number
   AzanianotSolvedSupport:number

   DcbsolvedSupport:number
   DcbnotSolvedSupport:number

   //Today support stats
   pbz_today:any=0
   azania_today:any=0
   dcb_today:any=0
  constructor(private reportService: ReportService,private formBuilder: FormBuilder, private statsService: StatsService) { }

  ngOnInit(): void {
     this.reportData=this.formBuilder.group({
       start_date:['', Validators.required],
       end_date:['',Validators.required]
     })

     this.reportDate={
       start_date:'',
       end_date:''
     }
     //Total support coount
    this.statsService.getSupportByBankCount({bank:"PBZ"}).subscribe((res)=>{
      this.pbz_count=res
    })

    this.statsService.getSupportByBankCount({bank:"AZANIA"}).subscribe((res)=>{
      this.azania_count=res
    })

    this.statsService.getSupportByBankCount({bank:"DCB"}).subscribe((res)=>{
      this.dcb_count=res
    })


    //Today support count
    this.statsService.getTodaySupports({bank:"PBZ"}).subscribe((res)=>{
      this.pbz_today=res
    })

    this.statsService.getTodaySupports({bank:"AZANIA"}).subscribe((res)=>{
      this.azania_today=res
    })

    this.statsService.getTodaySupports({bank:"DCB"}).subscribe((res)=>{
      this.dcb_today=res
    })
  }
 
  onSubmit()
  {

      this.reportDate.start_date= this.reportData.get("start_date").value
      this.reportDate.end_date=this.reportData.get("end_date").value
      this.reportService.getSupportReports(this.reportDate).subscribe((res)=>{
        console.log(res)
        this.responseData=res
        //PBZ
       this.PbzsolvedSupport= this.responseData.filter((res)=> res.status == 1 && res.support_from == "PBZ").length
       this.PbznotSolvedSupport= this.responseData.filter((res)=> res.status == 0 && res.support_from == "PBZ").length

      //AZANIA
      this.AzaniasolvedSupport= this.responseData.filter((res)=> res.status == 1 && res.support_from == "AZANIA").length
       this.AzanianotSolvedSupport= this.responseData.filter((res)=> res.status == 0 && res.support_from == "AZANIA").length

       //DCB
       this.DcbsolvedSupport= this.responseData.filter((res)=> res.status == 1 && res.support_from == "DCB").length
       this.DcbnotSolvedSupport= this.responseData.filter((res)=> res.status == 0 && res.support_from == "DCB").length


  
      },error =>console.log(error))
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          title{
            color:red;
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
}
