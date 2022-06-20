import { Component, OnInit } from '@angular/core';
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

  constructor(private congeService : CongeService) { }

  ngOnInit(): void {
    this.getAll();
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
        this.deleteConge(id);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  getAll(){
    this.congeService.getAll().subscribe((data: any) => {this.conges = data})
  }
  deleteConge(id:any){
    this.congeService.delete(id).subscribe( x => this.getAll());
  }

}
