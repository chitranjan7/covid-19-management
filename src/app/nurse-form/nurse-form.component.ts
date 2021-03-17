import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder,private nurseService: NurseService, private router: Router) { 
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
    if(this.formType=='edit') {
    this.nurseService.getNurse(1).subscribe(nurseData =>{
      this.initializeForm(nurseData);
    })
   }
      }
      submit(): void {
        console.log("nurseform",this.nurseForm)
        if(this.formType=='edit') {
          this.nurseService.updateNurse(1,this.nurseForm.value).subscribe(result =>{
            console.log("updated nurse")
          })
        }
        else{
          this.nurseService.addNurse(1,this.nurseForm.value).subscribe(result =>{
            console.log("Nurse added")
          })
        }
    }
    initializeForm(nurseData): void {
      this.nurseForm = this.formBuilder.group({
        id: [''||nurseData.id],
        nName: [''||nurseData.nName],
        dob: [''||nurseData.dob],
        gender: [''||nurseData.gender],
        qualification: [''||nurseData.qualification],
        experience: [''||nurseData.experience],
        appointmentDate: [''||nurseData.appointmentDate],
        address: [''||nurseData.address],
        number: [''||nurseData.number],
        mailId: [''||nurseData.mailId],
      })
}
deleteNurse() : void {
  console.log("delete nurse")
  this.nurseService.deleteNurse(1)
  this.router.navigate(['/nurse'])

}
}
