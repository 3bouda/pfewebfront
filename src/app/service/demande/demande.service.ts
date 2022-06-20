import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL = "https://dry-fjord-29838.herokuapp.com/demande"


@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${URL}`);
  }
  getDemande(id:string){
    return this.http.get(`${URL}/${id}`);
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }
}
