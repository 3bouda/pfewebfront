import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:8080/departement"

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${URL}`);
  }
  getDepartement(id:string){
    return this.http.get(`${URL}/${id}`);
  }

  create(departement:any){
    return this.http.post(`${URL}`,departement);
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }

}
