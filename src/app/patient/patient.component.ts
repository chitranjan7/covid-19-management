import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
 export class PatientComponent implements OnInit {
  patientForm: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  submit() : void{
    console.log("patientForm",this.patientForm)
   }
    initializeForm(): void {
    this.patientForm = this.formBuilder.group({
      id: [''],
      pName: [''],
      dob: [''],
      gender: [''],
      fName: [''],
      bGroup: [''],
      address: [''],
      contactNo: [''],
      hospitalName: [''],
      wardNo: [''],
      covidTesting: [''],
      date: [''],
  })
  
  
  
  }
  
  }

 
