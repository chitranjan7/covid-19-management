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
  id: string = null;
  constructor(private formBuilder: FormBuilder,private patientService: PatientService, private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state;
    router.events
          .subscribe(event => 
           {
             if(event instanceof NavigationEnd){
               const path= event.url.split('/');
               this.formType= path[path.length-1]
               console.log(this.formType)
               if (this.formType === "edit" && !this.id) {
                 if (state && state.data.id) {
                   this.id = state.data.id;
                   this.patientService.getPatient(this.id).subscribe(patientData =>{
                    this.initializeForm(patientData);
                  })
                 }
               }
              }
              
           });

   }

  ngOnInit(): void {
    this.initializeForm({});
  }

  submit(): void {
    console.log("patientform",this.patientForm)
    if(this.formType=='edit') {
      this.patientService.updatePatient(this.id, this.patientForm.value).subscribe(result =>{
        console.log("updated patient")
        this.router.navigate(['/patient'])
      })
    }
    else{
      this.patientService.addPatient(this.patientForm.value.id,this.patientForm.value).subscribe(result =>{
        console.log("Patient added")
        this.router.navigate(['/patient'])
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
  this.patientService.deletePatient(this.id).subscribe(res => {
    console.log("deleted patient")
    this.router.navigate(['/patient'])
  })

}
}
