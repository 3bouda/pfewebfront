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
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    let params = new HttpParams();
  params.append("nom",employee.nom!)
  params.append("prenom",employee.prenom!)
  params.append("tel",employee.tel!)
  params.append("email",employee.email!)
  params.append("adresse",employee.adresse!)
  params.append("motDePasse",employee.motDePasse!)
  params.append("etat",employee.etat!)
  params.append("CIN",employee.cin!)
  params.append("departementId",employee.departementId!)
    return this.http.post(`${URL}`,formData,{headers: headers, params: params});
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }
}
