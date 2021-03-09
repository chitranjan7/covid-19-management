import { Component, OnInit } from '@angular/core';

 const ELEMENT_DATA = [
  {id: "3",
  nName: "Varsha",
  dob: "14-04-1992",
  gender: "female",
  qualification: "B.Sc_Nursing",
  experience: "6 Years",
  appointmentDate: "02-03-2021",
  address: "4, Murugan Kovil St.,Kottar",
  number: "8440034190",
  mailId: "varsha14@gmail.com"},
 ];

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.scss']
})
export class NurseComponent implements OnInit {
  
  displayedColumns: string[] = ['id','nName','dob','gender','qualification','experience','appointmentDate','address','number','mailId'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
    



}

}