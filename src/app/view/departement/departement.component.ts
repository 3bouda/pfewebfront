import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { EmployeeService } from 'src/app/service/employee/employee.service';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  identifiant!: string;
  employees: Employe[]=[]

  constructor(private activatedRoute: ActivatedRoute,private router:Router,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll();
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }
  goToemployees(id:any){
    this.router.navigate(['/employee',id]);
  }
  goToAddEmployee(){
    this.router.navigate(['addemployee/',this.identifiant]);
  }
  getAll(){
    this.employeeService.getAll().subscribe((data: any) => this.employees = data)
  }
  deleteEmployee(id:any){
    this.employeeService.delete(id).subscribe( x => this.getAll());
  }

}
