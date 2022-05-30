import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToemployees(){
    this.router.navigate(['/employees']);}
}
