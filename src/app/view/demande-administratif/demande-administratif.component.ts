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
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      
      focusConfirm: false,
     
      
      
    })
  }
}
