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
import { EmployeesComponent } from './view/employees/employees.component';
import { CalendarComponent } from './view/calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartementComponent } from './view/departement/departement.component';
import { AddemployeeComponent } from './view/addemployee/addemployee.component';
import { CongeComponent } from './view/conge/conge.component';
import { DemandeAdministratifComponent } from './view/demande-administratif/demande-administratif.component';
import { ClientComponent } from './view/client/client.component';
import { AjouterDepartementComponent } from './view/ajouter-departement/ajouter-departement.component';
import { DepartementsComponent } from './view/departements/departements.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    EmployeesComponent,
    CalendarComponent,
    DepartementComponent,
    AddemployeeComponent,
    CongeComponent,
    DemandeAdministratifComponent,
    ClientComponent,
    AjouterDepartementComponent,
    DepartementsComponent
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
