import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatjobComponent } from './view/creatjob/creatjob.component';
import { EmployeesComponent } from './view/employees/employees.component';
import { HomeComponent } from './view/home/home.component';
import { JobsComponent } from './view/jobs/jobs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'creatjob', component: CreatjobComponent},
  { path: 'jobs', component: JobsComponent},
  { path: 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
