import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from 'src/app/services/report.service'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
 export class ReportComponent implements OnInit {
  patientForm: FormGroup;
  displayedColumns: string[] = ['id','pName','dob','gender','fName','bGroup','address','number','hospitalName','wardNo','covidTesting','date'];
  dataSource = [];
  
  constructor(private formBuilder: FormBuilder, private reportService: ReportService) { }
  
  ngOnInit(): void {
    this.initializeForm();
    this.reportService.getreportList().subscribe(reportList => {
      this.dataSource = reportList;
    })
  }
  initializeForm(): void {
    this.patientForm = this.formBuilder.group({
      admit: [''],
      positive: [false],
      negative: [false],
      homeQuarantine: [false],
      death: [false],
         })
  }
  toggleCheckBox(fieldName,status): void{ 
    console.log("positive",fieldName,status) 
    this.patientForm.get(fieldName).setValue(status)
    console.log(this.patientForm)
  } 
  
  } 