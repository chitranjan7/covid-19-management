import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.scss']
})
export class NurseComponent implements OnInit {
  nurseForm: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
submit() : void{
  console.log("nurseForm",this.nurseForm)
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