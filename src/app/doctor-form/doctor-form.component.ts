import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DoctorService} from 'src/app/services/doctor.service';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {
  doctorForm: FormGroup;
  formType: string;
  constructor(private formBuilder: FormBuilder,private doctorService:DoctorService,private router: Router) { 
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
      this.doctorService.getDoctor(1).subscribe(doctorData =>{
        this.initializeForm(doctorData);
      })

    }

    
  }
  submit(): void {
    console.log("doctorform",this.doctorForm)
    if(this.formType=='edit') {
      this.doctorService.updateDoctor(1,this.doctorForm.value).subscribe(result =>{
        console.log("updated doctor")
      })
    }
    else{
      this.doctorService.addDoctor(1,this.doctorForm.value).subscribe(result =>{
        console.log("Doctor added")
      })
    }
    
  }
  initializeForm(doctorData): void {
    this.doctorForm = this.formBuilder.group({
      id: [''||doctorData.id],
      dName: [''||doctorData.dName],
      dob: [''||doctorData.dob],
      gender: [''||doctorData.gender],
      qualification: [''||doctorData.qualification],
      specialist: [''||doctorData.specialist],
      experience: [''||doctorData.experience],
      appointmentDate: [''||doctorData.appointmentDate],
      address: [''||doctorData.address],
      number: [''||doctorData.number],
      mailId: [''||doctorData.mailId],
    })
  }
  deleteDoctor() : void {
    console.log("delete doctor")
    this.doctorService.deleteDoctor(1)
    this.router.navigate(['/doctor'])

  }

}
