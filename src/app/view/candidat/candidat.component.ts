import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/service/candidat/candidat.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  constructor(public router:Router,private fb:FormBuilder, private candidatService : CandidatService,private activatedRoute: ActivatedRoute) { }
  candidat!: Candidat;
  candidatForm!:FormGroup;

  ngOnInit(): void {
    this.candidatForm=this.fb.group({
      id:null,
      nom:"",
      prenom:"",
      tel:"",
      email:"",
      adresse:"",
    });
    this.getCandidat();
    this.setValueInForm();

  }
  getAll(){
    this.candidatService.getAll().subscribe((data: any) => this.candidat = data)
  }
  getCandidat(){
    this.candidatService.getCandidat(this.activatedRoute.snapshot.params['id']).subscribe((data: any) => this.candidat = data)
  }
  async update(){
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    });
    this.candidatService.update(this.candidatForm.value,this.activatedRoute.snapshot.params['id']).subscribe(() => this.getAll());
    this.router.navigate(['/candidats']);
 }

 setValueInForm(){
    this.candidatForm.controls['id'].setValue(this.candidat.id);
    this.candidatForm.controls['nom'].setValue(this.candidat.nom);
    this.candidatForm.controls['prenom'].setValue(this.candidat.prenom);
    this.candidatForm.controls['tel'].setValue(this.candidat.tel);
    this.candidatForm.controls['email'].setValue(this.candidat.email);
    this.candidatForm.controls['adresse'].setValue(this.candidat.adresse);
 }

}
