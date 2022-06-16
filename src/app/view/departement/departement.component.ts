import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  identifiant!: string;

  constructor(private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }
  goToemployees(){
    this.router.navigate(['/employees']);
  }
  goToAddEmployee(){
    this.router.navigate(['addemployee/',this.identifiant]);
  }
}
