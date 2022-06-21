import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from 'src/app/models/employe';

const URL = "https://dry-fjord-29838.herokuapp.com/employee"


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
    formData.append('cv',employee.cv!, employee.cv!.name);
    formData.append('image',employee.image!, employee.image!.name);
 // formData.append('vid',employee.vid!, employee.vid!.name);
    formData.append("nom",employee.nom!);
    formData.append("prenom",employee.prenom!);
    formData.append("tel",employee.tel!);
    formData.append("email",employee.email!);
    formData.append("adresse",employee.adresse!);
    formData.append("motDePasse",employee.motDePasse!);
    formData.append("etat",employee.etat!);
    formData.append("cin",employee.cin!);
    formData.append("departementId",employee.departementId!);


    return this.http.post(`${URL}`,formData);
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }
  update(employee:Employe,id?:string){
    return this.http.put(`${URL}/${id}`,employee);
  }
}
