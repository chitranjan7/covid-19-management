import { Component, OnInit } from '@angular/core';



const ELEMENT_DATA = [
  {address: "21, 3rd cross",
  appointmentDate: "Fri Feb 26 2021 ",
  dName: "Rajan",
  dob: "Tue Jul 12 1983  ",
  experience: "5 Years",
  gender: "Male",
  id: "2",
  mailId: "Rajan24@gmail.com",
  number: "9876213422",
  qualification: "MBBS",
  specialist: "Neuro"},
];

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
 
  displayedColumns: string[] = ['id','dName','dob','gender','qualification','specialist','experience','appointmentDate','address','number','mailId'];
  dataSource = ELEMENT_DATA;
  constructor() { }
 
  ngOnInit(): void {
    
  }
  
  

  
  

}
