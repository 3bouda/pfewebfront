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
    this.candidatForm.controls['nom'].setValue(this.candidat.nom);
    this.candidatForm.controls['prenom'].setValue(this.candidat.prenom);
    this.candidatForm.controls['tel'].setValue(this.candidat.tel);
    this.candidatForm.controls['email'].setValue(this.candidat.email);
    this.candidatForm.controls['adresse'].setValue(this.candidat.adresse);
 }
 isValidPatternNom():boolean{
  return this.candidatForm.controls['nom'].errors?.['pattern'] &&this.candidatForm.controls['nom'].dirty;
  }
  isRequiredNom():boolean{
    return !this.candidatForm.controls['nom'].errors?.['required'] || this.candidatForm.controls['nom'].pristine;
    }
    isValidPatternPrenom():boolean{
      return this.candidatForm.controls['prenom'].errors?.['pattern'] &&this.candidatForm.controls['prenom'].dirty;
      }
      isRequiredPrenom():boolean{
        return !this.candidatForm.controls['prenom'].errors?.['required'] || this.candidatForm.controls['prenom'].pristine;
        }
        isRequiredEmail():boolean{
          return !this.candidatForm.controls['email'].errors?.['required'] || this.candidatForm.controls['email'].pristine;
          }
          isValidPatternEmail():boolean{
            return this.candidatForm.controls['email'].errors?.['pattern'] &&this.candidatForm.controls['email'].dirty;
            }
            isRequiredAdresse():boolean{
              return !this.candidatForm.controls['adresse'].errors?.['required'] || this.candidatForm.controls['adresse'].pristine;
              }
              isRequiredTel():boolean{
                return !this.candidatForm.controls['tel'].errors?.['required'] || this.candidatForm.controls['tel'].pristine;
                }
                isValidPatternTel():boolean{
                  return this.candidatForm.controls['tel'].errors?.['pattern'] &&this.candidatForm.controls['tel'].dirty;
                  }

}
