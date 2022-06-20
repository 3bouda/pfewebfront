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
  sendMessage(id:string,msg:string){
    return this.http.post(`${URL}/${id}`,msg);
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }
}
