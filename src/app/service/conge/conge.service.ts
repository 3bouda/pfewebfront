import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "https://dry-fjord-29838.herokuapp.com/conge"

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${URL}`);
  }
  getConge(id:string){
    return this.http.get(`${URL}/${id}`);
  }

  accept(id:any){
    return this.http.get(`${URL}/${id}/accept`);
  }
  refus(id:any){
    return this.http.get(`${URL}/${id}`+"/refus");
  }
}
