import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  constructor(private http: HttpClient) { }

  getDoctorList(): Observable <any> {
    return this.http.get('http://localhost:9000/doctor')
  }

  addDoctor(id,data): Observable <any> {
    return this.http.get('http://localhost:9000/doctor/add/'+id)
  }

  updateDoctor(id,data): Observable <any> {
    return this.http.get('http://localhost:9000/doctor/update/'+id)
  }

  deleteDoctor(id): Observable <any> {
    return this.http.get('http://localhost:9000/doctor/delete/'+id)
  }

  getDoctor(id): Observable <any> {
    return this.http.get('http://localhost:9000/doctor/'+id)
  }
  
}
