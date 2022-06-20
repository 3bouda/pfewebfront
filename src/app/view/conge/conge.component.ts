import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/service/conge/conge.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {

  conges:Conge[]=[]
  conge!:Conge;
  constructor(private router:Router,private congeService : CongeService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.congeService.getAll().subscribe((data: any) => {this.conges = data})
  }

  ok(id:any){
    Swal.fire({
      title: 'vous-étes sûrs ?',

      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText:'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.congeService.accept(id).subscribe((data: any) => {this.conge = data});
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  Notok(id:any){
    Swal.fire({
      title: 'vous-étes sûrs de refuser ?',

      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText:'Non',

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.congeService.refus(id).subscribe((data: any) => {this.conge = data});

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  goToHistoriqueConge(){
    this.router.navigate(['historiqueconge/']);
  }

}
