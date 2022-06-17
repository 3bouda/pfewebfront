import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/service/candidat/candidat.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcandidat',
  templateUrl: './addcandidat.component.html',
  styleUrls: ['./addcandidat.component.css']
})
export class AddcandidatComponent implements OnInit {
  candidat: Candidat[] = [];
  candidatForm!:FormGroup;
  constructor(public router:Router,private fb:FormBuilder, private candidatService : CandidatService) { }

  ngOnInit(): void {
    this.getAll();
    this.candidatForm=this.fb.group({
      id:null,
      nom:"",
      prenom:"",
      tel:"",
      email:"",
      adresse:"",
    })
  }
  getAll(){
    this.candidatService.getAll().subscribe((data: any) => this.candidat = data)
  }
  async creat(){
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    });
    this.candidatService.create(this.candidatForm.value).subscribe(() => this.getAll());
    this.router.navigate(['/candidats']);  }
}
