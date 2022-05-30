import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './view/calendar/calendar.component';
import { CreatjobComponent } from './view/creatjob/creatjob.component';
import { EmployeesComponent } from './view/employees/employees.component';
import { HomeComponent } from './view/home/home.component';
import { JobsComponent } from './view/jobs/jobs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DepartementComponent } from './view/departement/departement.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'jobs', component: JobsComponent},
  { path: 'departement', component: DepartementComponent},
  { path: 'calendar', component: CalendarComponent},

  { path: 'creatjob', component: CreatjobComponent},
  { path: 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FontAwesomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
