import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../Assignment';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  assignment: Assignment = {
    name: "",
    subject: "",
    startDate: new Date(),
    endDate: new Date(),
  }
  submitted: boolean = false;

  constructor(private router: Router, private service: AssignmentService) {}

  backToHome() {
    this.router.navigate(['/']);
  }

  onSubmit(form: NgForm) {
    this.service.createAssignment(this.assignment).subscribe((assignment) => console.log(assignment));
    this.submitted = true;
    setTimeout(()=> {
      this.backToHome();
    }, 1000)
  }
}
