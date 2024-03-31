import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from './data-form/data-form.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://64cc86ea2eafdcdc8519eda4.mockapi.io/Employee/User';

  constructor(private http: HttpClient) {}
  getAllData(): Observable<Details[]> {
    return this.http.get<Details[]>(this.apiUrl);
  }

  createData(data: Details): Observable<Details> {
    return this.http.post<Details>(this.apiUrl,data);
  }

  getByid(id :any): Observable<Details> {
    return this.http.get<Details>(this.apiUrl + "/"+ id);
  }

  updateData(data:Details): Observable<Details> {
    return this.http.put<Details>(this.apiUrl+"/" + data.id,data);
  }

  deleteData(id: any): Observable<Details> {
    return this.http.delete<Details>(this.apiUrl+"/"+id);
  }
}
