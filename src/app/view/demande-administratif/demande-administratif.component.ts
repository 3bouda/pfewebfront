import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/demande';
import { Employe } from 'src/app/models/employe';
import { DemandeService } from 'src/app/service/demande/demande.service';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-demande-administratif',
  templateUrl: './demande-administratif.component.html',
  styleUrls: ['./demande-administratif.component.css']
})
export class DemandeAdministratifComponent implements OnInit {

  demandes: Demande[] = [];
  constructor(private demandeService : DemandeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  ok(objet:any,description:any){
    Swal.fire({
      title: `${objet}` ,
      html:
      `${description}` ,
      showCloseButton: true,
      focusConfirm: false,
    })
  }

  getAll(){
    this.demandeService.getAll().subscribe((data: any) => {this.demandes = data})
  }

  deleteDemande(id:any){
    this.demandeService.delete(id).subscribe( x => this.getAll());
  }
}
