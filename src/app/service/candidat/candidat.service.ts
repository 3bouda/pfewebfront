import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL = "http://localhost:8080/candidat"

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${URL}`);
  }
  getCandidat(id:string){
    return this.http.get(`${URL}/${id}`);
  }

  create(candidat:any){
    return this.http.post(`${URL}`,candidat);
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }
}
