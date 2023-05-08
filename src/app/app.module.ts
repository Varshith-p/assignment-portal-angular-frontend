import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { AssignmentItemComponent } from './components/assignment-item/assignment-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AssignmentsComponent,
    AssignmentItemComponent,
    AddAssignmentComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
