import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { initializeApp } from '@firebase/app';
import { environment } from '../environments/environment';
import { getDatabase } from '@firebase/database';

import { NavComponent } from './view/nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartementComponent } from './view/departement/departement.component';
import { AddemployeeComponent } from './view/addemployee/addemployee.component';
import { CongeComponent } from './view/conge/conge.component';
import { DemandeAdministratifComponent } from './view/demande-administratif/demande-administratif.component';
import { ClientComponent } from './view/client/client.component';
import { AjouterDepartementComponent } from './view/ajouter-departement/ajouter-departement.component';
import { DepartementsComponent } from './view/departements/departements.component';
import { CandidatComponent } from './view/candidat/candidat.component';
import { EmployeComponent } from './view/employe/employe.component';
import { CandidatsComponent } from './view/candidats/candidats.component';
import { AddcandidatComponent } from './view/addcandidat/addcandidat.component';
import { EntretienComponent } from './view/entretien/entretien.component';
import { ReunionComponent } from './view/reunion/reunion.component';
import { CongehistoriqueComponent } from './view/congehistorique/congehistorique.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DepartementComponent,
    AddemployeeComponent,
    CongeComponent,
    DemandeAdministratifComponent,
    ClientComponent,
    AjouterDepartementComponent,
    DepartementsComponent,
    CandidatComponent,
    EmployeComponent,
    CandidatsComponent,
    AddcandidatComponent,
    EntretienComponent,
    ReunionComponent,
    CongehistoriqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
