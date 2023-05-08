import { Component, OnInit } from '@angular/core';
import {Assignment} from "../../Assignment";
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  search: string = "";
  assignments: Assignment[] = [];
  copyAssignments: Assignment[] = [];
  openAssignments: Assignment[] = [];
  closedAssignments: Assignment[] = [];

  constructor(private service: AssignmentService) {}

  helper(): void {
    this.openAssignments = this.copyAssignments.filter((assignment) => new Date(assignment.endDate)>new Date());
    this.closedAssignments = this.copyAssignments.filter((assignment) => new Date(assignment.endDate)<=new Date());
  }

  filter(): void {
    this.search = this.search.trim();
    if(this.search === "") {
      this.copyAssignments = this.assignments;
    } else {
      this.copyAssignments = this.assignments.filter((assignment) => assignment.name.toLowerCase().includes(this.search.toLowerCase()))
    }
    this.helper();
  }

  ngOnInit(): void {
      this.service.getAssignments().subscribe((assignments) => {
        this.assignments = assignments;
        this.copyAssignments = assignments;
        this.helper();
      });
  }
}
