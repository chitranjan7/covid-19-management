import { Component, OnInit } from '@angular/core';
import {DoctorService} from 'src/app/services/doctor.service'
import { Router,NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
 
  displayedColumns: string[] = ['id','dName','dob','gender','qualification','specialist','experience','appointmentDate','address','number','mailId'];
  dataSource = [];
  constructor(private doctorService:DoctorService, private router: Router ) { }
 
  ngOnInit(): void {
    this.doctorService.getDoctorList().subscribe(doctorList => {
      this.dataSource=doctorList
    })
          
  }
    editDoctor(data) : void {
    console.log("edit doctor",data)
        this.router.navigate(['/doctor/edit'])
  }
  
  
}
