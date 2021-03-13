import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {PatientService} from 'src/app/services/patient.service'

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  patientForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private patientService: PatientService) { }

  ngOnInit(): void {
    this.initializeForm({});
    this.patientService.getPatient(1).subscribe(patientData =>{
      this.initializeForm(patientData);
    })

  }
  submit(): void {
    console.log("patientform",this.patientForm)
}
initializeForm(patientData): void {
  this.patientForm = this.formBuilder.group({
    id: [''||patientData.id],
    pName: [''||patientData.pName],
    dob: [''||patientData.dob],
    gender: [''||patientData.gender],
    fName: [''||patientData.fName],
    bGroup: [''||patientData.bGroup],
    address: [''||patientData.address],
    contactNo: [''||patientData.contactNo],
    hospitalName: [''||patientData.hospitalName],
    wardNo: [''||patientData.wardNo],
    covidTesting: [''||patientData.covidTesting],
    date: [''||patientData.date],
  })
}
}
