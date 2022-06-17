import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './view/employe/employe.component';
import { HomeComponent } from './view/home/home.component';
import { ClientComponent } from './view/client/client.component';
import { DepartementComponent } from './view/departement/departement.component';
import { AddemployeeComponent } from './view/addemployee/addemployee.component';
import { CongeComponent } from './view/conge/conge.component';
import { DemandeAdministratifComponent } from './view/demande-administratif/demande-administratif.component';
import { AjouterDepartementComponent } from './view/ajouter-departement/ajouter-departement.component';
import { DepartementsComponent } from './view/departements/departements.component';
import { CandidatComponent } from './view/candidat/candidat.component';
import { CandidatsComponent } from './view/candidats/candidats.component';
import { AddcandidatComponent } from './view/addcandidat/addcandidat.component';
import { EntretienComponent } from './view/entretien/entretien.component';
import { ReunionComponent } from './view/reunion/reunion.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'departements', component: DepartementsComponent},
  { path: 'ajouterDepartement', component: AjouterDepartementComponent },
  { path: 'departement/:id', component: DepartementComponent},

  { path: 'employee/:id', component: EmployeComponent},
  { path: 'addemployee/:id', component: AddemployeeComponent},

  { path: 'candidats', component: CandidatsComponent},
  { path: 'candidat/:id', component: CandidatComponent},
  { path: 'addcandidat', component: AddcandidatComponent},


  { path: 'entretien', component: EntretienComponent},
  { path: 'reunion', component: ReunionComponent},


  { path: 'client', component: ClientComponent},

  { path: 'congé', component: CongeComponent},
  { path: 'demande', component: DemandeAdministratifComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
