import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/service/candidat/candidat.service';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {
  candidats: Candidat[]=[];
  constructor(private router:Router,private candidatService: CandidatService) { }


   ngOnInit() {
     this.getAll();
  }
   getAll(){
    this.candidatService.getAll().subscribe((data: any) => this.candidats  = data);
  }
  goToAddCandidat(){
  this.router.navigate(['addcandidat/']);
}
  goToCandidat(id:any){
    this.router.navigate(['candidat/',id]);
  }
  deleteCandidat(id:any){
    this.candidatService.delete(id).subscribe( x => this.getAll());

  }
}
