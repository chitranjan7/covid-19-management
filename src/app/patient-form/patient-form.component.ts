import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {PatientService} from 'src/app/services/patient.service'
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  patientForm: FormGroup;
  formType: string;
  constructor(private formBuilder: FormBuilder,private patientService: PatientService, private router: Router) {
    router.events
          .subscribe(event => 
           {
             if(event instanceof NavigationEnd){
               const path= event.url.split('/');
               this.formType= path[path.length-1]
                  
              }
              
           });

   }

  ngOnInit(): void {
    this.initializeForm({});
    this.patientService.getPatient(1).subscribe(patientData =>{
      this.initializeForm(patientData);
    })

  }
  submit(): void {
    console.log("patientform",this.patientForm)
    if(this.formType=='edit') {
      this.patientService.updatePatient(1,this.patientForm.value).subscribe(result =>{
        console.log("updated patient")
      })
    }
    else{
      this.patientService.addPatient(1,this.patientForm.value).subscribe(result =>{
        console.log("Patient added")
      })
    }

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

deletePatient() : void {
  console.log("delete patient")
  this.patientService.deletePatient(1)
  this.router.navigate(['/patient'])

}
}
