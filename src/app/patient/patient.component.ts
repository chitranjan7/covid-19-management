import { Component, OnInit } from '@angular/core';
import {PatientService} from 'src/app/services/patient.service'
import { Router,NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
 export class PatientComponent implements OnInit {

  displayedColumns: string[] = ['id','pName','dob','gender','fName','bGroup','address','number','hospitalName','wardNo','covidTesting','date'];
  dataSource = [];
  constructor(private patientService: PatientService, private router: Router) { }
  
  ngOnInit(): void {
    this.patientService.getpatientList().subscribe(patientList => {
      this.dataSource=patientList
    })
  
  }

  editPatient(data) : void {
    console.log("edit patient",data)
        this.router.navigate(['/patient/edit'])
  }
  
  } 


 
