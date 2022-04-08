import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  creatRouting(){
    this.router.navigate(['/creatjob']);
  }

}
