import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nurse-form',
  templateUrl: './nurse-form.component.html',
  styleUrls: ['./nurse-form.component.scss']
})
export class NurseFormComponent implements OnInit {
  nurseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
      }
      submit(): void {
        console.log("nurseform",this.nurseForm)
    }
    initializeForm(): void {
      this.nurseForm = this.formBuilder.group({
        id: [''],
        nName: [''],
        dob: [''],
        gender: [''],
        qualification: [''],
        experience: [''],
        appointmentDate: [''],
        address: [''],
        number: [''],
        mailId: [''],
      })
}
}
