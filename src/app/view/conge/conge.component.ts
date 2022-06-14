import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ok(){
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

}
