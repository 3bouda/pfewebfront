import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/service/candidat/candidat.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  constructor( private candidatService : CandidatService,private activatedRoute: ActivatedRoute) { }
  candidat!: Candidat;

  ngOnInit(): void {
    this.getCandidat();
  }
  getCandidat(){
    this.candidatService.getCandidat(this.activatedRoute.snapshot.params['id']).subscribe((data: any) => this.candidat = data)
  }
}
