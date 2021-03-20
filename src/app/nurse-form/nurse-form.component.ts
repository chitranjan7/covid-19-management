import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NurseService} from 'src/app/services/nurse.service'
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-nurse-form',
  templateUrl: './nurse-form.component.html',
  styleUrls: ['./nurse-form.component.scss']
})
export class NurseFormComponent implements OnInit {
  nurseForm: FormGroup;
  formType: string;
  id: string = null;
  constructor(private formBuilder: FormBuilder,private nurseService: NurseService, private router: Router) { 
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
                   this.nurseService.getNurse(this.id).subscribe(nurseData =>{
                    this.initializeForm(nurseData);
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
        console.log("nurseform",this.nurseForm)
        if(this.formType=='edit') {
          this.nurseService.updateNurse(this.id,this.nurseForm.value).subscribe(result =>{
            console.log("updated nurse")
            this.router.navigate(['/nurse'])
          })
        }
        else{
          this.nurseService.addNurse(this.nurseForm.value.id, this.nurseForm.value).subscribe(result =>{
            console.log("Nurse added")
            this.router.navigate(['/nurse'])
          })
        }
    }
    initializeForm(nurseData): void {
      this.nurseForm = this.formBuilder.group({
        id: [''||nurseData.id, Validators.required],
        nName: [''||nurseData.nName, Validators.required],
        dob: [''||nurseData.dob, Validators.required],
        gender: [''||nurseData.gender, Validators.required],
        qualification: [''||nurseData.qualification, Validators.required],
        experience: [''||nurseData.experience, Validators.required],
        appointmentDate: [''||nurseData.appointmentDate, Validators.required],
        address: [''||nurseData.address, Validators.required],
        number: [''||nurseData.number, Validators.required],
        mailId: [''||nurseData.mailId, Validators.required],
      })
}
deleteNurse() : void {
  this.nurseService.deleteNurse(this.id).subscribe(res => {
    console.log("deleted nurse")
    this.router.navigate(['/nurse'])
  })

}
}
