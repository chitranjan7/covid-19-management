import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getreportList(data): Observable <any> {
    console.log('data',data)
    return this.http.post('http://localhost:9000/reports', data)
  }
}
