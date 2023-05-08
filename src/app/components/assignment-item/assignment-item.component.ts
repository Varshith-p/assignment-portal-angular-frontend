import { Component, Input } from '@angular/core';
import { Assignment } from "../../Assignment";
import { AssignmentService } from '../../services/assignment.service';
import { faCalendarAlt, faTrash, faPen, faClock } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-item',
  templateUrl: './assignment-item.component.html',
  styleUrls: ['./assignment-item.component.css']
})
export class AssignmentItemComponent {
  faCalender = faCalendarAlt;
  faTrash = faTrash;
  faPen =  faPen;
  faClock = faClock;
  @Input() assignment!: Assignment;

  constructor(private service: AssignmentService, private router: Router) {}

  onDelete() {
    if(this.assignment._id) {
      this.service.deleteAssignment(this.assignment._id).subscribe((assignment) => console.log(assignment));
    }
  }
}
