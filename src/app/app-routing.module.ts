import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchStudentsComponent } from './Components/search-students/search-students.component';
import { SaveStudentComponent } from './Components/save-student/save-student.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
const routes: Routes = [{path:"aboutus", component: AboutusComponent},
{path:"dashboard", component:DashboardComponent},
{path:"savestudent", component:SaveStudentComponent},
{path:"searchStudents",component:SearchStudentsComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
