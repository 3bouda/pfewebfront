import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Employe } from 'src/app/models/employe';

const URL = "http://localhost:8080/employee"


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${URL}`);
  }
  getEmploye(id:string){
    return this.http.get(`${URL}/${id}`);
  }
  create(employee:Employe){
    let formData:FormData = new FormData();
    formData.append('file',employee.image!, employee.image!.name);
    formData.append("nom",employee.nom!);
    formData.append("prenom",employee.prenom!);
    formData.append("tel",employee.tel!);
    formData.append("email",employee.email!);
    formData.append("adresse",employee.adresse!);
    formData.append("motDePasse",employee.motDePasse!);
    formData.append("etat",employee.etat!);
    formData.append("CIN",employee.cin!);
    formData.append("departementId",employee.departementId!);


    return this.http.post(`${URL}`,formData);
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }
}
