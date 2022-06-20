import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
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

  cv!:File;

  constructor(public router:Router,private fb:FormBuilder, private candidatService : CandidatService) { }

  ngOnInit(): void {
    this.getAll();
    this.candidatForm=this.fb.group({
      id:null,
      nom:['', [Validators.required, Validators.pattern('^[A-Z]([a-zA-Z])+')]],
      prenom:['', [Validators.required, Validators.pattern('^[A-Z]([a-zA-Z])+')]],
      tel:['', [Validators.required,Validators.pattern('^[5|4|2|9][0-9]*$'),  Validators.minLength(8), Validators.maxLength(8)]],
      email:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      adresse:['', [Validators.required]],
      cv:""
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
      timer: 2000
    });
    this.candidatService.create(this.candidatForm.value).subscribe(x => this.getAll());
     this.router.navigate(['/candidats']);
  //   this.router.navigateByUrl('/entretien', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['candidats']);
  // });
 }
 uploadCV($event?:any){
  this.cv = $event.target.files[0];
  this.candidatForm.controls['cv'].setValue(this.cv);
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


