import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import {HomePageComponent} from './home-page/home-page.component'
import { DoctorComponent} from './doctor/doctor.component'
import { NurseComponent} from './nurse/nurse.component'
import {PatientComponent} from './patient/patient.component'
import {ReportComponent} from './report/report.component'
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
    component: DoctorComponent
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
