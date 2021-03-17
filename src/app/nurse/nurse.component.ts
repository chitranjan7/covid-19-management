import { Component, OnInit } from '@angular/core';
import {NurseService} from 'src/app/services/nurse.service'
import { Router,NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.scss']
})
export class NurseComponent implements OnInit {
  
  displayedColumns: string[] = ['id','nName','dob','gender','qualification','experience','appointmentDate','address','number','mailId'];
  dataSource = [];
  constructor(private NurseService: NurseService, private router: Router) { }

  ngOnInit(): void {
    this.NurseService.getNurseList().subscribe(nurseList => {
      this.dataSource=nurseList
    })
    
 }

 editNurse(data) : void {
  console.log("edit nurse",data)
      this.router.navigate(['/nurse/edit'])
}

 }