import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-demande-administratif',
  templateUrl: './demande-administratif.component.html',
  styleUrls: ['./demande-administratif.component.css']
})
export class DemandeAdministratifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ok(){
    Swal.fire({
      title: '<strong>Autorisation </strong>',
      html:
        ' <p>Bonjour, je demande une autorisation de 2 heures le 13/06 de 14h à 16h pour des obligations familiales.  </> ' ,
      showCloseButton: true,
      
      focusConfirm: false,
     
      
      
    })
  }
}
