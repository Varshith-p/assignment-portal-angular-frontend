import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';

const routes: Routes = [
  {path: '', component: AssignmentsComponent},
  {path: "add-assignment", component: AddAssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
