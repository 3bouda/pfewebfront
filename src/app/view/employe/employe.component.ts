import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor(public router:Router,private fb:FormBuilder, private employeService : EmployeeService,private activatedRoute: ActivatedRoute) { }
  employe!: Employe;
  employeForm!:FormGroup;

  ngOnInit(): void {

    this.employeForm=this.fb.group({
      departementId:"",

      nom:"",
      prenom:"",
      tel:"",
      email:"",
      adresse:"",

      motDePasse:"",
      CIN:""
    });
    this.getEmploye();
  }
  getEmploye(){
    this.employeService.getEmploye(this.activatedRoute.snapshot.params['id']).subscribe((data: any) => this.employe = data)
  }

  setValueInForm(){

    this.employeForm.controls['nom'].setValue(this.employe.nom);
    this.employeForm.controls['prenom'].setValue(this.employe.prenom);
    this.employeForm.controls['tel'].setValue(this.employe.tel);
    this.employeForm.controls['email'].setValue(this.employe.email);
    this.employeForm.controls['adresse'].setValue(this.employe.adresse);

    this.employeForm.controls['motDePasse'].setValue(this.employe.motDePasse);
    this.employeForm.controls['CIN'].setValue(this.employe.cin);
 }
 async update(){
  Swal.fire({
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1000
  });
  this.employeForm.controls['departementId'].setValue(this.employe.departementId);
  this.employeService.update(this.employeForm.value,this.activatedRoute.snapshot.params['id']).subscribe(() => this.getEmploye());
  this.router.navigate(['/departements']);
}
}
