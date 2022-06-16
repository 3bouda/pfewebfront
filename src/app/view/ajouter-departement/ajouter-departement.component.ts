import { Component, OnInit } from '@angular/core';

import { FormBuilder,  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { DepartementService } from 'src/app/service/departement/departement.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouter-departement',
  templateUrl: './ajouter-departement.component.html',
  styleUrls: ['./ajouter-departement.component.css']
})
export class AjouterDepartementComponent implements OnInit {
  departement: Departement[] = [];
  departementForm!:FormGroup;

  constructor(private fb:FormBuilder,public router:Router, private departementService : DepartementService) { }

  ngOnInit(): void {
    this.getAll();
    this.departementForm=this.fb.group({
      id:null,
      nom:"",
      HorraireTravail:"",
      NbrJrSem:"",
      nbrJrCon:"",
      modePoin:"",
      NbrPoinJr:"",
      horrairePoin:"",
    })
  }
  getAll(){
    this.departementService.getAll().subscribe((data: any) => this.departement = data)
  }
  async creat(){
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 3000
    });
    this.departementService.create(this.departementForm.value).subscribe(() => this.getAll());
    this.router.navigate(['/departements']);  }

  // addField(){

  // }
  // removeField(){

  // }
  onSubmit(u:any){
    console.log(u)

  }
}
