import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import {HomePageComponent} from './home-page/home-page.component'
import { DoctorComponent} from './doctor/doctor.component'
import { NurseComponent} from './nurse/nurse.component'
import {PatientComponent} from './patient/patient.component'
import {ReportComponent} from './report/report.component'
import {DoctorFormComponent} from './doctor-form/doctor-form.component'
const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'doctor',
    children: [
      {
        path: '', // child route path
        component: DoctorComponent, // child route component that the router renders
      },
      {
        path: 'add', // child route path
        component: DoctorFormComponent, // child route component that the router renders
      },
      {
        path: 'edit',
        component: DoctorFormComponent, // another child route component that the router renders
      },
    ],
  },
  {
    path:'nurse',
    component: NurseComponent
  },
  {
    path:'patient',
    component: PatientComponent
  },
  {
    path:'report',
    component: ReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
