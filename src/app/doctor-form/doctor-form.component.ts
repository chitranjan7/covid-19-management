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
  id: string = null;
  constructor(private formBuilder: FormBuilder,private doctorService:DoctorService,private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state;
    
    router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          const path = event.url.split('/');
          this.formType = path[path.length - 1]
          console.log(this.formType)
          if (this.formType === "edit" && !this.id) {
            if (state && state.data.id) {
              this.id = state.data.id;
              this.doctorService.getDoctor(this.id).subscribe(doctorData =>{
                console.log('doctorData',doctorData)
                this.initializeForm(doctorData);
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
    console.log("doctorform",this.doctorForm)
    if(this.formType=='edit') {
      this.doctorService.updateDoctor(this.id, this.doctorForm.value).subscribe(result =>{
        console.log("updated doctor")
        this.router.navigate(['/doctor'])
      })
    }
    else{
      this.doctorService.addDoctor(this.doctorForm.value.id, this.doctorForm.value).subscribe(result =>{
        console.log("Doctor added")
        this.router.navigate(['/doctor'])
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
    
    this.doctorService.deleteDoctor(this.id).subscribe(doctorList => {
      console.log("deleted doctor")
      this.router.navigate(['/doctor'])
    })
    

  }

}
