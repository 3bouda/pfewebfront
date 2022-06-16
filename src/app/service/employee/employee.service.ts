import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  create(employee:Employe){
    let params = new HttpParams().set("file",employee.imageUrl!)
                                 .set("nom",employee.nom!)
                                 .set("prenom",employee.prenom!)
                                 .set("tel",employee.tel!)
                                 .set("email",employee.email!)
                                 .set("adresse",employee.adresse!)
                                 .set("motDePasse",employee.motDePasse!)
                                 .set("etat","congé")
                                 .set("CIN",employee.CIN!)
                                 .set("departementId",employee.departementId!)

    return this.http.get(`${URL}`,{params});
  }
  delete(id:string){
    return this.http.delete(`${URL}/${id}`);
  }
}
