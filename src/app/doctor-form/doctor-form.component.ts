import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DoctorService} from 'src/app/services/doctor.service';
@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {
  doctorForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.initializeForm({});

    this.doctorService.getDoctor(1).subscribe(doctorData =>{
      this.initializeForm(doctorData);
    })
  }
  submit(): void {
    console.log("doctorform",this.doctorForm)
    this.doctorService.addDoctor(1,this.doctorForm.value)
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

}
