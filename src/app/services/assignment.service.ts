import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Assignment } from "../Assignment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  apiUrl: string = "http://localhost:4000/api/v1/assignments";

  constructor(private http:HttpClient) { }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrl);
  }

  createAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.apiUrl, assignment);
  }

  deleteAssignment(id: String): Observable<Assignment> {
    return this.http.delete<Assignment>(this.apiUrl+`/${id}`);
  }
}
