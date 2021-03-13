import { Component, OnInit } from '@angular/core';
import {PatientService} from 'src/app/services/patient.service'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
 export class PatientComponent implements OnInit {

  displayedColumns: string[] = ['id','pName','dob','gender','fName','bGroup','address','number','hospitalName','wardNo','covidTesting','date'];
  dataSource = [];
  constructor(private patientService: PatientService) { }
  
  ngOnInit(): void {
    this.patientService.getpatientList().subscribe(patientList => {
      this.dataSource=patientList
    })
  
  }
  
  } 


 
