import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  patientForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  submit(): void {
    console.log("patientform",this.patientForm)
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
