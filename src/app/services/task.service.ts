import {Injectable} from '@angular/core';
import {Task} from "../Task";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks/'
  private jsonOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl + id);
  }

  putTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl + task.id, task, this.jsonOptions);
  }

  postTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, this.jsonOptions)
  }
}
