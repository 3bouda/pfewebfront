import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidat } from 'src/app/models/candidat';


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

  create(candidat:Candidat){
    let formData:FormData = new FormData();
    formData.append('cv',candidat.cv!, candidat.cv!.name);
    formData.append("nom",candidat.nom!);
    formData.append("prenom",candidat.prenom!);
    formData.append("tel",candidat.tel!);
    formData.append("email",candidat.email!);
    formData.append("adresse",candidat.adresse!);

    return this.http.post(`${URL}`,formData);
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }
  update(candidat:Candidat,id?:string){
    return this.http.put(`${URL}/${id}`,candidat);
  }

}
