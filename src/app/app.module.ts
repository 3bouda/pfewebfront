import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { NavComponent } from './view/nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { EmployeesComponent } from './view/employees/employees.component';
import { CreatjobComponent } from './view/creatjob/creatjob.component';
import { JobsComponent } from './view/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    EmployeesComponent,
    CreatjobComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
