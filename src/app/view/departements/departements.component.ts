import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { DepartementService } from 'src/app/service/departement/departement.service';


@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {
  departements: Departement[] = [];

  constructor(private router:Router,  private departementService : DepartementService) { }

  ngOnInit(): void {
    this.getAll();
  }

  goToAdd(){
    this.router.navigate(['/ajouterDepartement']);
  }
  goToService(){
    this.router.navigate(['/departementt']);
  }
  getAll(){
    this.departementService.getAll().subscribe((data: any) => this.departements = data)
  }
  goToDepartement(id:any){
    this.router.navigate(['/departement',id]);
  }
}
