import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
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

      nom:['', [Validators.required, Validators.pattern('^[A-Z]([a-zA-Z])+')]],
      prenom:['', [Validators.required, Validators.pattern('^[A-Z]([a-zA-Z])+')]],
      tel:['', [Validators.required,Validators.pattern('^[5|4|2|9][0-9]*$'),  Validators.minLength(8), Validators.maxLength(8)]],
      email:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      adresse:['', [Validators.required]],

      motDePasse:['', [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/), Validators.minLength(8), ],
      ],
      CIN:['', [Validators.required,Validators.pattern('^[1|0][0-9]*$'),  Validators.minLength(8), Validators.maxLength(8)]],
      cv:"",
      vid:"",
      image:"",
      present: [] = [],
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
    this.employeService.create(this.employeForm.value).subscribe(() => this.getAll());
    this.router.navigate(['/departement',this.activatedRoute.snapshot.params['id']]);
    }

    uploadImage($event?:any){
      this.image = $event.target.files[0];
      this.employeForm.controls['image'].setValue(this.image);

    }
    uploadCV($event?:any){
      this.cv = $event.target.files[0];
      this.employeForm.controls['cv'].setValue(this.cv);

    }
    isValidPatternNom():boolean{
      return this.employeForm.controls['nom'].errors?.['pattern'] &&this.employeForm.controls['nom'].dirty;
      }
      isRequiredNom():boolean{
        return !this.employeForm.controls['nom'].errors?.['required'] || this.employeForm.controls['nom'].pristine;
        }
        isValidPatternPrenom():boolean{
          return this.employeForm.controls['prenom'].errors?.['pattern'] &&this.employeForm.controls['prenom'].dirty;
          }
          isRequiredPrenom():boolean{
            return !this.employeForm.controls['prenom'].errors?.['required'] || this.employeForm.controls['prenom'].pristine;
            }
            isRequiredEmail():boolean{
              return !this.employeForm.controls['email'].errors?.['required'] || this.employeForm.controls['email'].pristine;
              }
              isValidPatternEmail():boolean{
                return this.employeForm.controls['email'].errors?.['pattern'] &&this.employeForm.controls['email'].dirty;
                }
                isRequiredAdresse():boolean{
                  return !this.employeForm.controls['adresse'].errors?.['required'] || this.employeForm.controls['adresse'].pristine;
                  }
                  isRequiredTel():boolean{
                    return !this.employeForm.controls['tel'].errors?.['required'] || this.employeForm.controls['tel'].pristine;
                    }
                    isValidPatternTel():boolean{
                      return this.employeForm.controls['tel'].errors?.['pattern'] &&this.employeForm.controls['tel'].dirty;
                      }
                      isRequiredCin():boolean{
                        return !this.employeForm.controls['CIN'].errors?.['required'] || this.employeForm.controls['CIN'].pristine;
                        }
                        isValidPatternCin():boolean{
                          return this.employeForm.controls['CIN'].errors?.['pattern'] &&this.employeForm.controls['CIN'].dirty;
                          }
                          isRequiredMdp():boolean{
                            return !this.employeForm.controls['motDePasse'].errors?.['required'] || this.employeForm.controls['motDePasse'].pristine;
                            }
                            isValidPatternMdp():boolean{
                              return this.employeForm.controls['motDePasse'].errors?.['pattern'] &&this.employeForm.controls['motDePasse'].dirty;
                              }
    // uploadVideo($event?:any){
    //   this.vid = $event.target.files[0];
    //   this.employeForm.controls['vid'].setValue(this.vid);

    // }
}
