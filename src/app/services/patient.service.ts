import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getpatientList(): Observable <any> {
    return this.http.get('http://localhost:9000/patient')
  }

  addPatient(id,data): Observable <any> {
    return this.http.get('http://localhost:9000/patient/add/'+id)
  }

  updatePatient(id,data): Observable <any> {
    return this.http.get('http://localhost:9000/patient/update/'+id)
  }

  deletePatient(id): Observable <any> {
    return this.http.get('http://localhost:9000/patient/delete/'+id)
  }

  getPatient(id): Observable <any> {
    return this.http.get('http://localhost:9000/patient/'+id)
  }

}
