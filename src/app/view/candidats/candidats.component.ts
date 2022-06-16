import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToAddCandidat(){
  this.router.navigate(['addcandidat/']);
}
}
