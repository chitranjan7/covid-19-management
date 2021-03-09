import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {address: "35, 4th Cross St.",
bGroup: "A-",
contactNo: "9842555768",
covidTesting: "positive",
date: "Fri Feb 19 2021",
dob: "Thu Jun 24 1982", 
fName: "Muthu",
gender: "male",
hospitalName: "Ganga Hospital",
id: "25",
pName: "Siva",
wardNo: "3"},
];

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
 export class ReportComponent implements OnInit {

  displayedColumns: string[] = ['id','pName','dob','gender','fName','bGroup','address','number','hospitalName','wardNo','covidTesting','date'];
  dataSource = ELEMENT_DATA;
  constructor() { }
  
  ngOnInit(): void {
  
  }
  
  } 