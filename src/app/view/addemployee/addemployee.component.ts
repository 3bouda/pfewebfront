import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';
import { Employe } from 'src/app/models/employe';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  image!:File;
  cv!:File;
  vid!:File;

  employe: Employe[] = [];
  employeForm!:FormGroup;

  constructor(public router:Router,private fb:FormBuilder, private employeService : EmployeeService ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeForm=this.fb.group({
      departementId:"",

      nom:"",
      prenom:"",
      tel:"",
      email:"",
      adresse:"",

      motDePasse:"",
      CIN:"",
      etat:"",
      cv:"",
      vid:"",
      image:"",

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
    this.employeForm.controls['departementId'].setValue(this.activatedRoute.snapshot.params['id']);
    this.employeForm.controls['etat'].setValue("congé");
    this.employeService.create(this.employeForm.value).subscribe(() => this.getAll());
    this.router.navigate(['/candidats']);
    }

    uploadImage($event?:any){
      this.image = $event.target.files[0];
      this.employeForm.controls['image'].setValue(this.image);

    }
    uploadCV($event?:any){
      this.cv = $event.target.files[0];
      this.employeForm.controls['cv'].setValue(this.cv);

    }
    // uploadVideo($event?:any){
    //   this.vid = $event.target.files[0];
    //   this.employeForm.controls['vid'].setValue(this.vid);

    // }
}
