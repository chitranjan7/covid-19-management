import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NurseService} from 'src/app/services/nurse.service'
@Component({
  selector: 'app-nurse-form',
  templateUrl: './nurse-form.component.html',
  styleUrls: ['./nurse-form.component.scss']
})
export class NurseFormComponent implements OnInit {
  nurseForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private nurseService: NurseService) { }

  ngOnInit(): void {
    this.initializeForm({});

    this.nurseService.getNurse(1).subscribe(nurseData =>{
      this.initializeForm(nurseData);
    })
      }
      submit(): void {
        console.log("nurseform",this.nurseForm)
        this.nurseService.addNurse(1,this.nurseForm.value)

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
}
