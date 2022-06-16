import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee/employee.service';

import Swal from 'sweetalert2';
import { Employe } from 'src/app/models/employe';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  identifiant!: string;

  employe: Employe[] = [];
  employeForm!:FormGroup;

  constructor(private fb:FormBuilder, private employeService : EmployeeService ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];

    this.employeForm=this.fb.group({
      id:null,
      departementId:this.identifiant,

      nom:"",
      prenom:"",
      tel:"",
      email:"",
      adresse:"",

      motDePasse:"",
      CIN:"",
      etat:"",

      imageUrl:"",
    })
  }
  getAll(){
    this.employeService.getAll().subscribe((data: any) => this.employe = data)
  }
  async creat(){
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 3000
    });
    this.employeService.create(this.employeForm.value).subscribe(() => this.getAll());
    }
    onSubmit(u:any){
      console.log(u)

    }
}
