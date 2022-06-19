import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor( private employeService : EmployeeService,private activatedRoute: ActivatedRoute) { }
  employe!: Employe;
  ngOnInit(): void {
    this.getEmploye();
  }
  getEmploye(){
    this.employeService.getEmploye(this.activatedRoute.snapshot.params['id']).subscribe((data: any) => this.employe = data)
  }
  
}
