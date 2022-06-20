import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/service/conge/conge.service';

@Component({
  selector: 'app-congehistorique',
  templateUrl: './congehistorique.component.html',
  styleUrls: ['./congehistorique.component.css']
})
export class CongehistoriqueComponent implements OnInit {
  conges!:Conge[];

  constructor(private congeService : CongeService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.congeService.getAll().subscribe((data: any) => (this.conges = data));
  }

}
