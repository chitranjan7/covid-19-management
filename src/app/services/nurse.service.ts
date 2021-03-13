import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private http: HttpClient) { }

  getNurseList(): Observable <any> {
    return this.http.get('http://localhost:9000/nurse')
  }

  addNurse(id,data): Observable <any> {
    return this.http.get('http://localhost:9000/nurse/add/'+id)
  }

  updateNurse(id,data): Observable <any> {
    return this.http.get('http://localhost:9000/nurse/update/'+id)
  }

  deleteNurse(id): Observable <any> {
    return this.http.get('http://localhost:9000/nurse/delete/'+id)
  }

  getNurse(id): Observable <any> {
    return this.http.get('http://localhost:9000/nurse/'+id)
  }

}
