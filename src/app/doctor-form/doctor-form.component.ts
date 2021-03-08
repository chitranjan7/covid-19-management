import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {
  doctorForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  submit(): void {
    console.log("doctorform",this.doctorForm)
  }
  initializeForm(): void {
    this.doctorForm = this.formBuilder.group({
      id: [''],
      dName: [''],
      dob: [''],
      gender: [''],
      qualification: [''],
      specialist: [''],
      experience: [''],
      appointmentDate: [''],
      address: [''],
      number: [''],
      mailId: [''],
    })
  }

}
