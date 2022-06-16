import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:8080/employee"


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${URL}`);
  }
  create(departement:any){
    return this.http.post(`${URL}`,departement);
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }
}
